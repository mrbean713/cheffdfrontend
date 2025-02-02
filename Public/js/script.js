document.addEventListener("DOMContentLoaded", () => {
    console.log("Frontend loaded. Backend will handle authentication.");

    const recipeList = document.getElementById("recipe-list");
    const recipeInput = document.getElementById("recipe-name");
    const addRecipeBtn = document.getElementById("add-recipe");

    function sendToBackend(recipeName) {
        console.log(`Sending recipe to backend: ${recipeName}`);
        alert(`Submitting recipe: "${recipeName}" to backend...`);
    }

    addRecipeBtn.addEventListener("click", () => {
        const recipeName = recipeInput.value.trim();
        if (recipeName) {
            sendToBackend(recipeName);
            recipeInput.value = "";
        }
    });

    document.getElementById("logout").addEventListener("click", () => {
        console.log("Logging out... Backend will handle session termination.");
        window.location.href = "auth.html"; // Redirect to login page
    });
});
