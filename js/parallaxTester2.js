window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  //   console.log("SCROLL POSITION: ", scrollPosition);

  // banner 1 is closer and fasters
  const group1 = document.getElementById("group1");
  const group2 = document.getElementById("group2");
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const content3 = document.getElementById("content3");

  // PARALLAX ELEMENTS
  group1.style.transform = "translateY(" + scrollPosition * 0.8 + "px)";
  group2.style.transform = "translateY(" + scrollPosition * 0.45 + "px)";

  // main document scrolls normally
  // inside the window, elements scroll slower
  // adjust starting pos with absolute positioning
});

// lower % values make the image scroll slower == image is "further away from the screen"
// subtracting values from the translateY to bring the image further up the page
// ** crop fish image and readjust values to match
// setting the z-index values creates clear overlap (value images)
// unspecified z-index values makes somewhat transparent effect (text boxes)

// Revert group2 to normal scrolling after 1000px of scrolling
