document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn');

    function checkInputs() {
        return emailInput.value.trim() !== '' && passwordInput.value.trim() !== '';
    }

    function toggleSubmitBtn() {
        if (checkInputs()) {
            submitBtn.classList.add('valid');
        } else {
            submitBtn.classList.remove('valid');
        }
    }
    emailInput.addEventListener('input', toggleSubmitBtn);
    passwordInput.addEventListener('input', toggleSubmitBtn);
});
