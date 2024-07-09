const viewportH = window.innerHeight;

const sThreshold = 0.9 * viewportH - 400;

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

  if (window.scrollY > sThreshold) {
    arrow.classList.add("animateArrow");
  }
  if (window.scrollY < sThreshold) {
    arrow.classList.remove("animateArrow");
  }
}

const stingrayElements = document.querySelectorAll(".stingray-animation");
stingrayElements.forEach((el) => stingrayObserver.observe(el));

const fadeElements = document.querySelectorAll(".animate");
fadeElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", spinArrow);

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  const fish1 = document.getElementById("fish1");
  const fish2 = document.getElementById("fish2");
  const fish3 = document.getElementById("fish3");
  const anchor = document.getElementById("anchor1");

  fish1.style.transform =
    "translateY(" + (scrollPosition * 0.3 - 200) + "px) scaleX(-1)";
  fish2.style.transform = "translateY(" + (scrollPosition * 0.3 - 700) + "px)";
  fish3.style.transform =
    "translateY(" + (scrollPosition * 0.3 - 950) + "px) scaleX(-1)";

  anchor.style.transform =
    "translateY(" + (scrollPosition * 0.7 - 1800) + "px)";
});

// lower % values make the image scroll slower == image is "further away from the screen"
// subtracting values from the translateY to bring the image further up the page
// ** crop fish image and readjust values to match
// setting the z-index values creates clear overlap (value images)
// unspecified z-index values makes somewhat transparent effect (text boxes)
