document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // ELEMENTS
    // ============================

    const searchInput = document.getElementById("jobSearch");
    const roleFilter = document.getElementById("roleFilter");
    const locationFilter = document.getElementById("locationFilter");
    const typeFilter = document.getElementById("typeFilter");
    const sortSelect = document.getElementById("sortJobs");

    const jobsGrid = document.querySelector(".jobs-grid");
    const resultText = document.getElementById("resultsText");

    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");
    const pageNumbers = document.getElementById("pageNumbers");

    const jobsPerPage = 12;

    let currentPage = 1;

    let jobs = [...document.querySelectorAll(".job-card")];

    let filteredJobs = [...jobs];

    // ============================
    // FILTER
    // ============================

    function filterJobs(){

        const keyword = searchInput.value.toLowerCase();

        const role = roleFilter.value.toLowerCase();

        const location = locationFilter.value.toLowerCase();

        const type = typeFilter.value.toLowerCase();

        filteredJobs = jobs.filter(job=>{

            const title =
                job.querySelector("h3").textContent.toLowerCase();

            const jobType =
                job.querySelector(".job-type").textContent.toLowerCase();

            const paragraphs = job.querySelectorAll("p");

            const jobLocation =
                paragraphs[0].textContent.toLowerCase();

            return (

                title.includes(keyword)

                &&

                (role==="" || title===role)

                &&

                (location==="" || jobLocation.includes(location))

                &&

                (type==="" || jobType===type)

            );

        });

        sortJobs();

    }

    // ============================
    // SORT
    // ============================

    function sortJobs(){

        const value = sortSelect ? sortSelect.value : "";

        filteredJobs.sort((a,b)=>{

            if(value==="role"){

                return a.querySelector("h3").textContent.localeCompare(

                    b.querySelector("h3").textContent

                );

            }

            if(value==="location"){

                return a.querySelectorAll("p")[0].textContent.localeCompare(

                    b.querySelectorAll("p")[0].textContent

                );

            }

            return 0;

        });

        currentPage = 1;

        renderJobs();

    }

    // ============================
    // DISPLAY
    // ============================

    function renderJobs(){

        jobs.forEach(job=>job.style.display="none");

        const start = (currentPage-1)*jobsPerPage;

        const end = start + jobsPerPage;

        filteredJobs.slice(start,end).forEach(job=>{

            job.style.display="block";

        });

        updateCounter();

        buildPagination();

    }

    // ============================
    // COUNTER
    // ============================

    function updateCounter(){

        const start = filteredJobs.length===0

        ?0

        :(currentPage-1)*jobsPerPage+1;

        const end = Math.min(

            currentPage*jobsPerPage,

            filteredJobs.length

        );

        resultText.textContent =

        `Showing ${start}-${end} of ${filteredJobs.length} jobs`;

    }

    // ============================
    // PAGINATION
    // ============================

    function buildPagination(){

        pageNumbers.innerHTML="";

        const totalPages = Math.ceil(

            filteredJobs.length/jobsPerPage

        );

        for(let i=1;i<=totalPages;i++){

            const btn = document.createElement("button");

            btn.textContent=i;

            btn.className="page-number";

            if(i===currentPage){

                btn.classList.add("active");

            }

            btn.addEventListener("click",()=>{

                currentPage=i;

                renderJobs();

            });

            pageNumbers.appendChild(btn);

        }

        prevBtn.disabled=currentPage===1;

        nextBtn.disabled=currentPage===totalPages;

    }

    // ============================
    // BUTTONS
    // ============================

    prevBtn.addEventListener("click",()=>{

        if(currentPage>1){

            currentPage--;

            renderJobs();

        }

    });

    nextBtn.addEventListener("click",()=>{

        const totalPages = Math.ceil(

            filteredJobs.length/jobsPerPage

        );

        if(currentPage<totalPages){

            currentPage++;

            renderJobs();

        }

    });

    // ============================
    // EVENTS
    // ============================

    searchInput.addEventListener("input",filterJobs);

    roleFilter.addEventListener("change",filterJobs);

    locationFilter.addEventListener("change",filterJobs);

    typeFilter.addEventListener("change",filterJobs);

    if(sortSelect){
    sortSelect.addEventListener("change",sortJobs);
}

    renderJobs();

});