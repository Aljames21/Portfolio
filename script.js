
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


const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#contact-name").value.trim();
        const email = document.querySelector("#contact-email").value.trim();
        const subject = document.querySelector("#contact-subject").value.trim();
        const message = document.querySelector("#contact-message").value.trim();

        const recipient = "jrgaralde123@gmail.com";

        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;

        const mailtoLink =
            `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    });
}
