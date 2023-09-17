var menu = document.querySelector(".menu-pic");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const video5 = document.getElementById("video5");
const video6 = document.getElementById("video6");
const video7 = document.getElementById("video7");
const video8 = document.getElementById("video8");

menu.onclick = function () {
  sidebar.classList.toggle("short-sidebar");
  container.classList.toggle("big-container");
};

video1.addEventListener("click", function () {
  const videoElement = document.getElementById("video"); // Get the video element
  const sourceElement = videoElement.querySelector("source"); // Get the source element inside the video

  // Change the source of the video
  sourceElement.src = "images/trailer.mp4";

  // Load and play the updated video
  videoElement.load();
  videoElement.play();
});
