// Generate random numbers between 1 and 10
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Get the necessary DOM elements
const questionel = document.getElementById("question"); // Group: DOM element
const inputel = document.getElementById("input"); // Group: DOM element
const formel = document.getElementById("form"); // Group: DOM element
const scoreel = document.getElementById("score"); // Group: DOM element

// Initialize score from local storage or set it to 0 if not found
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}

// Check if score reached 10
if (score === 10) {
    // Do something when score equals 10
}

// Update the score element's text
scoreel.innerText = `score: ${score}`;

// Set the question element's text
questionel.innerText = `What is ${num1} multiplied by ${num2} ?`;

// Calculate correct answer
const crt = num1 * num2;

// Event listener for form submission
formel.addEventListener("submit", () => {
    const userans = +inputel.value; // Convert input value to a number

    // Check if user's answer is correct and update score accordingly
    if (userans === crt) {
        score++;
        updatelocalstorage();
    } else {
        score--;
        updatelocalstorage();
    }
});

// Function to update the local storage with the updated score
function updatelocalstorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
