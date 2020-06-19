import './styles/main.scss';

const canvas = document.querySelector('.header-canvas');
const c = canvas.getContext('2d');

let starArray = [];
let amountOfStars = 10;

for (let i; amountOfStars <= i; i++) {
  // TODO: Assoc Array here. Currently x, y, radius
  starArray.push([10, 10, 50]);
}

const starRender = (star) => {
  c.beginPath();
  c.arc(star[0], star[1], star[2], 0, 2 * Math.PI, false);
  c.fillStyle = 'green';
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

animateLoop();
