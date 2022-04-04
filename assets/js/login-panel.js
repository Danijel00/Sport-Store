"use strict";

/* ============ SIGN UP / SIGN IN SWITCH  ============ */
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// ADD RIGHT PANEL
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// REMOVE RIGHT PANEL
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
