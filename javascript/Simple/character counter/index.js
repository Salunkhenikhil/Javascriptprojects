// Get the elements from the document
const textel = document.getElementById("textarea");

const totalcharel = document.getElementById("total-counter");

const remaincharel = document.getElementById("remain-counter");

// Add a keyup event listener to the textarea element
textel.addEventListener("keyup", () => {
    // Call the updatecounter function whenever a key is pressed
    updatecounter();
});

// Call the updatecounter function initially to display the counters
updatecounter();

// Function to update the character counters
function updatecounter() {
    // Set the total character count to the length of the text in the textarea
    totalcharel.innerText = textel.value.length;

    // Get the maximum character limit from the textarea's maxlength attribute and subtract it from the current text length
    remaincharel.innerText = textel.getAttribute("maxlength") - textel.value.length;
}
