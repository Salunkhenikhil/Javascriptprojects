// Get references to the required elements using their IDs
const inputel = document.getElementById("input");
const infoel = document.getElementById("info-text");
const meanel = document.getElementById("mean-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioel = document.getElementById("audio");

// Function to fetch the word's meaning from the API
async function getAPI(word) {
  try {
    // Display search status and hide the meaning container
    infoel.style.display = "block";
    meanel.style.display = "none";
    infoel.innerText = `Searching for the meaning of "${word}"`;

    // Construct the API URL with the given word
    const apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    // Fetch the data from the API
    const result = await fetch(apiurl).then((res) => res.json());

    // Check if the word is not found in the API response
    if (result.title) {
      meanel.style.display = "block";
      infoel.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "No Definitions Found";
      audioel.style.display = "none";
    } else {
      // Display the word's meaning and audio if available
      infoel.style.display = "none";
      audioel.style.display = "inline-flex";
      meanel.style.display = "block";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioel.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    // Display error message if there's a problem with the API or internet connection
    console.log(error);
    infoel.innerText = `An error happened, please try after some time or check your internet connection`;
  }
}

// Add a keyup event listener to the input element
inputel.addEventListener("keyup", (e) => {
  // Check if a value is entered and Enter key is pressed
  if (e.target.value && e.key === "Enter") {
    // Call the getAPI function with the entered value
    getAPI(e.target.value);
  }
});
