const menuToggle = document.querySelector(".menu-toggle");
const navigation = menuToggle.closest("nav");
const mobileView = window.matchMedia("(max-width: 767px)");

function setMenuOpen(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") === "false");
});

navigation.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileView.matches && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuToggle.focus();
    }
});

mobileView.addEventListener("change", () => setMenuOpen(false));

setMenuOpen(false);
menuToggle.hidden = false;
