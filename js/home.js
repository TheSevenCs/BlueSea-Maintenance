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

const stingrayElements = document.querySelectorAll(".stingray-animation");
stingrayElements.forEach((el) => stingrayObserver.observe(el));

const fadeElements = document.querySelectorAll(".animate");
fadeElements.forEach((el) => observer.observe(el));
