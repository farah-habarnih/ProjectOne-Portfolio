let togglebtn = document.querySelector(".toggle-btn");
let navbar = document.querySelector(".navbar");

togglebtn.addEventListener("click", () => {
  navbar.classList.toggle("mobile-nav");
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let fname = document.getElementById("fname");
let userform = document.getElementById("form-validate");
let last = document.getElementById("lname");

userform.addEventListener("submit", function validate(e) {
  e.preventDefault();
  localStorage.setItem("first name", JSON.stringify(fname.value));
  localStorage.setItem("last name", JSON.stringify(last.value));
});

let scrollBtn = document.getElementById("scroll-up");
document.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
