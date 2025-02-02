document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");
    const formTitle = document.getElementById("form-title");
    const toggleText = document.getElementById("toggle-text");

    let isSignUp = false; // Default mode: Sign In

    function updateAuthUI() {
        formTitle.textContent = isSignUp ? "Create Account" : "Sign In";
        toggleText.innerHTML = isSignUp
            ? 'Already have an account? <a href="#" id="toggle-auth">Sign In</a>'
            : 'Don\'t have an account? <a href="#" id="toggle-auth">Sign Up</a>';
        
        document.getElementById("toggle-auth").addEventListener("click", toggleAuthMode);
    }

    function toggleAuthMode(event) {
        event.preventDefault();
        isSignUp = !isSignUp;
        updateAuthUI();
    }

    updateAuthUI(); // Set initial UI state

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        console.log(`Attempting ${isSignUp ? "Sign Up" : "Sign In"} for: ${email}`);

        // TEMPORARY: Redirect to index.html until backend is ready
        window.location.href = "index.html"; 
    });
});
