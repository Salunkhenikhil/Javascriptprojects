const navbarel = document.querySelector(".navbar");

const bottomel = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomel.offsetTop - navbarel.offsetHeight - 50) {
    navbarel.classList.add("active");
  } else {
    navbarel.classList.remove("active");
  }
});
