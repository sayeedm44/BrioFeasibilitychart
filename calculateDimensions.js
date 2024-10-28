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

    // Helper function for new tables
    const calculateDimensions = (widthId, depthId, cabinWidthId, cabinDepthId, mechanism, cabinThickness, bufferWidth, bufferDepth, totalSpaceDoorBuffer, isMechanismWidth) => {
        const width = parseFloat(document.getElementById(widthId).value) || 0;
        const depth = parseFloat(document.getElementById(depthId).value) || 0;

        const cabinWidth = width - (isMechanismWidth ? mechanism : 0) - cabinThickness - bufferWidth - (isMechanismWidth ? 0 : bufferDepth);
        const cabinDepth = depth - (isMechanismWidth ? bufferDepth : mechanism) - totalSpaceDoorBuffer;

        document.getElementById(cabinWidthId).innerText = cabinWidth > 0 ? cabinWidth : "Invalid";
        document.getElementById(cabinDepthId).innerText = cabinDepth > 0 ? cabinDepth : "Invalid";
    };

    // Calculate dimensions for additional tables
    calculateDimensions('width3', 'depth3', 'cabinWidth3', 'cabinDepth3', 300, 60, 60, 60, 270, true);
    calculateDimensions('width4', 'depth4', 'cabinWidth4', 'cabinDepth4', 300, 60, 70, 70, 270, false);
    calculateDimensions('width5', 'depth5', 'cabinWidth5', 'cabinDepth5', 300, 60, 60, 60, 60, true);
    calculateDimensions('width6', 'depth6', 'cabinWidth6', 'cabinDepth6', 300, 60, 70, 70, 60, false);

    // New tables from the request
    calculateDimensions('width7', 'depth7', 'cabinWidth7', 'cabinDepth7', 400, 60, 60, 60, 200, true);
    calculateDimensions('width8', 'depth8', 'cabinWidth8', 'cabinDepth8', 400, 60, 60, 60, 200, false);
    calculateDimensions('width9', 'depth9', 'cabinWidth9', 'cabinDepth9', 300, 60, 60, 60, 60, true);
    calculateDimensions('width10', 'depth10', 'cabinWidth10', 'cabinDepth10', 400, 60, 60, 60, 270, false);
    calculateDimensions('width11', 'depth11', 'cabinWidth11', 'cabinDepth11', 400, 60, 60, 60, 60, true);
    calculateDimensions('width12', 'depth12', 'cabinWidth12', 'cabinDepth12', 400, 60, 60, 60, 60, false);
}

// Event listeners for all inputs
['width1', 'depth1', 'width2', 'depth2', 'width3', 'depth3', 'width4', 'depth4', 'width5', 'depth5', 'width6', 'depth6', 'width7', 'depth7', 'width8', 'depth8', 'width9', 'depth9', 'width10', 'depth10', 'width11', 'depth11', 'width12', 'depth12'].forEach(id => {
    document.getElementById(id).addEventListener('input', calculateCabinDimensions);
});
