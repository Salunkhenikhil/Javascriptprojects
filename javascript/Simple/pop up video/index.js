// Get references to the required elements in the DOM
const btnel = document.querySelector(".button");
const closeel = document.querySelector(".close-icon");
const trailercontainel = document.querySelector(".trailer-container");
const videoel = document.querySelector("video");

// Add click event listener to the button element
btnel.addEventListener("click", () => {
  // Remove the 'active' class to show the video trailer container
  trailercontainel.classList.remove("active");
});

// Add click event listener to the close icon element
closeel.addEventListener("click", () => {
  // Add the 'active' class to hide the video trailer container
  trailercontainel.classList.add("active");
  // Pause the video and reset its current time to 0 (start position)
  videoel.pause();
  videoel.currentTime = 0;
});
