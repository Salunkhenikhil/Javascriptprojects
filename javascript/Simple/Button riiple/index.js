// Select the button element with the class "button"
const btnel = document.querySelector(".button");

// Add an event listener for the "mouseover" event on the button element
btnel.addEventListener("mouseover", (event) => {
  // Calculate the x and y coordinates of the mouse pointer relative to the button element's top-left corner
  const x = event.pageX - btnel.offsetLeft;
  const y = event.pageY - btnel.offsetTop;

  // Set the custom CSS properties "--xPos" and "--yPos" on the button element to the calculated x and y coordinates
  // This allows us to use these values in CSS to control the position of the element
  btnel.style.setProperty("--xPos", x + "px");
  btnel.style.setProperty("--yPos", y + "px");
});
