// Get the navbar and bottom container elements
const navbarel = document.querySelector(".navbar");
const bottomel = document.querySelector(".bottom-container");

// Add scroll event listener
window.addEventListener("scroll", () => {
  // Check if scrolled to a certain point on the page
  if (window.scrollY > bottomel.offsetTop - navbarel.offsetHeight - 50) {
    // Make the navbar sticky
    navbarel.classList.add("active");
  } else {
    // Remove sticky effect from the navbar
    navbarel.classList.remove("active");
  }
});
