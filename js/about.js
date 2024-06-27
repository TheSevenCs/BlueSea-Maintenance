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

  fish1.style.transform =
    "translateY(" +
    (scrollPosition * 0.3 - 50) +
    "px) translateX(" +
    -75 +
    "px)";
  fish2.style.transform =
    "translateY(" + (scrollPosition * 0.3 - 1240) + "px) scaleX(-1)";
});

// lower % values make the image scroll slower == image is "further away from the screen"
// subtracting values from the translateY to bring the image further up the page
// ** crop fish image and readjust values to match
// setting the z-index values creates clear overlap (value images)
// unspecified z-index values makes somewhat transparent effect (text boxes)
