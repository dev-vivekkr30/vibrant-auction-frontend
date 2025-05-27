// form-utils.js

// Enable Bootstrap validation on all forms with .needs-validation
export function enableBootstrapValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    const iconBox = document.getElementById('eye-btn');
    const iconBoxDanger = document.querySelectorAll('.danger-btn');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            iconBox.classList.add('eye-btn-danger');
            iconBoxDanger.forEach(icon => {
                icon.classList.add('eye-btn-danger');
            })
        }, false);
    });
}

// Toggle password visibility for all toggle elements
export function setupPasswordToggles() {
    document.querySelectorAll('[data-toggle="password"]').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const inputId = toggle.getAttribute('data-target');
            const input = document.getElementById(inputId);
            const icon = toggle.querySelector('i');

            if (input && icon) {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                icon.classList.toggle('bi-eye');
                icon.classList.toggle('bi-eye-slash');
            }
        });
    });
}
