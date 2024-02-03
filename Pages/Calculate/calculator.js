function toggleHeightFields() {
  var heightInputDiv = document.getElementById("heightInput");
  var heightUnit = document.getElementById("heightUnit").value;

  heightInputDiv.innerHTML = "";

  if (heightUnit === "cm") {
    heightInputDiv.innerHTML =
      '<label for="height">Height (cm):</label>' +
      '<input type="number" id="height" placeholder="Enter height" required />';
  } else if (heightUnit === "feetInches") {
    heightInputDiv.innerHTML =
      '<label for="feet"> Feet Value: </label>' +
      '<input type="number" id="feet" placeholder="Feet" required /><br />' +
      '<label for="inches">  Inches Value: </label>' +
      '<input type="number" id="inches" placeholder="Inches" required />';
  }
}

function toggleWeightLabel() {
  var weightInputDiv = document.getElementById("weightInput");
  var weightUnit = document.getElementById("weightUnit").value;

  var weightLabel = weightUnit === "kg" ? "Weight (kg):" : "Weight (lbs):";
  weightInputDiv.innerHTML =
    '<label for="weight">' +
    weightLabel +
    "</label>" +
    '<input type="number" id="weight" placeholder="Enter weight" required />';
}

function calculateBMI() {
  var height, weight;

  var heightUnit = document.getElementById("heightUnit").value;

  if (heightUnit === "feetInches") {
    var feet = parseFloat(document.getElementById("feet").value);
    var inches = parseFloat(document.getElementById("inches").value);
    height = feet * 12 + inches; // Total height in inches
  } else {
    height = parseFloat(document.getElementById("height").value);
  }

  var weightUnit = document.getElementById("weightUnit").value;

  weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid height and weight.";
    return;
  }

  if (heightUnit !== "cm") {
    height = height * 2.54;
  }

  if (weightUnit === "lbs") {
    weight = weight * 0.453592;
  }

  var bmi = weight / Math.pow(height / 100, 2);

  var resultMessage = "Your BMI is <span>" + bmi.toFixed(2) + "</span> ";

  if (bmi < 18.5) {
    resultMessage += "<br />You are <span>Underweight</span>";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultMessage += "<br />You have a <span>Normal weight</span>";
  } else if (bmi >= 25 && bmi < 30) {
    resultMessage += "<br />You are <span>Overweight</span>";
  } else {
    resultMessage += "<br />You are <span>Obese</span>";
  }

  document.getElementById("result").innerHTML = resultMessage;
}
