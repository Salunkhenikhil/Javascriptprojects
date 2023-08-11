// Get references to the Monthly Pay and Total Amount elements
const emiEL = document.getElementById("Monthly");
const totalEL = document.getElementById("Total");

// Function to calculate EMI (Equated Monthly Installment)
function emicalc() {
  // Get input values: principle (loan amount), rate (interest rate), and duration (number of months)
  const principle = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const duration = parseFloat(document.getElementById("duration").value);

  // Calculate monthly interest rate and number of payments
  const monthlyInterestRate = rate / 12 / 100;
  const numberOfPayments = duration;

  // Calculate EMI using the formula for loan payment
  const emi =
    (principle *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // Calculate total amount paid
  const total = (emi * numberOfPayments).toFixed();

  // Update Monthly Pay and Total Amount elements with calculated values
  emiEL.innerHTML = emi.toFixed();
  totalEL.innerHTML = total;
}
