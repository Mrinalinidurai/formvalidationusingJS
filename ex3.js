document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Validate required fields
    // Validate form elements
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }
    if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        emailInput.focus();
        return;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }
    if (messageInput.value.trim() === "") {
        alert("Please enteer your review");
        messageInput.focus();
        return;
    }
    if (!termsCheckbox.checked) {
        alert("Please agree to the Terms and Conditions.");
        return;
    }
    if (genderInput) {
        const selectedGender = genderInput.value;
        alert('You selected: ' + selectedGender);
    }

    // If all validations pass, show a confirmation message and reset the form
    const isConfirmed = confirm("Are you sure you want to submit this form?");
    if (isConfirmed) {
        alert("Form submitted successfully!");
        document.getElementById("rev").reset();
    }
});