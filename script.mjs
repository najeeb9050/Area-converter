document.addEventListener("DOMContentLoaded", function () {
    const marlaInput = document.getElementById("marla");
    const squareFeetOutput = document.getElementById("squareFeet");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", function () {
        const marla = parseFloat(marlaInput.value);
        if (!isNaN(marla)) {
            const squareFeet = marla * 272.25;
            squareFeetOutput.textContent = squareFeet.toFixed(2);
        } else {
            squareFeetOutput.textContent = "Invalid input";
        }
    });
});
