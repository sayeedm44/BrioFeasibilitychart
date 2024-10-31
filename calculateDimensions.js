// Function to calculate all cabinWidth and cabinDepth values
function calculateCabinDimensions() {
    const mainWidth = parseFloat(document.getElementById("mainWidth").value);
    const mainDepth = parseFloat(document.getElementById("mainDepth").value);

    if (isNaN(mainWidth) || isNaN(mainDepth)) {
        alert("Please enter valid numbers for main width and depth.");
        return;
    }

    // Calculate and assign each cabin width and depth value
    document.getElementById("cabinWidth1").value = (mainWidth - 300 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth1").value = (mainDepth - 60 - 200).toFixed(2);

    document.getElementById("cabinWidth2").value = (mainWidth - 70 - 70 - 60).toFixed(2);
    document.getElementById("cabinDepth2").value = (mainDepth - 300 - 200).toFixed(2);

    document.getElementById("cabinWidth3").value = (mainWidth - 300 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth3").value = (mainDepth - 60 - 270).toFixed(2);

    document.getElementById("cabinWidth4").value = (mainWidth - 70 - 60 - 70).toFixed(2);
    document.getElementById("cabinDepth4").value = (mainDepth - 300 - 270).toFixed(2);

    document.getElementById("cabinWidth5").value = (mainWidth - 300 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth5").value = (mainDepth - 60 - 90).toFixed(2);

    document.getElementById("cabinWidth6").value = (mainWidth - 70 - 60 - 70).toFixed(2);
    document.getElementById("cabinDepth6").value = (mainDepth - 300 - 90).toFixed(2);

    document.getElementById("cabinWidth7").value = (mainWidth - 420 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth7").value = (mainDepth - 60 - 200).toFixed(2);

    document.getElementById("cabinWidth8").value = (mainWidth - 60 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth8").value = (mainDepth - 420 - 200).toFixed(2);

    document.getElementById("cabinWidth9").value = (mainWidth - 420 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth9").value = (mainDepth - 60 - 270).toFixed(2);

    document.getElementById("cabinWidth10").value = (mainWidth - 60 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth10").value = (mainDepth - 420 - 270).toFixed(2);

    document.getElementById("cabinWidth11").value = (mainWidth - 420 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth11").value = (mainDepth - 60 - 90).toFixed(2);

    document.getElementById("cabinWidth12").value = (mainWidth - 60 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth12").value = (mainDepth - 420 - 90).toFixed(2);

    document.getElementById("cabinWidth13").value = (mainWidth - 420 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth13").value = (mainDepth - 60 - 200).toFixed(2);

    document.getElementById("cabinWidth14").value = (mainWidth - 60 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth14").value = (mainDepth - 420 - 200).toFixed(2);

    document.getElementById("cabinWidth15").value = (mainWidth - 420 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth15").value = (mainDepth - 60 - 270).toFixed(2);

    document.getElementById("cabinWidth16").value = (mainWidth - 60 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth16").value = (mainDepth - 420 - 270).toFixed(2);

    document.getElementById("cabinWidth17").value = (mainWidth - 420 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth17").value = (mainDepth - 60 - 90).toFixed(2);

    document.getElementById("cabinWidth18").value = (mainWidth - 60 - 60 - 60).toFixed(2);
    document.getElementById("cabinDepth18").value = (mainDepth - 420 - 90).toFixed(2);

    document.getElementById("cabinWidth19").value = (mainWidth - 550 - 60).toFixed(2);
    document.getElementById("cabinDepth19").value = (mainDepth - 90 - 200).toFixed(2);

    document.getElementById("cabinWidth20").value = (mainWidth - 300 - 60).toFixed(2);
    document.getElementById("cabinDepth20").value = (mainDepth - 250 - 200).toFixed(2);

    document.getElementById("cabinWidth21").value = (mainWidth - 550 - 60).toFixed(2);
    document.getElementById("cabinDepth21").value = (mainDepth - 90 - 270).toFixed(2);

    document.getElementById("cabinWidth22").value = (mainWidth - 300 - 60).toFixed(2);
    document.getElementById("cabinDepth22").value = (mainDepth - 250 - 270).toFixed(2);

    document.getElementById("cabinWidth23").value = (mainWidth - 550 - 60).toFixed(2);
    document.getElementById("cabinDepth23").value = (mainDepth - 90 - 90).toFixed(2);

    document.getElementById("cabinWidth24").value = (mainWidth - 300 - 60).toFixed(2);
    document.getElementById("cabinDepth24").value = (mainDepth - 250 - 90).toFixed(2);
}

// Event listener to trigger calculation on input change
document.getElementById("mainWidth").addEventListener("input", calculateCabinDimensions);
document.getElementById("mainDepth").addEventListener("input", calculateCabinDimensions);
