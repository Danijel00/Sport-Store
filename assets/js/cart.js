"use strict";

/* ======= WORKING SHOPPING CART  ======= */

/* ======= SHOW CART ======= */
const modal = document.querySelector(".cart");
const overlay = document.querySelector(".cart__overlay");
const btnCloseModal = document.querySelector(".cart__close");
const btnOpenModal = document.querySelector(".show-cart");

const openModal = function () {
  modal.classList.remove("cart__hidden");
  overlay.classList.remove("cart__overlay-hidden");
};

btnOpenModal.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("cart__hidden");
  overlay.classList.add("cart__overlay-hidden");
};

btnCloseModal.addEventListener("click", closeModal);
/* We create the overlay outside to 
be able to close the modal from the outside */
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  /*If the ESC key is pressed, and modal does 
  not contain the hidden class then close the modal, */
  if (e.key === "Escape" && !modal.classList.contains("cart__hidden")) {
    closeModal();
  }
});
