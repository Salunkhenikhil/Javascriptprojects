// Get references to the required elements using their IDs and classes
const btnel = document.getElementById("btn");
const imgcontainerel = document.querySelector(".img-container");
const imgel = document.querySelector(".anime-img");
const nameel = document.querySelector(".name");

// Add click event listener to the button
btnel.addEventListener("click", async function () {
  try {
    // Disable the button and show loading status
    btnel.disabled = true;
    btnel.innerText = "Loading....";
    nameel.innerText = "Updating!!!";
    imgel.src = "spinner.svg"; // Display a loading spinner image

    // Fetch data from the API
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();

    // Show the image container and update the image and name
    imgcontainerel.style.display = "block";
    imgel.src = data.url;
    nameel.innerText = data.artist;

    // Enable the button again
    btnel.disabled = false;
    btnel.innerText = "Get an anime pic";
  } catch (error) {
    // Display an error message if there's a problem with the API
    btnel.disabled = false;
    btnel.innerText = "Get an anime pic";
    nameel.innerText = "An Error Happened, Please Try Again Later!!!!";
  }
});
