$(function () {
  "use strict";

  const onDOMLoaded = () => {
    showSlides();

    document.addEventListener("click", function () {
      var audio = new Audio("./assets/mp3/songs.mp3");
      audio.play();
    });
  };

  if (/complete|interactive|loaded/.test(document.readyState)) {
    onDOMLoaded();
  } else {
    document.addEventListener("DOMContentLoaded", onDOMLoaded);
  }
});
let slideIndex = 0;
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("letters");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
