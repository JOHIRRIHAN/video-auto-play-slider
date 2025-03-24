let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Loop to the last slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Loop to the first slide
  }

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateY(-${currentIndex * 16.66}%)`; // Adjusting based on the number of slides (6)

  // Get the related image from the active slide
  const activeSlide = slides[currentIndex];
  const relatedImageURL = activeSlide.getAttribute("data-related-image");

  // Update the image on the right side
  const rightSideImage = document.getElementById('right-side-image');
  rightSideImage.src = relatedImageURL;
}

// Event listener for clicking on images on the left side
const slideImages = document.querySelectorAll('.slide');
slideImages.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    const relatedImageURL = slide.getAttribute('data-related-image');
    const rightSideImage = document.getElementById('right-side-image');
    rightSideImage.src = relatedImageURL;
    
    // Optional: If you want to also show the clicked image in the slider
    currentIndex = index; // Update the current index to show the correct slide
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateY(-${currentIndex * 16.66}%)`; // Adjust based on slide height
  });
});
