const ratingsel = document.querySelectorAll(".rating");
const btnel = document.getElementById("btn");
const containerel = document.getElementById("container");
let selectedrating = "";

ratingsel.forEach((ratingsel) => {
  ratingsel.addEventListener("click", (event) => {
    remove();
    selectedrating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnel.addEventListener("click", () => {
  if (selectedrating !== "") {
    containerel.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feedback = ${selectedrating}</strong>
    <p>Please Visit Us Again And We'll use your feedback to improve our customer support</p>`;
  }
});

function remove() {
  ratingsel.forEach((ratingsel) => {
    ratingsel.classList.remove("active");
  });
}
