// Select all elements with class 'rating'
const ratingsel = document.querySelectorAll(".rating");

// Get references to the button and container elements by their IDs
const btnel = document.getElementById("btn");
const containerel = document.getElementById("container");

// Variable to store the selected rating
let selectedrating = "";

// Add click event listeners to all elements with class 'rating'
ratingsel.forEach((ratingsel) => {
  ratingsel.addEventListener("click", (event) => {
    // Remove 'active' class from all ratings before updating the selected rating
    remove();
    // Update the selected rating based on the clicked element's text
    selectedrating =
      event.target.innerText || event.target.parentNode.innerText;
    // Add 'active' class to the clicked element
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// Add click event listener to the button to display the feedback message
btnel.addEventListener("click", () => {
  if (selectedrating !== "") {
    // Replace the container's content with the feedback message
    containerel.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feedback = ${selectedrating}</strong>
    <p>Please Visit Us Again And We'll use your feedback to improve our customer support</p>`;
  }
});

// Function to remove the 'active' class from all ratings
function remove() {
  ratingsel.forEach((ratingsel) => {
    ratingsel.classList.remove("active");
  });
}
