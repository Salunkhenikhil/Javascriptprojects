// Get reference to the <body> element
const bodyel = document.querySelector("body");

// Add a mousemove event listener to the body
bodyel.addEventListener("mousemove", (event) => {
  // Get the x and y coordinates of the mouse cursor
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  // Create a new <span> element for the trail
  const spanel = document.createElement("span");

  // Set position of the <span> using mouse coordinates
  spanel.style.left = xPos + "px";
  spanel.style.top = yPos + "px";

  // Generate random size for the <span> element
  const size = Math.random() * 100;
  spanel.style.width = size + "px";
  spanel.style.height = size + "px";

  // Append the <span> element to the body
  bodyel.appendChild(spanel);

  // Remove the <span> element after 3 seconds
  setTimeout(() => {
    spanel.remove();
  }, 3000);
});
