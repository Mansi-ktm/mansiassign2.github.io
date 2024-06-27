function validateForm() {
    // Clear previous errors
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    let isValid = true;

    // Validate Username
    const username = document.getElementById("username").value;
    if (username === "") {
        document.getElementById("usernameError").textContent = "This field is required";
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").textContent = "This field is required";
        isValid = false;
    }

    return isValid;
}
