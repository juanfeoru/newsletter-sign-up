# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/juanfeoru/newsletter-sign-up)
- Live Site URL: [Live Site](https://juanfeoru.github.io/newsletter-sign-up)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Vanilla JavaScript for form validation

### What I learned

This project helped me practice form validation with JavaScript and responsive design using Tailwind CSS. I implemented email validation using regex patterns and created dynamic error states:

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
  errorSpan.textContent = "Valid email required";
  emailInput.classList.add(
    "border-red",
    "focus:border-red",
    "bg-red/10",
    "placeholder:text-red",
    "text-red"
  );
}
```

I also learned how to create smooth hover effects with gradients and shadows in Tailwind:

```html
<button
  class="hover:bg-[linear-gradient(to_right,#ff5474,#ff6841)] hover:shadow-[0_0_15px_#ff5474]"
>
  Subscribe to monthly newsletter
</button>
```

### Continued development

I want to continue improving my skills with:

- Form validation and accessibility
- Responsive design patterns
- CSS animations and transitions
- JavaScript best practices

## Author

- GitHub - [@juanfeoru](https://github.com/juanfeoru)
- Frontend Mentor - [@juanfeoru](https://www.frontendmentor.io/profile/juanfeoru)
