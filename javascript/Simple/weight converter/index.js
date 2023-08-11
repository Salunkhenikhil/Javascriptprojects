// Get references to HTML elements
const inputEL = document.getElementById("input");
const errorEL = document.getElementById("error");
const resultEL = document.getElementById("result-kg");

// Initialize variables for error and success timers
let errortime;
let successtime;

// Function to update weight conversion result
function updateWeight() {
  if (inputEL.value <= 0 || isNaN(inputEL.value)) {
    // Display error message for invalid input
    errorEL.innerText = "Please Enter Valid Number";
    clearTimeout(errortime);
    errortime = setTimeout(() => {
      errorEL.innerText = "";
      inputEL.value = "";
    }, 2000);
  } else {
    // Calculate and display weight conversion result
    resultEL.innerText = +(inputEL.value / 2.205).toFixed(2);
    clearTimeout(successtime);
    successtime = setTimeout(() => {
      inputEL.value = "";
      resultEL.innerText = "";
    }, 10000);
  }
}

// Attach 'input' event listener to input element
inputEL.addEventListener("input", updateWeight);
