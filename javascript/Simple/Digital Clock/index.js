// Get the HTML elements for hour, minutes, seconds, and am/pm
const hourel = document.getElementById("hour");
const minutesel = document.getElementById("minutes");
const secondsel = document.getElementById("seconds");
const ampmel = document.getElementById("ampm");

// Function to update the clock
function updateclock(){
    // Get the current hour, minutes, and seconds
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    // Set the initial value for am/pm
    let ampm = "AM";
    
    // Convert 24-hour format to 12-hour format and determine am/pm
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    
    // Add leading zeros for single-digit values
    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;
    
    // Update the HTML elements with the new values
    hourel.innerText = h;
    minutesel.innerText = m;
    secondsel.innerText = s;
    ampmel.innerText = ampm;
    
    // Call the updateclock function every second
    setTimeout(()=>{updateclock()},1000);
}

// Call the updateclock function to start updating the clock
updateclock();
