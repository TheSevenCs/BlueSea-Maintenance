const viewportHeight = window.innerHeight;

const scrollThreshold = 0.9 * viewportHeight - 400;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("animate");
      entry.target.classList.remove("before-animation");
      entry.target.classList.add("fu");
    }
  });
});

const stingrayObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add("stingray-out");
      } else {
        entry.target.classList.remove("stingray-out");
      }
    });
  },
  { threshold: 0.5 }
);

function spinArrow() {
  const arrow = document.getElementById("down-arrow");

  if (window.scrollY > scrollThreshold) {
    arrow.classList.add("animateArrow");
  }
  if (window.scrollY < scrollThreshold) {
    arrow.classList.remove("animateArrow");
  }
}

const stingrayElements = document.querySelectorAll(".stingray-animation");
stingrayElements.forEach((el) => stingrayObserver.observe(el));

const fadeElements = document.querySelectorAll(".animate");
fadeElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", spinArrow);
