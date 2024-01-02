import particlesJS from "../../node_modules/particles.js/particles";

const menubutton = document.getElementById("hamburgerBTN");
const menubar = document.getElementById("menu");
let menuOpen = false;

menubutton.addEventListener("click", toggleMenu);
menubutton.addEventListener("click", openMenu);
menubar.style.setProperty("transform", "translateX(calc(-100% - 2.5vw))");
function toggleMenu() {
  if (menubar.style.transform == "translateX(calc(-100% - 2.5vw))") {
    console.log("menubar currently hidden. moving...");
    menubar.style.setProperty("transform", "none");
  } else {
    console.log("menubar currently shown. moving...");
    menubar.style.setProperty("transform", "translateX(calc(-100% - 2.5vw))");
  }
}

function openMenu() {
  if (!menuOpen) {
    menubutton.classList.add("open");
    menuOpen = true;
  } else {
    menubutton.classList.remove("open");
    menuOpen = false;
  }
}

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});
