const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


// I am going to be to validate the form itself
let isValid = false;
let passwordMatch = false;

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity();
      // Style main message for an error
      if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
      }
 // check to see if password match
 if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = 'green'
    password1El.style.borderColor = 'green'
} else {
    passwordMatch = false;
    message.textContent='Make sure passwords match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
}
}
function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);
