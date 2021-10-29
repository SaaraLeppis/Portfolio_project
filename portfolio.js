'use strict';
const header = document.querySelector(".main-nav");
//let text = document.querySelector(".main-header");
const bt = document.querySelector(".back-top-wrap")



//remove, shows only the height 
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset + "px");
})

// happens when scrolled 
window.onscroll = function () {
  scrollNavFunction();
  scrollTopFunction();
};

// back to top navigation 
const scrollTopFunction = () => {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    bt.style.display = "block";
    //bt.style.transition = "2s";
  }
  else {
    bt.style.display = "none";
  }
}
// main navigations' back-ground change 
const scrollNavFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};

// mobile menu 
const navigator = document.getElementById("nav-ul");
const hamburgerMenu = document.getElementById("navbar-hamburger");
const closeMenu = document.getElementById("close-symbol")

hamburgerMenu.addEventListener("click", function () {
  navigator.classList.toggle("active")

})
closeMenu.addEventListener("click", function () {
  navigator.style.display = "none";


})


/* const menuBar = document.querySelector("#nav-ul");
menuBar.addEventListener("click", (event) => {
  const element = event.target;
  console.log(element.className)
  if (element.className === "material-icons") {
    doSomething()
  }
})

function doSomething() {
  const x = document.getElementById("responsive-nav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
} */


