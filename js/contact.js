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
