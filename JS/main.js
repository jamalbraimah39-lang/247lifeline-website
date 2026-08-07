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
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".affiliation-slider");
    const firstGroup = document.querySelector(".affiliation-group");

    if (!slider || !firstGroup) return;

    let autoScroll = true;
    let resumeTimer;

    function moveLogos() {

        if (autoScroll) {
            slider.scrollLeft += 0.6;
        }

        const groupWidth = firstGroup.offsetWidth;

        if (slider.scrollLeft >= groupWidth) {
            slider.scrollLeft -= groupWidth;
        }

        requestAnimationFrame(moveLogos);
    }

    function pauseAutoScroll() {

        autoScroll = false;

        clearTimeout(resumeTimer);

        resumeTimer = setTimeout(function () {
    autoScroll = true;
}, 4000);
    }
    
    slider.addEventListener("touchend", pauseAutoScroll, {
    passive: true
});

    slider.addEventListener("touchstart", pauseAutoScroll, {
        passive: true
    });

    slider.addEventListener("touchmove", pauseAutoScroll, {
        passive: true
    });

    slider.addEventListener("pointerdown", pauseAutoScroll);

    slider.addEventListener("wheel", pauseAutoScroll, {
        passive: true
    });

    moveLogos();

});