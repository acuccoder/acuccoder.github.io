const hamMenu = document.querySelector(".ham-menu");
const offScreenNavLinks = document.querySelector(".offscreen-nav-links");
const OSNLul = document.querySelector(".offscreen-nav-links ul");

hamMenu.addEventListener('click', () => {
    toggleMenu();
})

function toggleMenu() {
    hamMenu.classList.toggle('active');
    offScreenNavLinks.classList.toggle('active');
    console.log("Menu toggled");
}

for (const li of OSNLul.children) {
    li.addEventListener('click', () => {
        toggleMenu();
    });
}