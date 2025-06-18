document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    // Clear error on focus
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener("focus", () => {
            message.innerText = "";
            input.style.borderColor = "#ccc";
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        // Validation like SBI - both fields required
        if (!user || !pass) {
            message.innerText = "Username and Password are mandatory.";
            message.style.color = "#d63333";
            if (!user) usernameInput.style.borderColor = "#d63333";
            if (!pass) passwordInput.style.borderColor = "#d63333";
            return;
        }

        // Fake loading delay and login simulation
        message.innerText = "Verifying credentials, please wait...";
        message.style.color = "#1f4e79";

        setTimeout(() => {
            if (user.toLowerCase() === "admin" && pass === "1234") {
                message.innerText = "Login successful. Redirecting...";
                message.style.color = "green";
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1500);
            } else {
                message.innerText = "Invalid credentials. Try again.";
                message.style.color = "#d63333";
                passwordInput.value = "";
                passwordInput.focus();
            }
        }, 1000);
    });
});
