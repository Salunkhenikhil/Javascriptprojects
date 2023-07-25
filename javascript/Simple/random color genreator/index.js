// Select the container element to display random colors
const containerel = document.querySelector(".container");

// Generate 30 color containers and add them to the container element
for (let index = 0; index < 30; index++) {
  const colorelement = document.createElement("div");
  colorelement.classList.add("color-container");
  containerel.appendChild(colorelement);
}

// Get all the color containers
const colorelements = document.querySelectorAll(".color-container");

// Call the generator function to generate random colors and apply them to the containers
genrator();

// Generator function to set random colors for each container
function genrator() {
  colorelements.forEach((colorelement) => {
    const newcolorcode = randomcolor();
    colorelement.style.backgroundColor = "#" + newcolorcode;
    colorelement.innerText = "#" + newcolorcode;
  });
}

// Function to generate random color codes
function randomcolor() {
  const char = "1234567890abcdef";
  const colorcodelength = 6;
  let colorcode = "";
  for (let index = 0; index < colorcodelength; index++) {
    const randumnum = Math.floor(Math.random() * char.length);
    colorcode += char.substring(randumnum, randumnum + 1);
  }
  return colorcode;
}
