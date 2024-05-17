const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

nameInput.addEventListener('input', function() {
  checkName();
});

emailInput.addEventListener('input', function() {
  checkEmail();
});

passwordInput.addEventListener('input', function() {
  checkPassword();
});

function validateForm() {
  let valid = true;

  if (!checkName()) valid = false;
  if (!checkEmail()) valid = false;
  if (!checkPassword()) valid = false;

  if (valid) {
    console.log('Form is valid');
    // Here, you can submit the form or perform any additional actions
  }
}

function checkName() {
  const name = nameInput.value.trim();
  const nameError = document.getElementById('nameError');
  const nameCriteria = document.getElementById('nameCriteria');

  nameError.textContent = '';
  nameCriteria.classList.remove('invalid');

  if (!name) {
    nameError.textContent = 'Name is required';
    nameCriteria.classList.add('invalid');
    return false;
  }

  nameCriteria.classList.add('valid');
  return true;
}

function checkEmail() {
  const email = emailInput.value.trim();
  const emailError = document.getElementById('emailError');
  const emailCriteria = document.getElementById('emailCriteria');

  emailError.textContent = '';
  emailCriteria.classList.remove('invalid');

  if (!email) {
    emailError.textContent = 'Email is required';
    emailCriteria.classList.add('invalid');
    return false;
  }

  if (!isValidEmail(email)) {
    emailError.textContent = 'Invalid email address';
    emailCriteria.classList.add('invalid');
    return false;
  }

  emailCriteria.classList.add('valid');
  return true;
}

function checkPassword() {
  const password = passwordInput.value.trim();
  const passwordError = document.getElementById('passwordError');
  const passwordCriteria = document.getElementById('passwordCriteria');

  passwordError.textContent = '';
  passwordCriteria.classList.remove('invalid');

  if (!password) {
    passwordError.textContent = 'Password is required';
    passwordCriteria.classList.add('invalid');
    return false;
  }

  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    passwordCriteria.classList.add('invalid');
    return false;
  }

  passwordCriteria.classList.add('valid');
  return true;
}

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
