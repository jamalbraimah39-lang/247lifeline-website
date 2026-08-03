document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(".faq-question");

    console.log("Found FAQs:", questions.length);

    questions.forEach(question => {

        question.addEventListener("click", function () {

            console.log("Clicked!");

            const answer = this.nextElementSibling;

            if (answer.style.maxHeight) {

                answer.style.maxHeight = null;
                this.querySelector("span").textContent = "+";

            } else {

                answer.style.maxHeight = answer.scrollHeight + "px";
                this.querySelector("span").textContent = "−";

            }

        });

    });

});