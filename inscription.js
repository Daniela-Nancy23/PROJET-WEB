document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscription-form');
    const submitBtn = document.getElementById('submit-btn');
    const inputs = form.querySelectorAll('input[required]');
    const accepter = document.getElementById('accepter');

    function checkInputs() {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
            }
        });
        if (!accepter.checked) {
            isValid = false;
        }
        return isValid;
    }

    function toggleSubmitBtn() {
        if (checkInputs()) {
            submitBtn.classList.add('valid');
        } else {
            submitBtn.classList.remove('valid');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', toggleSubmitBtn);
    });

    accepter.addEventListener('change', toggleSubmitBtn);
});
