// navbar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// nav-responsive

var menu = document.querySelector(".menu");
var menubtn = document.querySelector(".bx-menu");
var closebtn = document.querySelector(".bx-x");
menubtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closebtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
