const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) {
        console.error("Mobile menu button or navigation list was not found.");
        return;
    }

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutBanner = document.querySelector(".about-fixed-banner");

    if (!aboutBanner) {
        return;
    }

    function updateAboutParallax() {
        const bannerPosition = aboutBanner.getBoundingClientRect();
        const movement = bannerPosition.top * 0.25;

        aboutBanner.style.backgroundPosition =
            "center calc(50% + " + movement + "px)";
    }

    updateAboutParallax();

    window.addEventListener("scroll", updateAboutParallax, {
        passive: true
    });
});