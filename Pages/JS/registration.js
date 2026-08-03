const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step");
const fills = document.querySelectorAll(".line-fill");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("form");
let currentStep = 0;
const stepTitles = [

    "Step 1 of 6 - Personal Details",

    "Step 2 of 6 - Employment Details",

    "Step 3 of 6 - Right to Work",

    "Step 4 of 6 - Compliance Documents",

    "Step 5 of 6 - References",

    "Step 6 of 6 - Review & Submit"

];

updateForm();

nextBtn.addEventListener("click", () => {

    if(currentStep === 0){

        if(!validateStepOne()){
            return;
        }

    }

    if(currentStep < steps.length - 1){

        currentStep++;

        updateForm();

    }

});

prevBtn.addEventListener("click", () => {

    if (currentStep > 0) {

        currentStep--;

        updateForm();

    }

});

function updateForm() {

    steps.forEach(step => step.classList.remove("active"));

    progressSteps.forEach(step => step.classList.remove("active"));

    fills.forEach(fill => fill.style.width = "0");

    steps[currentStep].classList.add("active");

    progressSteps[currentStep].classList.add("active");

    for (let i = 0; i < currentStep; i++) {

        fills[i].style.width = "100%";

        progressSteps[i + 1].classList.add("active");

    }

    prevBtn.style.visibility = currentStep === 0
        ? "hidden"
        : "visible";

    if (currentStep === steps.length - 1) {

    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";

} else {

    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
    nextBtn.textContent = "Continue →";

}
            const progressPercent = document.getElementById("progressPercent");

const percent = Math.round(((currentStep + 1) / steps.length) * 100);

progressPercent.textContent = percent + "%";

const stepTitle = document.getElementById("stepTitle");

stepTitle.textContent = stepTitles[currentStep];

}

function validateStepOne() {

    const firstName = document.getElementById("firstName").value.trim();

    const lastName = document.getElementById("lastName").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const dob = document.getElementById("dob").value;

    const ni = document.getElementById("niNumber").value.trim();

    const error = document.getElementById("formError");

    error.textContent = "";

    if (firstName === "") {

        error.textContent = "Please enter your first name.";

        return false;

    }

    if (lastName === "") {

        error.textContent = "Please enter your last name.";

        return false;

    }

    if (email === "") {

        error.textContent = "Please enter your email address.";

        return false;

    }

    if (phone === "") {

        error.textContent = "Please enter your phone number.";

        return false;

    }

    if (dob === "") {

        error.textContent = "Please enter your date of birth.";

        return false;

    }

    if (ni === "") {

        error.textContent = "Please enter your National Insurance Number.";

        return false;

    }

    return true;

}

function validateField(field) {

    if (field.value.trim() === "") {

        field.classList.remove("valid");
        field.classList.add("invalid");

    } else {

        field.classList.remove("invalid");
        field.classList.add("valid");

    }

}

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("input", () => {

        validateField(input);

    });

});
form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;

    submitBtn.innerHTML = "Submitting...";

    setTimeout(function(){

        alert("Application submitted successfully!");

        // Redirect to Thank You page
        // window.location.href = "thank-you.html";

        submitBtn.disabled = false;

        submitBtn.innerHTML = "Submit Application";

    },2000);

});