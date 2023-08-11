// Get references to HTML elements
const currencyfirstEL = document.getElementById("currency-first");
const worthfirstEL = document.getElementById("worth-first");
const currencysecondEL = document.getElementById("currency-second");
const worthsecondEL = document.getElementById("worth-second");
const exchangerateEL = document.getElementById("exchange-rate");

// Call the updateRate function to fetch and display initial exchange rate
updateRate();

// Function to update the exchange rate and converted amount
function updateRate() {
  // Fetch exchange rate data from the API based on selected currencies
  fetch(
    `https://v6.exchangerate-api.com/v6/92242ccb488b03d779b8e38b/latest/${currencyfirstEL.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      // Extract the conversion rate for the selected target currency
      const rate = data.conversion_rates[currencysecondEL.value];

      // Update the exchange rate text
      exchangerateEL.innerText = `1 ${currencyfirstEL.value} = ${rate.toFixed(
        2
      )} ${currencysecondEL.value}`;

      // Calculate and display the converted amount in the target currency
      worthsecondEL.value = (worthfirstEL.value * rate).toFixed(2);
    });
}

// Event listeners to update the exchange rate and converted amount
currencyfirstEL.addEventListener("change", updateRate);
currencysecondEL.addEventListener("change", updateRate);
worthfirstEL.addEventListener("input", updateRate);
