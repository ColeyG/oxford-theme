import './styles/main.scss';

const canvas = document.querySelector('.header-canvas');
const c = canvas.getContext('2d');

let starArray = [];
let amountOfStars = 10;


const starRender = (star) => {
  c.beginPath();
  c.arc(star[0], star[1], star[2], 0, 2 * Math.PI, false);
  c.fillStyle = 'black';
  c.fill();
};

const animateLoop = () => {
  requestAnimationFrame(animateLoop);
  canvas.width = window.innerWidth;
  canvas.height = canvas.offsetHeight;

  starArray.forEach((star) => {
    starRender(star);
  });
};

const initializeAnimation = () => {
  setTimeout(() => {
    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;

    for (let i = 0; amountOfStars > i; i++) {
      starArray.push([Math.random() * canvas.width, Math.random() * canvas.height, 3]);
    }

    animateLoop();
  }, 1000);
};

// initializeAnimation();
