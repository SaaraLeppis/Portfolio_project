'use strict';
const header = document.querySelector(".main-nav");
const bt = document.querySelector(".back-to-top")

// happens when scrolled 
window.onscroll = function () {
  scrollNavFunction();
  scrollTopFunction();
};

// back to top navigation 
const scrollTopFunction = () => {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    bt.style.display = "block";
  }
  else {
    bt.style.display = "none";
  }
}
// main navigations' background change 
const scrollNavFunction = () => {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};

// mobile menu - removed by clicking hamburger or selection 
const navigator = document.getElementById("nav-ul");
const hamburgerMenu = document.querySelector(".fa-bars");

hamburgerMenu.addEventListener("click", () => {
  navigator.classList.toggle("open");
})


navigator.addEventListener("click", () => {
  if (document.body.clientWidth < 577) {
    navigator.classList.remove("open")
  }

})



