window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form from submitting normally

        const userVal = username.value.trim();
        const passVal = password.value.trim();

        // Reset styles
        username.style.borderColor = "#ccc";
        password.style.borderColor = "#ccc";
        message.innerText = "";

        if (!userVal || !passVal) {
            message.innerText = "Both fields are required.";
            message.style.color = "#d63333";
            if (!userVal) username.style.borderColor = "#d63333";
            if (!passVal) password.style.borderColor = "#d63333";
            return;
        }

        if (userVal === "brt06a" && passVal === "8455930482") {
            message.innerText = "Login successful. Redirecting...";
            message.style.color = "green";

            // Use reliable redirect
            setTimeout(() => {
                window.location.assign("dashboard.html");
            }, 1200);
        } else {
            message.innerText = "Invalid username or password.";
            message.style.color = "#d63333";
            password.value = "";
            password.focus();
        }
    });
});
