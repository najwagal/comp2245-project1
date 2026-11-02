document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const frequencySelect = document.getElementById('frequency');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const frequencyError = document.getElementById('frequency-error');
  const formMessage = document.getElementById('form-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;
    let firstErrorField = null;

    formMessage.textContent = '';
    formMessage.classList.remove('success');

    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
      nameError.textContent = 'Enter your name.';
      nameInput.setAttribute('aria-invalid', 'true');
      hasError = true;
      firstErrorField = nameInput;
    } else {
      nameError.textContent = '';
      nameInput.removeAttribute('aria-invalid');
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      emailError.textContent = 'Enter your email address.';
      emailInput.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Enter an email address like name@example.com.';
      emailInput.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else {
      emailError.textContent = '';
      emailInput.removeAttribute('aria-invalid');
    }

    const frequencyValue = frequencySelect.value;
    if (frequencyValue === '') {
      frequencyError.textContent = 'Choose how often we should email you.';
      frequencySelect.setAttribute('aria-invalid', 'true');
      hasError = true;
      if (!firstErrorField) firstErrorField = frequencySelect;
    } else {
      frequencyError.textContent = '';
      frequencySelect.removeAttribute('aria-invalid');
    }

    if (hasError) {
      firstErrorField.focus();
    } else {
      formMessage.textContent = `Thank you, ${nameValue}! You're on the mailing list.`;
      formMessage.classList.add('success');
      form.reset();
    }
  });
});