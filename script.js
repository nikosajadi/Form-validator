const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.getElementById('message-container');


function processFormData(e) {
    e.preventDefault();
    console.log(e);
}


//Event Listener 
form.addEventListener('submit',processFormData);
