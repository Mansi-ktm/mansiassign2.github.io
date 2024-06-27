function validateForm() {
    var isValid = true;

    // Clear previous error messages
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerHTML = "";
    }

    // First Name validation
    var firstName = document.forms["registrationForm"]["firstName"].value;
    if (firstName == "") {
        document.getElementById('firstNameError').innerHTML = "POOR";
        isValid = false;
    }

    // Last Name validation
    var lastName = document.forms["registrationForm"]["lastName"].value;
    if (lastName == "") {
        document.getElementById('lastNameError').innerHTML = "POOR";
        isValid = false;
    }

    // Email validation
    var email = document.forms["registrationForm"]["email"].value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || !emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = "POOR";
        isValid = false;
    }

    // Password validation
    var password = document.forms["registrationForm"]["password"].value;
    if (password == "" || password.length < 6) {
        document.getElementById('passwordError').innerHTML = "POOR";
        isValid = false;
    }

    // Confirm Password validation
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    if (confirmPassword == "" || confirmPassword != password) {
        document.getElementById('confirmPasswordError').innerHTML = "POOR OR MISMATCH";
        isValid = false;
    }

    // Gender validation
    if (!document.forms["registrationForm"]["gender"].value) {
        document.getElementById('genderError').innerHTML = "POOR";
        isValid = false;
    }

    // Age validation
    var age = document.forms["registrationForm"]["age"].value;
    if (age == "" || age <= 0) {
        document.getElementById('ageError').innerHTML = "POOR";
        isValid = false;
    }

    // Phone Number validation
    var phoneNumber = document.forms["registrationForm"]["phoneNumber"].value;
    var phonePattern = /^[0-9]{10}$/;
    if (phoneNumber == "" || !phonePattern.test(phoneNumber)) {
        document.getElementById('phoneNumberError').innerHTML = "POOR";
        isValid = false;
    }

    // Address validation
    var address = document.forms["registrationForm"]["address"].value;
    if (address == "") {
        document.getElementById('addressError').innerHTML = "POOR";
        isValid = false;
    }

    // State validation
    var state = document.forms["registrationForm"]["state"].value;
    if (state == "") {
        document.getElementById('stateError').innerHTML = "POOR";
        isValid = false;
    }

    // Country validation
    var country = document.forms["registrationForm"]["country"].value;
    if (country == "") {
        document.getElementById('countryError').innerHTML = "POOR";
        isValid = false;
    }

    // Declaration validation
    if (!document.forms["registrationForm"]["declaration"].checked) {
        document.getElementById('declarationError').innerHTML = "POOR";
        isValid = false;
    }

    return isValid;
}
