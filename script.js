const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.getElementById('.message-container');
const message = document.getElementById('message');


// I am going to be to validate the form itself
let isvalid = false;

function validateForm() {
    //Using Contraint API to validate
    isvalid = form.checkVisibility();
    console.log(isvalid);
    //Style main message for error messages
    message.textContent = 'please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}


function processFormData(e) {
    e.preventDefault();
    console.log(e);
}


//Event Listener 
form.addEventListener('submit',processFormData);
