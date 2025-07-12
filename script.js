const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");
const requirementItems = document.querySelectorAll(".requirement-list li");

const requirements = [
  { regex: /.{8,}/, index: 0 }, // At least 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
  { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  requirements.forEach((req) => {
    const isValid = req.regex.test(value);
    const item = requirementItems[req.index];
    item.classList.toggle("valid", isValid);
    item.querySelector("i").className = isValid
      ? "fa-solid fa-check"
      : "fa-solid fa-circle";
  });
});

toggleButton.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleButton.querySelector("i").className = isPassword
    ? "fa-solid fa-eye-slash"
    : "fa-solid fa-eye";
});

// Project: Password Validation Checker
// Author: Kamran Javed
// Portfolio: https://kamranjaved.com
// Company: OneDigitalLine
// Website: https://onedigitalline.com
// Email: meet@kamranjaved.com
// License: For personal or client use only. Redistribution prohibited.
// © Kamran Javed. All rights reserved.
