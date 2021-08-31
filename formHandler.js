// DOM elements
const name = document.querySelector("#name") 
const email = document.querySelector("#email") // if we want to access ID, we use #
const form = document.querySelector("form#contact")
const closeModalButton = document.querySelector("#closemodal")
//create a variable for model 
const modal=document.querySelector(".modal") // if we want to access class, we use . this shows pop up

// REGEX
const validEmail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/

form.setAttribute("novalidate", true)
form.onsubmit = submitForm

function submitForm(event) {
    event.preventDefault()
    modal.style.display = "flex";

// if all inputs pass regrex test, then print to console, or load modal/popup
if (inputValid(validName, name) && inputValid(validEmail, email)) {
    console.log(`Name: ${name.value}\nEmail: ${email.value}`)
// run openModal Function
} else {
    console.log('Inputs are incorrect, please try again.')
    }
}

function inputValid(regex, input) {
return regex.test(input.value)
}

closeModal.onclick = () => {
    console.log("heello!")
    // change the attribute of model class, set to invisble
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
  }
  }

// TODO select body //
// TODO select .modal
//todo: ADD MODAL-ACTIVE CLASS TOBODY
//TODO: remove "hidden" class from modal
// create function that closes modal and is the opposite
// run close modal function