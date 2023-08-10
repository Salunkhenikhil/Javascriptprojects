// Get references to the button and name elements using their IDs
const btnEl = document.getElementById("btn");
const nameEl = document.getElementById("name");

// Array to store emoji data fetched from the API
const emoji = [];

// Asynchronous function to fetch emoji data from the API
async function emojifetcher() {
  // Fetch data from the API using the provided URL
  const response = await fetch(
    "https://emoji-api.com/emojis?access_key=e8a5a20405e10bfb8445c3f91e4a748d8cb8d835"
  );
  // Convert the response data to JSON format
  data = await response.json();

  // Loop through the data and store the character name and code in the 'emoji' array
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      Charname: data[i].character,
      Charcode: data[i].unicodeName,
    });
  }
}

// Call the 'emojifetcher' function to fetch and store emoji data from the API
emojifetcher();

// Add a click event listener to the button
btnEl.addEventListener("click", () => {
  // Generate a random number between 0 and the length of the 'emoji' array
  const randomnum = Math.floor(Math.random() * emoji.length);

  // Display the random emoji's character name and code on the button and name elements
  btnEl.innerText = emoji[randomnum].Charname;
  nameEl.innerText = emoji[randomnum].Charcode;
});
