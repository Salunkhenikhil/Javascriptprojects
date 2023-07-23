const imageel = document.querySelector(".img-container");
const buttonel = document.querySelector(".btn");

buttonel.addEventListener("click", () => {
  imagenum = 10;
  addnewImage();
});

function addnewImage() {
  for (let index = 0; index < imagenum; index++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageel.appendChild(newImage);
  }
}
