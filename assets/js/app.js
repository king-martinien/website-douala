let hamburgerBtn = document.querySelector(".hamburger-btn");
let navbar = document.querySelector('.navbar-menu');

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  navbar.classList.toggle('active');
});
