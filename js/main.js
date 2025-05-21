const accordians = document.querySelectorAll(".accordion-item");
accordians.forEach((accordian) => {
    accordian.addEventListener("click", () => {
        accordians.forEach((accordian) => {
            accordian.classList.remove("accordion-item-active");
        });
        accordian.classList.add("accordion-item-active");
    });
});



function setActiveStep(index) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, i) => {
        if (i === index) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}


// Registration Form Steps

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multiStepForm');
    const steps = document.querySelectorAll('.step');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentStep = 1;

    function showStep(step) {
        step1.classList.toggle('d-none', step !== 1);
        step2.classList.toggle('d-none', step !== 2);
        prevBtn.classList.toggle('d-none', step === 1);
        nextBtn.textContent = step === 2 ? 'Submit' : 'Next';

        steps.forEach((s, i) => {
            s.classList.toggle('active', i === step - 1);
        });
    }

    function validateStep(step) {
        const inputs = step === 1 ? step1.querySelectorAll('input') : step2.querySelectorAll('input, textarea, select');
        let valid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('is-invalid');
                valid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        return valid;
    }

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStep === 1 && validateStep(1)) {
            currentStep = 2;
            showStep(2);
        } else if (currentStep === 2 && validateStep(2)) {
            form.submit();
        }
    });

    prevBtn.addEventListener('click', () => {
        currentStep = 1;
        showStep(1);
    });

    showStep(1);
});


const input_group_hidden = document.querySelectorAll('#input_group_hidden');
    