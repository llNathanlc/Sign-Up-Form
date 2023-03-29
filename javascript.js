let inputs = document.querySelectorAll('input');
let userPassword = document.getElementById('user-password');
let userConfirmPassword = document.getElementById('user-confirmPassword');


Array.from(inputs).forEach(e => {
    e.addEventListener('keyup', function () {
        if (e.value.length == 0) { e.classList.remove('invalid'); e.classList.remove('valid'); }
        else if (e.checkValidity() == true) { e.classList.remove('invalid'); e.classList.add('valid'); }
        else if (e.checkValidity() == false) { e.classList.remove('valid'); e.classList.add('invalid'); }
    })
});
const div = document.createElement('div');
div.textContent = "* Passwords do not match";
div.setAttribute('style', 'font-size:10px; color: red;')
userConfirmPassword.addEventListener('keyup', function () {
    if (this.value.length == 0 && userPassword.value.length == 0) {
        this.classList.remove('invalid'); this.classList.remove('valid');
        userPassword.classList.remove('invalid'); userPassword.classList.remove('valid');
        userPassword.parentNode.removeChild(div);
    }
    else if (userPassword.value != userConfirmPassword.value) {
        userConfirmPassword.classList.remove('valid');
        userConfirmPassword.classList.add('invalid');
        userPassword.classList.remove('valid')
        userPassword.classList.add('invalid');
        userPassword.parentNode.appendChild(div);
    }
    else if (userPassword.value == userConfirmPassword.value) {
        userConfirmPassword.classList.remove('invalid');
        userConfirmPassword.classList.add('valid');
        userPassword.classList.remove('invalid')
        userPassword.classList.add('valid');
        userPassword.parentNode.removeChild(div);
    }
});
userPassword.addEventListener('keyup', function () {
    if (this.value.length == 0 && userConfirmPassword.value.length == 0) {
        this.classList.remove('invalid'); this.classList.remove('valid');
        userConfirmPassword.classList.remove('invalid'); userConfirmPassword.classList.remove('valid');
        userPassword.parentNode.removeChild(div);
    }
    else if (userPassword.value != userConfirmPassword.value) {
        userConfirmPassword.classList.remove('valid');
        userConfirmPassword.classList.add('invalid');
        userPassword.classList.remove('valid')
        userPassword.classList.add('invalid');
        userPassword.parentNode.appendChild(div);
    }
    else if (userPassword.value == userConfirmPassword.value) {
        userConfirmPassword.classList.remove('invalid');
        userConfirmPassword.classList.add('valid');
        userPassword.classList.remove('invalid')
        userPassword.classList.add('valid');
        userPassword.parentNode.removeChild(div);
    }
});