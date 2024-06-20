const viewportHeight = window.innerHeight;

// units are set to 90vh - navbar.height
const scrollThreshold = 0.9 * viewportHeight - 40;

function updateNavbarStyle() {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > scrollThreshold) {
    navbar.style.backgroundColor = "#3a3a3a";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}

// update while scrolling
window.addEventListener("scroll", updateNavbarStyle);

// update from initial state
document.addEventListener("DOMContentLoaded", updateNavbarStyle);
