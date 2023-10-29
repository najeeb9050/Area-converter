let yard = document.getElementById("yard");
let feet = document.getElementById("feet");

function yardToFt() {
    let output = (parseFloat(yard.value) * 9);
    feet.value = parseFloat(output.toFixed(3));
}

function ftToYard() {
    let output = (parseFloat(feet.value) * 0.111111);
    yard.value = parseFloat(output.toFixed(3));
}