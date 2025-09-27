// Reusable function to create a slider
function createSlider(containerSelector, trackSelector) {
  const slider = document.querySelector(containerSelector);
  const track = document.querySelector(trackSelector);
  const images = track.querySelectorAll('img');
  let index = 0;

  function showNextImage() {
    index++;
    if (index >= images.length) index = 0;
    const offset = -index * slider.clientWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  setInterval(showNextImage, 3000);
}

// Initialize sliders, add more below
createSlider('.composerPhoto', '.composerScroller');
createSlider('.upcomingPhoto', '.upcomingScroller');
