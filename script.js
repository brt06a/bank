document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    // Reset error on focus
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

        if (!user || !pass) {
            message.innerText = "Username and Password are mandatory.";
            message.style.color = "#d63333";
            if (!user) usernameInput.style.borderColor = "#d63333";
            if (!pass) passwordInput.style.borderColor = "#d63333";
            return;
        }

        // Allow only exact credentials
        if (user === "brt06a" && pass === "8455930482") {
            message.innerText = "Login successful. Redirecting...";
            message.style.color = "green";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1200);
        } else {
            message.innerText = "Invalid credentials. Access denied.";
            message.style.color = "#d63333";
            passwordInput.value = "";
            passwordInput.focus();
        }
    });
});
