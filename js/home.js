const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slideInLeft");
    } else {
      entry.target.classList.remove("slideInLeft");
    }
  });
});

// Intersection Observer for stingray1 animation
const stingrayObserver1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add("stingray1-out-animation");
      } else {
        entry.target.classList.remove("stingray1-out-animation");
      }
    });
  },
  { threshold: 0.5 }
);

// Intersection Observer for stingray2 animation
const stingrayObserver2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add("stingray2-out-animation");
      } else {
        entry.target.classList.remove("stingray2-out-animation");
      }
    });
  },
  { threshold: 0.5 }
);

// Observe elements with the 'stingray1-animation' class
const stingray1Elements = document.querySelectorAll(".stingray1-animation");
stingray1Elements.forEach((el) => stingrayObserver1.observe(el));

// Observe elements with the 'stingray2-animation' class
const stingray2Elements = document.querySelectorAll(".stingray2-animation");
stingray2Elements.forEach((el) => stingrayObserver2.observe(el));

const fadeElements = document.querySelectorAll(".animateSIL");
fadeElements.forEach((el) => observer.observe(el));
