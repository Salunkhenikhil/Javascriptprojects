// Get the background image element with the ID "bgimg"
const bgimgel = document.getElementById("bgimg");

// Add a scroll event listener to the window, which will trigger the updateImage function when the user scrolls
window.addEventListener("scroll", () => {
  updateImage();
});

// Define the updateImage function
function updateImage() {
  // Calculate the opacity of the background image based on the window's vertical scroll position
  // The formula below ensures that the opacity gradually changes as the user scrolls
  bgimgel.style.opacity = 1 - window.pageYOffset / 900;
}
