const btnel = document.querySelector(".button");
const closeel = document.querySelector(".close-icon");
const trailercontainel = document.querySelector(".trailer-container");
const videoel = document.querySelector("video");

btnel.addEventListener("click", () => {
  trailercontainel.classList.remove("active");
});

closeel.addEventListener("click", () => {
  trailercontainel.classList.add("active");
  videoel.pause();
  videoel.currentTime = 0;
});
