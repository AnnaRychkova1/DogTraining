// Scroll button
window.onscroll = function () {
  toggleScrollButton();
};

function toggleScrollButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
