const infoHeight = "200px";

function expand(info) {
  console.log("INFO HEIGHT: ", info.style.height);
  if (info.style.height === "0px" || info.style.height === "") {
    console.log("EXPANDING");
    info.style.height = infoHeight;
    info.style.border = "4px solid black";
    info.style.boxShadow = "5px 5px 12px rgba(0, 0, 0, 1)";
    info.style.opacity = "1";
  } else {
    console.log("COLLAPSING");
    info.style.height = "0px";
    info.style.border = "0px solid black";
    info.style.boxShadow = "5px 5px 12px rgba(0, 0, 0, 0)";
    info.style.opacity = "0";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // ELEMENT CONSTS
  const service1 = document.getElementById("service1");
  const info1 = document.getElementById("info1");

  const service2 = document.getElementById("service2");
  const info2 = document.getElementById("info2");

  const service3 = document.getElementById("service3");
  const info3 = document.getElementById("info3");

  const service4 = document.getElementById("service4");
  const info4 = document.getElementById("info4");

  service1.addEventListener("click", function () {
    expand(info1);
  });
  service2.addEventListener("click", function () {
    expand(info2);
  });
  service3.addEventListener("click", function () {
    expand(info3);
  });
  service4.addEventListener("click", function () {
    expand(info4);
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
