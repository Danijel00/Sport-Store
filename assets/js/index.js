"use strict";

/* ======= CHANGE HEADER BACKGROUND ======= */

function headerScroll() {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("header__sticky")
    : header.classList.remove("header__sticky");
}

window.addEventListener("scroll", headerScroll);

/* ======= CART BTN  ======= */

const cartBtn = document.querySelectorAll(".product__btn");

cartBtn.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");

  setTimeout(function () {
    button.classList.remove("clicked");
  }, 4000);
  button.classList.add("clicked");
}

/* ======= SWIPER PRODUCTS  ======= */

let swiperProducts = new Swiper(".products__container", {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    328: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    592: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    968: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

/* ======= SWIPER TESTIMONIAL  ======= */

let swiperTestimonial = new Swiper(".testimonial__container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});

/* ======= CHANGE OFFER IMAGE ======= */

let activeImageId = 1;
let nextImageId = 1;

setInterval(function () {
  // Go to next image + 1
  nextImageId = nextImageId + 1;

  if (nextImageId < 3) {
    document
      .getElementById("img" + activeImageId)
      .classList.replace("visible", "hidden");
    document
      .getElementById("img" + nextImageId)
      .classList.replace("hidden", "visible");
    activeImageId = nextImageId;
  } else {
    document
      .getElementById("img" + activeImageId)
      .classList.replace("visible", "hidden");
    document
      .getElementById("img" + nextImageId)
      .classList.replace("hidden", "visible");

    activeImageId = 3;
    nextImageId = 0;
  }
}, 3000);

/* ======= SCROLL REVEAL ======= */
const sr = ScrollReveal({
  origin: "bottom",
  distance: "6rem",
  duration: 2500,
  delay: 400,
});

window.addEventListener("scroll", scrollActive);

sr.reveal(`.latest__container`);

sr.reveal(`.offer__details`, { origin: "right" });
sr.reveal(`.facility__container`, { origin: "left" });

/* ======= SCROLL SECTION ACTIVE LINK ======= */

// ALL SECTIONS ID's
const sections = document.querySelectorAll("section[id], footer[id]");

function scrollActive() {
  scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 700,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/* ======= SHOW AND HIDE NAVBAR MENU ======= */

const burgerBtn = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");

// TOGGLE ON NAV MENU
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// TOGGLE OFF NAV MENU WHEN CLICK ON LINK
document.querySelectorAll(".nav__item").forEach((e) =>
  e.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* ======= SCROLL TO TOP ======= */

// SCROLL TO TOP
window.addEventListener("scroll", calcScrollValue);
window.addEventListener("load", calcScrollValue);

function calcScrollValue() {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  pos > 100
    ? (scrollProgress.style.display = "grid")
    : (scrollProgress.style.display = "none");
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--color-red) ${scrollValue}%, var(--color-black-1) ${scrollValue}%)`;
}

/*========== PRELOADER ==========*/
function preloader() {
  document.querySelector(".preloader").classList.add("fade-out");
}

function fadeOut() {
  setInterval(preloader, 2000);
}

window.onload = fadeOut;

/* ======= COPYRIGHT YEAR ======= */

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
