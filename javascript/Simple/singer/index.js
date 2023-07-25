// Singer Kits Data
const kits = [
  "A.Singh",
  "AR.Rahman",
  "KK",
  "S.Mahadevan",
  "S.Nigam",
  "S.Goshal",
  "J.Nautiyal",
  "S.Chauhan",
];

// Selecting container element
const containerel = document.querySelector(".container");

// Variable to store the active audio element
let activeAudio = null;

// Loop through the singer kits data and create buttons and audio elements for each kit
kits.forEach((kit) => {
  // Create a button element for each singer kit
  const btnel = document.createElement("button");
  btnel.classList.add("singer");
  btnel.innerText = kit;
  // Set the background image for the button
  btnel.style.backgroundImage = "url(img/" + kit + ".jpg)";
  containerel.appendChild(btnel);

  // Create an audio element for each singer kit
  const audioel = document.createElement("audio");
  audioel.src = "audio/" + kit + ".mp3";
  containerel.appendChild(audioel);

  // Add a click event listener to each button
  btnel.addEventListener("click", () => {
    // If there is an active audio element, pause it
    if (activeAudio) {
      activeAudio.pause();
    }
    // Play the selected audio and set it as the active audio
    audioel.play();
    activeAudio = audioel;
  });
});
