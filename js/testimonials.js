const achievements = [
  {
    videoSrc: "videos/testimonials/video1.mp4",
    caption:
      "Delighted to see 3 of my clients, Jasper, Harper and Winter take home awards and some well deserved doggie treats 🏆 🥇",
  },
  {
    videoSrc: "videos/testimonials/video2.mp4",
    caption:
      "Good time to talk about and demonstrate the importance of positive dog training 🙌🏼🐶",
  },
  {
    videoSrc: "videos/testimonials/video3.mp4",
    caption:
      "I love this trick, it lasts longer if you freeze the spoon.. 🥄 Peanut butter can be a great treat as part of a healthy diet. 🐶 🐕",
  },
  {
    videoSrc: "videos/testimonials/video4.mp4",
    caption:
      "Got a new pup? 🐶 watch to learn some simple techniques to engage with your new furry pal.",
  },
  {
    videoSrc: "videos/testimonials/video5.mp4",
    caption:
      "Labradors are a family favourite, friendly, outgoing and high spirited.",
  },
  {
    videoSrc: "videos/testimonials/video6.mp4",
    caption: "Triggers first walkies🐾. Great result from the first session 🙌🏼",
  },
];

const testimonials = [
  {
    id: "1",
    imageTestimonial: "images/testimonials/1.1.jpg",
    altTestimonial: "The customer testimonial 1",
    imagePet: "images/testimonials/1.2.jpg",
    altPet: "The pet that this testimonials is about",
  },
  {
    id: "2",
    imageTestimonial: "images/testimonials/2.1.jpg",
    altTestimonial: "The customer testimonial 2",
    imagePet: "images/testimonials/2.2.jpg",
    altPet: "The pet that this testimonials is about",
  },
  {
    id: "3",
    imageTestimonial: "images/testimonials/3.1.jpg",
    altTestimonial: "The customer testimonial 3",
    imagePet: "images/testimonials/3.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "4",
    imageTestimonial: "images/testimonials/4.1.jpg",
    altTestimonial: "The customer testimonial 4",
    imagePet: "images/testimonials/4.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "5",
    imageTestimonial: "images/testimonials/5.1.jpg",
    altTestimonial: "The customer testimonial 5",
    imagePet: "images/testimonials/5.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "6",
    imageTestimonial: "images/testimonials/6.1.jpg",
    altTestimonial: "The customer testimonial 6",
    imagePet: "images/testimonials/6.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "7",
    imageTestimonial: "images/testimonials/7.1.jpg",
    altTestimonial: "The customer testimonial 7",
    imagePet: "images/testimonials/7.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "8",
    imageTestimonial: "images/testimonials/8.1.jpg",
    altTestimonial: "The customer testimonial 8",
    imagePet: "images/testimonials/8.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "9",
    imageTestimonial: "images/testimonials/9.1.jpg",
    altTestimonial: "The customer testimonial 9",
    imagePet: "images/testimonials/9.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "10",
    imageTestimonial: "images/testimonials/10.1.jpg",
    altTestimonial: "The customer testimonial 10",
    imagePet: "images/testimonials/10.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "11",
    imageTestimonial: "images/testimonials/11.1.jpg",
    altTestimonial: "The customer testimonial 11",
    imagePet: "images/testimonials/11.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "12",
    imageTestimonial: "images/testimonials/12.1.jpg",
    altTestimonial: "The customer testimonial 12",
    imagePet: "images/testimonials/12.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "13",
    imageTestimonial: "images/testimonials/13.1.jpg",
    altTestimonial: "The customer testimonial 13",
    imagePet: "images/testimonials/13.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "14",
    imageTestimonial: "images/testimonials/14.1.jpg",
    altTestimonial: "The customer testimonial 14",
    imagePet: "images/testimonials/14.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "15",
    imageTestimonial: "images/testimonials/15.1.jpg",
    altTestimonial: "The customer testimonial 15",
    imagePet: "images/testimonials/15.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "16",
    imageTestimonial: "images/testimonials/16.1.jpg",
    altTestimonial: "The customer testimonial 16",
    imagePet: "images/testimonials/16.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "17",
    imageTestimonial: "images/testimonials/17.1.jpg",
    altTestimonial: "The customer testimonial 17",
    imagePet: "images/testimonials/17.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
  {
    id: "18",
    imageTestimonial: "images/testimonials/18.1.jpg",
    altTestimonial: "The customer testimonial 18",
    imagePet: "images/testimonials/18.2.jpg",
    altPet: "The pet that this testimonial is about",
  },
];

// use data and creating list of testimonials
$(document).ready(function () {
  // render achievements
  renderAchievements(achievements);
  // render testimonials
  renderTestimonials(testimonials);
  // random picture for .testim-container
  new RandomImageGenerator(
    ["images/main/paw-paw-blue.png", "images/main/paw-paw-red.png"],
    ".testim-container"
  );
});

// Function for creating the list of achievements
function renderAchievements(achievements) {
  const achievementsList = $(".testim-achievm-list");
  achievements.forEach((achievement) => {
    // create <li> for each achievement
    const li = $("<li></li>").addClass("testim-achievm-item");
    li.html(`
      <figure class="testim-video-figure">
        <video class="testim-video" muted controls>
          <source src="${achievement.videoSrc}" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <figcaption class="testim-video-caption">${achievement.caption}</figcaption>
      </figure>
    `);

    // adding event listeners for playing and pausing the video on hover"
    const video = li.find("video")[0];
    $(video).on("mouseenter", function () {
      video.play();
    });
    $(video).on("mouseleave", function () {
      video.pause();
      video.currentTime = 0;
    });

    // add event listener to show video in full screen on click
    $(video).on("click", function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        // IE/Edge
        video.msRequestFullscreen();
      }
    });

    // detect when the video enters full-screen mode to unmute and play the video
    $(video).on(
      "fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange",
      function () {
        if (
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        ) {
          video.muted = false;
          video.play();
        }
      }
    );

    // adding element <li> to the list
    achievementsList.append(li);
  });
}

// Function for creating the list of testimonials
function renderTestimonials(testimonials) {
  const testimonialsList = $(".testim-custom-list");
  testimonials.forEach((testimonial) => {
    // create <li> for each testimonial
    const li = $("<li></li>").addClass("testim-custom-item");
    li.html(`
      <div class="testim-img-container">
        <img src="${testimonial.imageTestimonial}" alt="${testimonial.altTestimonial}" class="testim-img" data-id="${testimonial.id}" loading="lazy">
      </div>
      <div class="pet">
        <img src="${testimonial.imagePet}" alt="${testimonial.altPet}" class="testim-pet-img visually-hidden" data-id="${testimonial.id}" loading="lazy">
      </div>
    `);

    // Add hover effect to show/hide pet image
    li.find(".testim-img").on("mouseenter", function () {
      li.find(".testim-pet-img").removeClass("visually-hidden");
      li.find(".testim-img").addClass("visually-hidden");
    });

    li.find(".testim-pet-img").on("mouseleave", function () {
      li.find(".testim-pet-img").addClass("visually-hidden");
      li.find(".testim-img").removeClass("visually-hidden");
    });

    li.find(".testim-pet-img").on("click", function () {
      const imageId = $(this).data("id") - 1;
      console.log("img id is", imageId);
      openModal(imageId, testimonials);
    });

    // adding element <li> to the list
    testimonialsList.append(li);
  });
}

// Function for opening the modal window
function openModal(clickedIndex, testimonials) {
  const carouselItems = $("#carouselItems");
  carouselItems.empty();

  // adding all images to the carousel
  testimonials.forEach((testimonial, index) => {
    const activeClass = index === clickedIndex ? "active" : "";

    const carouselItem = `
        <div class="carousel-item ${activeClass}">
          <img src="${testimonial.imageTestimonial}" alt="${testimonial.altTestimonial}" class="d-block w-100" loading="lazy">
           <div class="testim-img-circle-container">
            <img src="${testimonial.imagePet}" alt="${testimonial.altPet}" class="testim-img-circle" loading="lazy">
          </div> 
        </div>       
      `;
    carouselItems.append(carouselItem);
  });

  // open modal window
  $("#imageModal").modal("show");

  // at the start of the animation - make the round image invisible
  $("#carouselTestimonials").on("slide.bs.carousel", function () {
    $(".testim-img-circle").addClass("invisible");
  });

  // when the animation is complete - make the round image visible
  $("#carouselTestimonials").on("slid.bs.carousel", function () {
    $(".carousel-item.active .testim-img-circle").removeClass("invisible");
  });
}
