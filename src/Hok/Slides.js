const slideData = [
  '#b2102f',
  '#ff4569',
  '#9500ae',
  '#dd33fa',
  '#4615b2',
  '#834bff',
  '#2a3eb1',
];
let currIndex = 0;

const increment = (index, len) => (index + 1) % len;
const decrement = (index, len) => (index + len - 1) % len;

// const slidesContainer = document.getElementById('slides-container');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
const slideIndexWrapper = document.getElementById('slide-index-wrapper');

const setBackground = () => {
  const slide = document.getElementById('slide');
  slide.style.backgroundColor = slideData[currIndex];
};

const insertSlideIndex = () => {
  for (let i = 0; i < slideData.length; i += 1) {
    const slideIndexContainer = document.createElement('div');
    slideIndexContainer.classList.add('slide-index-container');
    slideIndexWrapper.appendChild(slideIndexContainer);

    const slideIndex = document.createElement('div');
    slideIndex.classList.add('slide-index');
    slideIndexContainer.appendChild(slideIndex);

    slideIndexContainer.addEventListener('mouseenter', () => {
      slideIndex.classList.add('slide-index-container-hovered');
    });

    slideIndexContainer.addEventListener('mouseleave', () => {
      slideIndex.classList.remove('slide-index-container-hovered');
    });
  }
};

nextButton.addEventListener('click', () => {
  currIndex = increment(currIndex, slideData.length);
  setBackground();
});

prevButton.addEventListener('click', () => {
  currIndex = decrement(currIndex, slideData.length);
  setBackground();
});

// set initial color
setBackground();
insertSlideIndex();
