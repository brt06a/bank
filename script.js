document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // This is fake login logic
    if (user && pass) {
        document.getElementById("message").innerText = `Welcome back, ${user}! Redirecting to your $1,000,000 account... 💰`;
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Make this page later
        }, 2000);
    } else {
        document.getElementById("message").innerText = "Invalid login (not really, this is just a prank)";
    }
});
