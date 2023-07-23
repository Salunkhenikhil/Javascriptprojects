const bodyel = document.querySelector("body");

bodyel.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanel = document.createElement("span");
  spanel.style.left = xPos + "px";
  spanel.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanel.style.width = size + "px";
  spanel.style.height = size + "px";
  bodyel.appendChild(spanel);
  setTimeout(() => {
    spanel.remove();
  }, 3000);
});
