// Scroll button
$(window).scroll(function () {
  toggleScrollButton();
});

function toggleScrollButton() {
  const $scrollTopBtn = $("#scrollTopBtn");
  if ($(document).scrollTop() > 300) {
    $scrollTopBtn.show();
  } else {
    $scrollTopBtn.hide();
  }
}

$("#scrollTopBtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "smooth"
  );
});

// Random image
class RandomImageGenerator {
  constructor(imageSrcArray, targetElementSelector) {
    this.imageSrcArray = imageSrcArray;
    this.imageDensity = 0.00001;
    this.minDistancePercent = 10;
    this.positions = [];
    this.targetElement = $(targetElementSelector);

    this.updateDimensions();

    $(window).resize(() => {
      this.updateDimensions();
      this.regenerateImages();
    });
    this.generateImages();
  }

  updateDimensions() {
    this.mainRect = this.targetElement[0].getBoundingClientRect();

    if (this.mainRect.width === 0 || this.mainRect.height === 0) {
      console.error("Element not exist");
      return;
    }

    this.minDistanceX = (this.minDistancePercent / 100) * this.mainRect.width;
    this.minDistanceY = (this.minDistancePercent / 100) * this.mainRect.height;

    this.imageCount = this.calculateImageCount();
  }
  calculateImageCount() {
    const elementArea = this.mainRect.width * this.mainRect.height;
    const maxImageCount = 100;
    const calculatedCount = Math.floor(elementArea * this.imageDensity);
    const imageCount = Math.min(Math.max(calculatedCount, 1), maxImageCount);
    return imageCount;
  }

  createImage() {
    const randomIndex = Math.floor(Math.random() * this.imageSrcArray.length);
    const $img = $("<img>")
      .attr("src", this.imageSrcArray[randomIndex])
      .addClass("random-image");
    return $img;
  }

  getRandomPosition() {
    let x, y, tooClose;

    do {
      tooClose = false;
      x = Math.floor(Math.random() * this.mainRect.width);
      y = Math.floor(Math.random() * this.mainRect.height);

      for (const pos of this.positions) {
        const distanceX = Math.abs(x - pos.x);
        const distanceY = Math.abs(y - pos.y);
        if (distanceX < this.minDistanceX && distanceY < this.minDistanceY) {
          tooClose = true;
          break;
        }
      }
    } while (tooClose);

    this.positions.push({ x, y });

    return { x, y };
  }

  generateImages() {
    for (let i = 0; i < this.imageCount; i++) {
      const $img = this.createImage();
      const { x, y } = this.getRandomPosition();
      $img.css({ left: `${x}px`, top: `${y}px` });
      this.targetElement.append($img);
    }
  }

  regenerateImages() {
    this.targetElement.find(".random-image").remove();
    this.positions = [];
    this.generateImages();
  }
}
