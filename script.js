// Typed.js animation
var typed = new Typed(".multiple-text", {
  strings: ["Student", "Web Developer", "Youtuber"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Navbar toggle for mobile
const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
