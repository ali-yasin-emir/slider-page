const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const sliderContainer = document.querySelector('.slider-container');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter === slides.length - 1) {
    nextBtn.textContent = 'go to first slide';
  }

  if (counter < slides.length - 1) {
    nextBtn.textContent = 'next';
  }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
    nextBtn.textContent = 'next';
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

window.addEventListener('DOMContentLoaded', function () {
  prevBtn.style.display = 'none';
});
