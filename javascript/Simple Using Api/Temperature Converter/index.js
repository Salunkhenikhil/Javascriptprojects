// Get references to the input fields for Celsius, Fahrenheit, and Kelvin
const celsiusEL = document.getElementById("celsius");
const fahrenheitEL = document.getElementById("fahrenheit");
const kelvinEL = document.getElementById("kelvin");

// Function to update temperature values based on input changes
function updateTemp(event) {
  const currentvalue = +event.target.value; // Convert the input value to a number

  // Use a switch statement to determine which input field was changed
  switch (event.target.name) {
    case "celsius":
      // Update Kelvin and Fahrenheit values based on Celsius input
      kelvinEL.value = (currentvalue + 273.15).toFixed(2);
      fahrenheitEL.value = (currentvalue * (9 / 5) + 32).toFixed(2);
      break;
    case "fahrenheit":
      // Update Celsius and Kelvin values based on Fahrenheit input
      celsiusEL.value = ((currentvalue - 32) * (5 / 9)).toFixed(2);
      kelvinEL.value = ((currentvalue - 32) * (5 / 9) + 273.15).toFixed(2);
      break;
    case "kelvin":
      // Update Celsius and Fahrenheit values based on Kelvin input
      celsiusEL.value = (currentvalue - 273.15).toFixed(2);
      fahrenheitEL.value = ((currentvalue - 273.15) * (9 / 5) + 32).toFixed(2);
      break;
    default:
      break;
  }
}
