const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

});

document.querySelectorAll(".reveal-text").forEach(el=>{

    observer.observe(el);

});