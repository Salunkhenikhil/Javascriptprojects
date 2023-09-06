const profilemenu = document.getElementById("profile-dropdown-menu");

let sidebar_activity = document.getElementById("sidebar-activity");
let morelink = document.getElementById("morelink");

function toggleactivty() {
  sidebar_activity.classList.toggle("open-activity");

  if (sidebar_activity.classList.contains("open-activity")) {
    morelink.innerHTML = "Show less <b>-</b>";
  } else {
    morelink.innerHTML = "Show more <b>+</b>";
  }
}

function togglemenu() {
  profilemenu.classList.toggle("open");
}
