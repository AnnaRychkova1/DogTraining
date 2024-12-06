document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const validateField = (
    input,
    validationFn,
    errorMessage,
    requiredMessage
  ) => {
    const value = input.value.trim();

    const invalidFeedback = input
      .closest(".input-container")
      .querySelector(".invalid-feedback");

    if (!value) {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      invalidFeedback.style.display = "block";
      invalidFeedback.innerHTML = requiredMessage;
      return false;
    }

    const isValid = validationFn(value);
    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      invalidFeedback.style.display = "none";
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      invalidFeedback.style.display = "block";
      invalidFeedback.innerHTML = errorMessage;
    }
    return isValid;
  };

  const validations = {
    firstName: (value) => value.length > 0,
    lastName: (value) => value.length > 0,
    dogName: (value) => value.length > 0,
    dogBreed: (value) => value.length > 0,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phoneNumber: (value) => /^\+?\d{10,15}$/.test(value),
    dogAge: (value) => {
      const age = parseInt(value, 10);
      return !isNaN(age) && age >= 0 && age <= 20;
    },
  };

  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", (event) => {
      const input = event.target;
      const invalidFeedback = input
        .closest(".input-container")
        .querySelector(".invalid-feedback");

      input.classList.remove("is-invalid");
      invalidFeedback.style.display = "none";
    });

    input.addEventListener("blur", (event) => {
      const input = event.target;
      const inputId = input.id;
      if (validations[inputId]) {
        validateField(
          input,
          validations[inputId],
          `Please enter a valid ${inputId
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()}.`,
          "This field is required"
        );
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isFormValid = true;

    Array.from(form.elements).forEach((input) => {
      if (input.tagName === "INPUT" && validations[input.id]) {
        const validateFn = validations[input.id];
        const invalidFeedback = input
          .closest(".input-container")
          .querySelector(".invalid-feedback");
        if (!validateFn(input.value.trim())) {
          input.classList.add("is-invalid");
          invalidFeedback.style.display = "block";
          invalidFeedback.innerHTML = `Please enter a valid ${input.id
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()}.`;
          isFormValid = false;
        } else {
          input.classList.remove("is-invalid");
          input.classList.add("is-valid");
          invalidFeedback.style.display = "none";
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

// Random picture for .contact-container
new RandomImageGenerator(
  ["images/main/paw-paw-blue.png", "images/main/paw-paw-red.png"],
  ".contact-container"
);
