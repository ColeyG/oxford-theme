import './styles/main.scss';

const canvas = document.querySelector('.header-canvas');
const c = canvas.getContext('2d');

const animateLoop = () => {
  requestAnimationFrame(animateLoop);
  canvas.width = window.innerWidth;
  canvas.height = canvas.offsetHeight;
};

animateLoop();
