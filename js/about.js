// document.addEventListener("DOMContentLoaded", () => {
//   const animatedElement = document.querySelector(".animated-element");

//   // Delay to simulate loading or a specific trigger
//   setTimeout(() => {
//     animatedElement.classList.add("visible");
//   }, 500); // Adjust the delay as needed
// });

// function animation1() {
//   var box = document.getElementById("animation1");

//   if (box.style.transform === "translateX(100px)") {
//     box.style.transform = "translateX(0)";
//     box.style.opacity = "1";
//   } else {
//     box.style.transform = "translateX(100px)";
//     box.style.opacity = "0.5";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".animated-center");

  // Create an intersection observer
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          // Unobserve the element after adding the class to prevent the animation from repeating
          // observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe each target element
  elements.forEach(function (element) {
    observer.observe(element);
  });
});

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
