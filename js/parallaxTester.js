window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  // Adjust the scroll speed for each group
  const group1 = document.getElementById("group1");
  const group2 = document.getElementById("group2");
  const fish1 = document.getElementById("fish1");
  const fish2 = document.getElementById("fish2");
  const fish3 = document.getElementById("fish3");

  //   group1.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  //   group2.style.transform = "translateY(" + scrollPosition * 0.3 + "px)";
  fish1.style.transform =
    "translateY(" + (scrollPosition * 0.35 - 300) + "px) scaleX(-1)";
  fish2.style.transform = "translateY(" + (scrollPosition * 0.35 - 650) + "px)";
  fish3.style.transform =
    "translateY(" + (scrollPosition * 0.35 - 1100) + "px) scaleX(-1)";
});

// lower % values make the image scroll slower == image is "further away from the screen"
// subtracting values from the translateY to bring the image further up the page
