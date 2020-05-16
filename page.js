const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

 

form.addEventListener('submit', function(event) {
    event.preventDefault()  // Prevents the form from submitting

    checkInput();
});

function checkInput() {
    // Get input values and remove white spaces with trim function 

    const usernameInput = username.value.trim(); 
    const emailInput = email.value.trim(); 
    const passwordInput  = password.value.trim(); 
    const password2Input = password2.value.trim(); 

    
    // Set Error and Success messages for inputs

    if (usernameInput === "") {
        setErrorFor(username, "Username cannot be empty");
    } else {
        setSuccessFor(username);
    }


    if (emailInput === "") {
        setErrorFor(email, 'Email cannot be empty');
    } else if(!validEmail(emailInput)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordInput === "") {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
        
    }

    if (password2Input === "") {
        setErrorFor(password2, "Confirm your password");
    } else if(passwordInput !== password2Input) {
        setErrorFor(password2, "Password does not match");
    } else {
        setSuccessFor(password2);
        
    }

    // Set Success message prompt for successful signup
    /* if (usernameInput === username.value && emailInput === email.value && passwordInput === password2Input) {
        alert ("Sign Up Successful!");
    } */
}



function setErrorFor(input, message) {
    const formDetail = input.parentElement; // .form-detail class
    const small = formDetail.querySelector('small');

    // add error message and error class

    small.innerText = message;

    formDetail.className = 'form-detail error';
} 



function setSuccessFor(input) {
    const formDetail = input.parentElement;
    formDetail.className = 'form-detail success'; 
}

function validEmail(email) {
    var auth = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return auth.test(email);
}


