// Get references to the required elements
const btnEL = document.getElementById("btn");
const bmiEL = document.getElementById("result");
const weightcondtionEL = document.getElementById("weight-condition");

// Attach the 'calculateBMI' function to the button click event
btnEL.addEventListener("click", calculateBMI);

// Function to calculate BMI and display weight condition
function calculateBMI() {
  // Get height and weight values from input fields
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  // Calculate BMI using the formula: weight / (height * height)
  const BMIValue = weightValue / (heightValue * heightValue);

  // Display the calculated BMI value in the result input field
  bmiEL.value = BMIValue;

  // Determine weight condition based on BMI ranges
  if (BMIValue < 18.5) {
    weightcondtionEL.innerText = "Under Weight";
  } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
    weightcondtionEL.innerText = "Normal Weight";
  } else if (BMIValue >= 25 && BMIValue <= 29.9) {
    weightcondtionEL.innerText = "Over Weight";
  } else if (BMIValue >= 30) {
    weightcondtionEL.innerText = "Obesity";
  }
}
