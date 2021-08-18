// DOM elements
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const form = document.querySelector("form#contact")

// REGEX
const validEmail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/

form.setAttribute("novalidate", true)
form.onsubmit = submitForm

function submitForm(event) {
    event.preventDefault()

// if all inputs pass regrex test, then print to console, or load modal/popup
if (inputValid(validName, name) && inputValid(validEmail, email)) {
    console.log(`Name: ${name.value}\nEmail: ${email.value}`)
} else {
    console.log('Inputs are incorrect, please try again.')
    }
}

function inputValid(regex, input) {
return regex.test(input.value)
}