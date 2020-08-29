import './styles/main.scss';

const coldAsciiCanvas = (canvas, options) => {
  function randomLetter() {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789+=/!?@#$%&;:';

    return allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
  }

  // Called whenever the canvas is resized
  function resized() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function fillCanvas(c) {
    c.fillStyle = options.backgroundColor;
    c.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawChar(c, letter) {
    const rad = (letter.rotation * Math.PI) / 180;

    c.translate(letter.x + letter.size / 2, letter.y + letter.size / 2);
    c.rotate(rad);

    c.fillStyle = options.textColor;
    c.font = `${letter.size}px serif`;
    c.fillText(letter.letter, 0, 0);

    c.rotate(rad * (-1));
    c.translate((letter.x + letter.size / 2) * (-1), (letter.y + letter.size / 2) * (-1));
  }

  function animation(letterArray) {
    requestAnimationFrame(() => {
      animation(letterArray);
    });

    if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
      resized();
    }

    let c = canvas.getContext('2d');

    fillCanvas(c);

    letterArray.forEach((letter, index) => {
      drawChar(c, letter);

      letterArray[index].x -= letterArray[index].vel;

      if (Math.random() * 100 > 99) {
        letterArray[index].letter = randomLetter();
        letterArray[index].rotation = Math.random() * 360;
      }

      if (letter.x < -100) {
        letterArray[index].x = canvas.width + 100;
      }
    });
  }

  function init() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Generating array of letters
    const letterArray = [];

    for (let i = 0; i < 15; i++) {
      letterArray.push({
        letter: 'a',
        x: Math.floor(Math.random() * canvas.width) + canvas.width,
        y: Math.floor(Math.random() * canvas.height) - 20,
        rotation: 90,
        size: Math.floor(Math.random() * 10 + 15),
        vel: Math.random() * 0.75 + 0.5,
      });
    }

    // Starting Animation
    animation(letterArray);
  }

  // Waits specified period then calls the init function
  setTimeout(() => {
    init();
  }, options.timeOffset);
};

const canvas = document.querySelector('.header-canvas');

// Starting the animation
coldAsciiCanvas(canvas, { timeOffset: 1000, backgroundColor: '#ffffff', textColor: '#333333' });
