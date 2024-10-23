const svgIcon = document.getElementById("svgIcon");
const sections = document.querySelectorAll(".section");
const visibilityAmount = 0.25; // Section visibility threshold at which color update is triggered 25%

function updateSvgColor() {
  let sectionLocked = false;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;

    // Calculation of the visible part of the section (the upper part of the section is subtracted from the lower part of the section)
    const visibleHeight =
      Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
    // Height of the visible part of the section by the actual section height
    const visibleRatio = visibleHeight / sectionHeight;

    // Checking compliance with the visibility threshold
    if (visibleRatio > visibilityAmount) {
      sectionLocked = true;

      if (section.classList.contains("dark")) {
        svgIcon.style.filter = "invert(1)";
      } else {
        svgIcon.style.filter = "invert(0)";
      }
    }
  });
}

// Initializing correct svg color on page refresh
sections.forEach((section) => {
  if (section.classList.contains("white")) {
    svgIcon.style.filter = "invert(0)";
  } else {
    svgIcon.style.filter = "invert(1)";
  }
});

// Updating svg color when scrolling
window.addEventListener("scroll", updateSvgColor);
