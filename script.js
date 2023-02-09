const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


// I am going to be to validate the form itself
let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity();
      // Style main message for an error
      if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
      }
 // check to see if password match
 if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
} else {
    passwordsMatch = false;
    message.textContent='Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    
}
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);
