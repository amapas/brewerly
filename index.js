// Function to process a beer recipe
function processRecipe(recipe) {
    console.log("Processing recipe...");
    console.log("Recipe:", recipe);
    // Add brewing logic here
}

// Read recipe from file
const fs = require('fs');

fs.readFile('recipe.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading recipe file:", err);
        return;
    }
    const recipe = data.trim();
    processRecipe(recipe);
});
