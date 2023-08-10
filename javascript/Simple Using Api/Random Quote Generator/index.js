// Get references to the required elements using their IDs
const btnel = document.getElementById("btn");
const quoteel = document.getElementById("quote");
const authorel = document.getElementById("author");
const containerel = document.getElementById("container");

// API URL to fetch a random quote
const apiurl = "https://api.quotable.io/random";

// Function to fetch and display a random quote
async function getQuote() {
  try {
    // Display loading status while fetching the quote
    quoteel.innerText = "Updating...";
    authorel.innerText = "updating...";
    btnel.innerText = "Loading.....";
    btnel.disabled = true;

    // Fetch data from the API
    const response = await fetch(apiurl);
    const data = await response.json();
    const quote = data.content;
    const author = data.author;

    // Display the fetched quote and author
    quoteel.innerText = quote;
    authorel.innerText = "~ " + author;
    btnel.innerText = "Get a Quote";
    btnel.disabled = false;
  } catch (error) {
    // Display error message if there's a problem with the API or internet connection
    quoteel.innerText =
      "Some Error Occured, Please try again later or check your connectivity!!";
    btnel.innerText = "Get a Quote";
    btnel.disabled = false;
  }
}

// Call the getQuote function once to fetch an initial quote on page load
getQuote();

// Add click event listener to the button to fetch a new quote when clicked
btnel.addEventListener("click", () => {
  getQuote();
});
