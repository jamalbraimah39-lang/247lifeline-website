document.addEventListener("DOMContentLoaded", function () {
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
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
});