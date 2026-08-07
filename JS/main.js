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

    const leftArrow = document.querySelector(".affiliation-arrow-left");
    const rightArrow = document.querySelector(".affiliation-arrow-right");

    if (!slider || !firstGroup) return;

    let autoScroll = true;
    let isInteracting = false;
    let resumeTimer;

    function moveLogos() {

        if (autoScroll && !isInteracting) {
            slider.scrollLeft += 0.7;
        }

        const groupWidth = firstGroup.offsetWidth;

        if (slider.scrollLeft >= groupWidth) {
            slider.scrollLeft -= groupWidth;
        }

        if (slider.scrollLeft < 0) {
            slider.scrollLeft += groupWidth;
        }

        requestAnimationFrame(moveLogos);
    }

    function stopAutomaticMovement() {
        isInteracting = true;
        autoScroll = false;

        clearTimeout(resumeTimer);
    }

    function resumeAutomaticMovement() {
        isInteracting = false;

        clearTimeout(resumeTimer);

        resumeTimer = setTimeout(function () {
            autoScroll = true;
        }, 1200);
    }

    slider.addEventListener("touchstart", stopAutomaticMovement, {
        passive:true
    });

    slider.addEventListener("touchend", resumeAutomaticMovement, {
        passive:true
    });

    slider.addEventListener("pointerdown", stopAutomaticMovement);

    window.addEventListener("pointerup", resumeAutomaticMovement);

    if (rightArrow) {
        rightArrow.addEventListener("click", function () {

            stopAutomaticMovement();

            slider.scrollBy({
                left:260,
                behavior:"smooth"
            });

            resumeAutomaticMovement();
        });
    }

    if (leftArrow) {
        leftArrow.addEventListener("click", function () {

            stopAutomaticMovement();

            slider.scrollBy({
                left:-260,
                behavior:"smooth"
            });

            resumeAutomaticMovement();
        });
    }

    moveLogos();

});