document.addEventListener("DOMContentLoaded", function () {

    // Automatically animate existing homepage cards
    document.querySelectorAll(
        ".service-card, .why-card, .job-card, .process-card, " +
        ".stat-card, .testimonial-card, .faq-item"
    ).forEach(function (card) {
        card.classList.add("reveal-card");
    });

    // Automatically animate section headings and subtitles
    document.querySelectorAll(
        ".section-title, .section-subtitle"
    ).forEach(function (element) {
        element.classList.add("reveal-text");
    });

    // Animate the About section without editing its HTML
    const aboutText = document.querySelector(".about-text");
    const aboutImage = document.querySelector(".about-image");

    if (aboutText) {
        aboutText.classList.add("reveal-left");
    }

    if (aboutImage) {
        aboutImage.classList.add("reveal-right");
    }

    // Observe all animation elements
    const animatedElements = document.querySelectorAll(
        ".reveal-text, .reveal-left, .reveal-right, .reveal-card"
    );

    const observer = new IntersectionObserver(
        function (entries, observerInstance) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });

});