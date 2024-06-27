document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".animated");

  // Create an intersection observer
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        // Unobserve the element after adding the class to prevent the animation from repeating
        // observer.unobserve(entry.target);
      }
    });
  });

  // Observe each target element
  elements.forEach(function (element) {
    observer.observe(element);
  });
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  const fish1 = document.getElementById("fish1");
  const fish2 = document.getElementById("fish2");
  const fish3 = document.getElementById("fish3");

  // fish1.style.transform =
  //   "translateY(" +
  //   (scrollPosition * 0.3 - 50) +
  //   "px) translateX(" +
  //   -75 +
  //   "px)";
  fish1.style.transform =
    "translateY(" +
    (scrollPosition * 0.3 - 350) +
    "px) translateX(" +
    -100 +
    "px)";
  fish2.style.transform =
    "translateY(" +
    (scrollPosition * 0.3 - 740) +
    "px) translateX( " +
    120 +
    "px) scaleX(-1)";
  fish3.style.transform =
    "translateY(" + scrollPosition * 0.3 + "px) translateX(" + 250 + "px)";
});
