const image = document.querySelector('.image'),
      password = document.querySelector('#pass_word'),
      confirmPassword = document.querySelector('#confirm_pass_word'),
      submitButton = document.querySelector('.submit_button')
      errorDisplay = document.querySelector('.error')

image.addEventListener('mouseover', () => {
    image.removeAttribute('src')
    image.setAttribute('src', '/imghover.svg')
})

image.addEventListener('mouseout', () => {
    image.removeAttribute('src')
    image.setAttribute('src', '/imgnormal.svg')
})


confirmPassword.addEventListener("input", () => {
    errorDisplay = document.querySelector('.error')
    if (password.value != confirmPassword.value) {
        errorDisplay.textContent = 'Password doesn\'t match'
    }
    else {
        errorDisplay.setAttribute('id', 'no_error')
        errorDisplay.textContent = 'Password matched'
    }
})