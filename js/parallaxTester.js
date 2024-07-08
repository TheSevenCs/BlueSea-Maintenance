window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  const fish1 = document.getElementById("fish1");
  const fish2 = document.getElementById("fish2");
  const fish3 = document.getElementById("fish3");

  const ray1 = document.getElementById("ray1");
  const rays2 = document.getElementById("rays2");

  const anchor = document.getElementById("anchor");

  fish1.style.transform =
    "translateY(" + (scrollPosition * 0.3 - 200) + "px) scaleX(-1)";
  fish2.style.transform = "translateY(" + (scrollPosition * 0.3 - 700) + "px)";
  fish3.style.transform =
    "translateY(" + (scrollPosition * 0.3 - 950) + "px) scaleX(-1)";

  // const rays2XShift = scrollPosition * 0.9 - 1200;
  // const rays2YShift = scrollPosition * 0.3 + 1300;
  // rays2.style.transform =
  //   "translateX(" + rays2XShift + "px) " + "translateY(" + rays2YShift + "px)";

  anchor.style.transform =
    "translateY(" + (scrollPosition * 0.83 - 1500) + "px)";

  // console.log("RAY X-POS: ", rays2XShift);
  // console.log("RAY Y-POS: ", rays2YShift);
  // console.log("TOP OF PAGE: ", scrollPosition);
});

// lower % values make the image scroll slower == image is "further away from the screen"
// subtracting values from the translateY to bring the image further up the page
// ** crop fish image and readjust values to match
// setting the z-index values creates clear overlap (value images)
// unspecified z-index values makes somewhat transparent effect (text boxes)
