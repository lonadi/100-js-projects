const calc = document.getElementById("calc");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function convertHeight() {
    const heightValue = parseFloat(document.getElementById("height-val").value);
    const selectedUnit = document.querySelector('input[name="units"]:checked').id;

    switch (selectedUnit) {
        case "inch":
            return heightValue * 2.54;
        case "feet":
            return heightValue * 30.48;
        case "metre":
            return heightValue * 100;
        default:
            return heightValue;
    }
}

function calculateBMI() {
    const height = convertHeight() / 100; 
    const weight = parseFloat(document.getElementById("weight-val").value);

    const bmi = weight / (height * height);
    bmiInputEl.value = bmi;

    if (bmi < 18.5) weightConditionEl.innerText = "Underweight";
    else if (bmi <= 24.9) weightConditionEl.innerText = "Normal weight";
    else if (bmi <= 29.9) weightConditionEl.innerText = "Overweight";
    else weightConditionEl.innerText = "Obesity";
}

calc.addEventListener("click", calculateBMI);