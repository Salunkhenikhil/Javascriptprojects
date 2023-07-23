const containerel = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorelement = document.createElement("div");
  colorelement.classList.add("color-container");
  containerel.appendChild(colorelement);
}

const colorelements = document.querySelectorAll(".color-container");
genrator();
function genrator() {
  colorelements.forEach((colorelement) => {
    const newcolorcode = randomcolor();
    colorelement.style.backgroundColor = "#" + newcolorcode;
    colorelement.innerText = "#" + newcolorcode;
  });
}

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
