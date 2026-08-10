function renderPageNumbers(currentPage, totalPages) {

    const pageNumbers = document.getElementById("pageNumbers");

    pageNumbers.innerHTML = "";

    const isMobile = window.innerWidth <= 576;

    let pagesToShow = [];

    if (!isMobile) {

        for (let i = 1; i <= totalPages; i++) {
            pagesToShow.push(i);
        }

    } else {

        if (totalPages <= 5) {

            for (let i = 1; i <= totalPages; i++) {
                pagesToShow.push(i);
            }

        } else if (currentPage <= 3) {

            pagesToShow = [1, 2, 3, "...", totalPages];

        } else if (currentPage >= totalPages - 2) {

            pagesToShow = [
                1,
                "...",
                totalPages - 2,
                totalPages - 1,
                totalPages
            ];

        } else {

            pagesToShow = [
                1,
                "...",
                currentPage,
                "...",
                totalPages
            ];
        }
    }

    pagesToShow.forEach(function (page) {

        if (page === "...") {

            const dots = document.createElement("span");

            dots.className = "pagination-dots";
            dots.textContent = "...";

            pageNumbers.appendChild(dots);

            return;
        }

        const button = document.createElement("button");

        button.className = "page-btn";
        button.textContent = page;

        if (page === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", function () {
            goToPage(page);
        });

        pageNumbers.appendChild(button);
    });
}