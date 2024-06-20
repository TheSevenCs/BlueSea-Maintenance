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
document.querySelectorAll(".nav-bar a").forEach((link) => {
  link.addEventListener("mouseenter", handleMouseEnter);
  link.addEventListener("touchstart", handleTouchStart);
});

function handleMouseEnter(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  e.currentTarget.style.setProperty("--x", `${x}px`);
}

function handleTouchStart(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.touches[0].clientX - rect.left;
  e.currentTarget.style.setProperty("--x", `${x}px`);
}
// update while scrolling
window.addEventListener("scroll", updateNavbarStyle);

// update from initial state
document.addEventListener("DOMContentLoaded", updateNavbarStyle);
