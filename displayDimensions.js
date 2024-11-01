// Function to display width and depth values in the table
function displayMainDimensions() {
    // Get the width and depth values entered by the user
    const mainWidth = parseFloat(document.getElementById("mainWidth").value);
    const mainDepth = parseFloat(document.getElementById("mainDepth").value);

    // Check if values are valid numbers
    if (!isNaN(mainWidth) && !isNaN(mainDepth)) {
        // Display the values in the respective table cells
        document.getElementById("displayWidth").textContent = mainWidth;
        document.getElementById("displayDepth").textContent = mainDepth;
    } else {
        // Clear the table cells if input is invalid
        document.getElementById("displayWidth").textContent = "";
        document.getElementById("displayDepth").textContent = "";
    }
}

// Add event listeners to update display on input changes
document.getElementById("mainWidth").addEventListener("blur", displayMainDimensions);
document.getElementById("mainDepth").addEventListener("blur", displayMainDimensions);
