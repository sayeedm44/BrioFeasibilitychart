function calculateCabinDimensions() {
    // First table calculations
    const width1 = parseFloat(document.getElementById('width1').value) || 0;
    const depth1 = parseFloat(document.getElementById('depth1').value) || 0;
    const mechanism1 = 300;
    const cabinThickness1 = 60;
    const bufferWidth1 = 60;
    const bufferDepth1 = 60;
    const totalSpaceDoorBuffer1 = 200;

    const cabinWidth1 = width1 - mechanism1 - cabinThickness1 - bufferWidth1;
    const cabinDepth1 = depth1 - bufferDepth1 - totalSpaceDoorBuffer1;

    document.getElementById('cabinWidth1').innerText = cabinWidth1 > 0 ? cabinWidth1 : "Invalid";
    document.getElementById('cabinDepth1').innerText = cabinDepth1 > 0 ? cabinDepth1 : "Invalid";

    // Second table calculations
    const width2 = parseFloat(document.getElementById('width2').value) || 0;
    const depth2 = parseFloat(document.getElementById('depth2').value) || 0;
    const mechanism2 = 300;
    const cabinThickness2 = 60;
    const bufferWidth2 = 70;
    const bufferDepth2 = 70;
    const totalSpaceDoorBuffer2 = 200;

    const cabinWidth2 = width2 - cabinThickness2 - bufferWidth2 - bufferDepth2;
    const cabinDepth2 = depth2 - mechanism2 - totalSpaceDoorBuffer2;

    document.getElementById('cabinWidth2').innerText = cabinWidth2 > 0 ? cabinWidth2 : "Invalid";
    document.getElementById('cabinDepth2').innerText = cabinDepth2 > 0 ? cabinDepth2 : "Invalid";

    // New table calculations
    const calculateDimensions = (widthId, depthId, cabinWidthId, cabinDepthId, mechanism, cabinThickness, bufferWidth, bufferDepth, totalSpaceDoorBuffer, isMechanismWidth) => {
        const width = parseFloat(document.getElementById(widthId).value) || 0;
        const depth = parseFloat(document.getElementById(depthId).value) || 0;

        const cabinWidth = width - (isMechanismWidth ? mechanism : 0) - cabinThickness - bufferWidth - (isMechanismWidth ? 0 : bufferDepth);
        const cabinDepth = depth - (isMechanismWidth ? bufferDepth : mechanism) - totalSpaceDoorBuffer;

        document.getElementById(cabinWidthId).innerText = cabinWidth > 0 ? cabinWidth : "Invalid";
        document.getElementById(cabinDepthId).innerText = cabinDepth > 0 ? cabinDepth : "Invalid";
    };

    // Calculate for each new table using the helper function
    calculateDimensions('width3', 'depth3', 'cabinWidth3', 'cabinDepth3', 300, 60, 60, 60, 270, true);
    calculateDimensions('width4', 'depth4', 'cabinWidth4', 'cabinDepth4', 300, 60, 70, 70, 270, false);
    calculateDimensions('width5', 'depth5', 'cabinWidth5', 'cabinDepth5', 300, 60, 60, 60, 60, true);
    calculateDimensions('width6', 'depth6', 'cabinWidth6', 'cabinDepth6', 300, 60, 70, 70, 60, false);
}

// Event listeners for all inputs
document.getElementById('width1').addEventListener('input', calculateCabinDimensions);
document.getElementById('depth1').addEventListener('input', calculateCabinDimensions);
document.getElementById('width2').addEventListener('input', calculateCabinDimensions);
document.getElementById('depth2').addEventListener('input', calculateCabinDimensions);

document.getElementById('width3').addEventListener('input', calculateCabinDimensions);
document.getElementById('depth3').addEventListener('input', calculateCabinDimensions);
document.getElementById('width4').addEventListener('input', calculateCabinDimensions);
document.getElementById('depth4').addEventListener('input', calculateCabinDimensions);
document.getElementById('width5').addEventListener('input', calculateCabinDimensions);
document.getElementById('depth5').addEventListener('input', calculateCabinDimensions);
document.getElementById('width6').addEventListener('input', calculateCabinDimensions);
document.getElementById('depth6').addEventListener('input', calculateCabinDimensions);
