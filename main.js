const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorSpan = document.querySelector("span");
const successMessage = document.querySelector(".success-message");
const signUpForm = document.querySelector(".sign-up-form");
const spanEmail = document.querySelector(".span-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValue = emailInput.value.trim();

  errorSpan.textContent = "";
  emailInput.classList.remove(
    "border-red",
    "focus:border-red",
    "bg-red/10",
    "placeholder:text-red",
    "text-red"
  );

  if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
    errorSpan.textContent = "Valid email required";
    emailInput.classList.add(
      "border-red",
      "focus:border-red",
      "bg-red/10",
      "placeholder:text-red",
      "text-red"
    );
    emailInput.placeholder = "";
  } else {
    signUpForm.classList.add("hidden", "lg:hidden");
    successMessage.classList.remove("hidden");
    spanEmail.textContent = emailValue;
  }
});
