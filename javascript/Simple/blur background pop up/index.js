const containerel = document.querySelector(".container");
const btnel = document.querySelector(".btn");
const popupcontainerel = document.querySelector(".popup-container");
const closeel = document.querySelector(".close-icon");

btnel.addEventListener("click", () => {
  containerel.classList.add("active");
  popupcontainerel.classList.remove("active");
});

closeel.addEventListener("click", () => {
  containerel.classList.remove("active");
  popupcontainerel.classList.add("active");
});
