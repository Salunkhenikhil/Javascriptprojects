const bgimgel = document.getElementById("bgimg");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgimgel.style.opacity = 1 - window.pageYOffset / 900;
}
