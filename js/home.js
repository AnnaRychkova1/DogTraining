// For the video in the "We Offer" section
const videoContainer = document.querySelector(".block-we-offer");
const video = document.querySelector(".background-video-we-offer");

video.playbackRate = 0.5; // Playback speed is 50% slower

videoContainer.addEventListener("mouseenter", () => {
  video.play(); // Start playing the video
});

videoContainer.addEventListener("mouseleave", () => {
  video.pause(); // Pause the video
  video.currentTime = 0; // Rewind to the first frame
});

// For the video in the "Reviews" section
const videoContainer2 = document.querySelector(".block-reviews");
const video2 = document.querySelector(".background-video-reviews");

// video2.playbackRate = 0.2; // Playback speed is 80% slower

videoContainer2.addEventListener("mouseenter", () => {
  video2.play(); // Start playing the video
});

videoContainer2.addEventListener("mouseleave", () => {
  video2.pause(); // Pause the video
  video2.currentTime = 0; // Rewind to the first frame
});

// For the video in the "Contacts" section
const videoContainer3 = document.querySelector(".block-contacts");
const video3 = document.querySelector(".background-video-contacts");

// video3.playbackRate = 0.2; // Playback speed is 80% slower

videoContainer3.addEventListener("mouseenter", () => {
  video3.play(); // Start playing the video
});

videoContainer3.addEventListener("mouseleave", () => {
  video3.pause(); // Pause the video
  video3.currentTime = 0; // Rewind to the first frame
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slider");
  const slideElements = document.querySelectorAll(".slide");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentSlide = 1; // Start from the first real slide (not a clone)
  const slideCount = slideElements.length;

  // Clone the first and last slides
  const firstClone = slideElements[0].cloneNode(true);
  const lastClone = slideElements[slideCount - 1].cloneNode(true);

  // Add clones to the slider
  slides.appendChild(firstClone); // Append a copy of the first slide to the end
  slides.insertBefore(lastClone, slideElements[0]); // Add a copy of the last slide to the beginning

  // Function to change slides
  function changeSlide(withTransition = true) {
    if (withTransition) {
      slides.style.transition = "transform 0.5s ease-in-out";
    } else {
      slides.style.transition = "none"; // Disable animation for instant movement
    }

    const slideWidth = slideElements[0].offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Left arrow click event handler
  leftArrow.addEventListener("click", function () {
    if (currentSlide <= 0) return; // If at the start, do nothing
    currentSlide--;
    changeSlide();
  });

  // Right arrow click event handler
  rightArrow.addEventListener("click", function () {
    if (currentSlide >= slideCount + 1) return; // If at the end, do nothing
    currentSlide++;
    changeSlide();
  });

  // Listen for the end of the transition to make seamless looping
  slides.addEventListener("transitionend", function () {
    // If we're on the last (cloned first) slide
    if (currentSlide === slideCount + 1) {
      currentSlide = 1; // Jump to the first real slide
      changeSlide(false); // Move instantly without animation
    }

    // If we're on the first (cloned last) slide
    if (currentSlide === 0) {
      currentSlide = slideCount; // Jump to the last real slide
      changeSlide(false); // Move instantly without animation
    }
  });

  // Set the initial position (first real slide)
  changeSlide(false);
});

// Recalculate slide position on window resize
window.addEventListener("resize", function () {
  changeSlide(); // Call the slide change function on window resize
});

function changeSlide() {
  const slideWidth = slideElements[0].offsetWidth; // Get the width of the first slide
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Change header style and logo on scroll
document.addEventListener("scroll", function () {
  const header = document.querySelector(".home-header");
  const logo = document.querySelector(".logo-img");
  const scrollThreshold = 50; // The scroll distance after which the header and logo will change

  if (window.scrollY > scrollThreshold) {
    header.classList.add("scrolled");
    // Change logo to the new one when the user scrolls down
    logo.src = "images/header-footer/logo.png"; // Path to the new logo
  } else {
    header.classList.remove("scrolled");
    // Revert to the original logo when the user scrolls back up
    logo.src = "images/header-footer/logo1.png"; // Path to the original logo
  }
});

// Random picture for .iintroduction-container
new RandomImageGenerator(
  ["images/main/paw-paw-blue.png", "images/main/paw-paw-red.png"],
  ".introduction-container"
);
