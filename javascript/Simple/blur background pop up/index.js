// Get references to HTML elements using querySelector
const containerel = document.querySelector(".container");
const btnel = document.querySelector(".btn");
const popupcontainerel = document.querySelector(".popup-container");
const closeel = document.querySelector(".close-icon");

// Add a click event listener to the "Join us now" button
btnel.addEventListener("click", () => {
  // When the button is clicked, add "active" class to the main container and remove "active" class from the pop-up container
  containerel.classList.add("active");
  popupcontainerel.classList.remove("active");
});

// Add a click event listener to the close icon in the pop-up
closeel.addEventListener("click", () => {
  // When the close icon is clicked, remove "active" class from the main container and add "active" class to the pop-up container
  containerel.classList.remove("active");
  popupcontainerel.classList.add("active");
});
