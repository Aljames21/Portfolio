
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuIcon.classList.replace("bx-menu", "bx-x");
        } else {
            menuIcon.classList.replace("bx-x", "bx-menu");
        }
    });

    // Close the menu after selecting a navigation link
    navbar.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuIcon.classList.replace("bx-x", "bx-menu");
        });
    });

    // Close the mobile menu when returning to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove("active");
            menuIcon.classList.replace("bx-x", "bx-menu");
        }
    });
}
