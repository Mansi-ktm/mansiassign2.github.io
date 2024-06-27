function validateForm() {
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("websiteError").textContent = "";
    document.getElementById("messageError").textContent = "";
    
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "This field is required";
        document.getElementById("name").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("name").classList.remove("error");
    }

    // Validate Email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "A valid email address is required";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "A valid email address is required";
        document.getElementById("email").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("error");
    }

    // Validate Website
    const website = document.getElementById("website").value;
    const urlPattern = /^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})+\/?/;
    if (website === "") {
        document.getElementById("websiteError").textContent = "A valid URL is required";
        document.getElementById("website").classList.add("error");
        isValid = false;
    } else if (!urlPattern.test(website)) {
        document.getElementById("websiteError").textContent = "A valid URL is required";
        document.getElementById("website").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("website").classList.remove("error");
    }

    // Validate Message
    const message = document.getElementById("message").value;
    if (message === "") {
        document.getElementById("messageError").textContent = "This field is required";
        document.getElementById("message").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("message").classList.remove("error");
    }

    return isValid;
}
