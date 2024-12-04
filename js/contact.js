document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    const validateField = (input, validationFn, errorMessage) => {
        const isValid = validationFn(input.value.trim());
        if (isValid) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
    };

    const validations = {
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        phoneNumber: (value) => /^\+?\d{10,15}$/.test(value),
        dogAge: (value) => {
            const age = parseInt(value, 10);
            return !isNaN(age) && age >= 0 && age <= 20;
        },
        required: (value) => value.length > 0,
    };

    form.addEventListener("input", (event) => {
        const input = event.target;
        if (input.id === "email") {
            validateField(input, validations.email, "Invalid email address.");
        } else if (input.id === "phoneNumber") {
            validateField(input, validations.phoneNumber, "Invalid phone number.");
        } else if (input.id === "dogAge") {
            validateField(input, validations.dogAge, "Invalid dog's age.");
        } else {
            validateField(input, validations.required, "This field is required.");
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isFormValid = true;

        Array.from(form.elements).forEach((input) => {
            if (input.tagName === "INPUT") {
                const validateFn =
                    input.id in validations
                        ? validations[input.id]
                        : validations.required;
                if (!validateFn(input.value.trim())) {
                    input.classList.add("is-invalid");
                    isFormValid = false;
                }
            }
        });

        if (isFormValid) {
            alert("Form submitted successfully!");
            form.reset();
            Array.from(form.elements).forEach((input) => {
                input.classList.remove("is-valid", "is-invalid");
            });
        }
    });
});