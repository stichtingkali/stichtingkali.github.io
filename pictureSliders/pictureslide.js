const trackComposer= document.querySelector('.composerScroller');
const imagesComposer = document.querySelectorAll('.composerScroller img');

const trackUpcoming = document.querySelector('.upcomingScroller');
const imagesUpcoming = document.querySelectorAll('.upcomingScroller img');

let index = 0;

function showNextImageComposer() {
  index++;
  if (index >= imagesComposer.length) index = 0;
  const offset = -index * document.querySelector('.composerPhoto').clientWidth;
  trackComposer.style.transform = `translateX(${offset}px)`;
}

// Automatically change image every 3 seconds
setInterval(showNextImageComposer, 3000);

function showNextImageUpcoming() {
  index++;
  if (index >= imagesUpcoming.length) index = 0;
  const offset = -index * document.querySelector('.upcomingPhoto').clientWidth;
  trackUpcoming.style.transform = `translateX(${offset}px)`;
}

// Automatically change image every 3 seconds
setInterval(showNextImageUpcoming, 3000);