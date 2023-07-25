// Select the container element and the "Load More" button
const imageel = document.querySelector(".img-container");
const buttonel = document.querySelector(".btn");

// Add click event listener to the "Load More" button
buttonel.addEventListener("click", addnewImage);

// Function to add new images to the container
function addnewImage() {
  // Number of images to load
  imagenum = 10;

  // Loop to create and add new images to the container
  for (let index = 0; index < imagenum; index++) {
    // Create a new image element with a random URL
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    // Append the new image to the container
    imageel.appendChild(newImage);
  }
}
