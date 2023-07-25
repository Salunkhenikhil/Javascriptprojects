// Get references to the button and joke elements using their respective IDs
const btnel = document.getElementById("btn");
const jokeel = document.getElementById("joke");

// Define the API key and request options for fetching jokes
const apikey = "3iPuGouKdZ6drsGe8+aJdw==AVlWPtdLi8zYyWXj";
const option = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};

// Define the API URL to fetch a single dad joke
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Async function to fetch and display a new joke
async function getjoke() {
  try {
    // Show loading state while fetching joke
    jokeel.style.color = "Green";
    jokeel.innerText = "Updating....";
    btnel.disabled = true;
    btnel.innerText = "Loading...";

    // Fetch the joke from the API using the defined options
    const response = await fetch(apiurl, option);
    const data = await response.json();

    // Update the joke element with the fetched joke
    jokeel.style.color = "rgb(253, 18, 1)";
    jokeel.innerText = data[0].joke;

    // Restore the button state and text
    btnel.disabled = false;
    btnel.innerText = "Tell Me Another Joke";
  } catch (error) {
    // Display an error message if fetching fails
    jokeel.innerText = "An Error Occurred! Please try again later.";
    btnel.disabled = false;
    btnel.innerText = "Tell Me Another Joke";
  }
}

// Add a click event listener to the button to trigger the getjoke function
btnel.addEventListener("click", getjoke);
