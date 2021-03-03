---
path: "/blog/that-animation"
date: "2020-09-03"
title: "That Animation"
type: "Tech"
---
Subtle, good web animations can be hard to pull off. And in a medium where you need to be sure that a wide range of devices support what your screen looks like, polish is king. That is why I usually _don't_ advise the over-use of animation in your website. You need to be careful with your choices of library or methodology or your site could end up feeling "jittery". Or maybe your framerate is too low, or maybe slower devices struggle to keep up with the performance of your animation; okay, you see where I am going with this, amateur web animations are sometimes off-putting.

In my opinion, there are only a couple ways of achieving smooth animations on the web. On a small-scale, you can get away with a lot, but for the majority of decorative animation, you should consider working either in SVG or with my favorite browser api, the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

I've seen some horror stories too - once a site that I maintained had a layer of snow (DOM elments waving back and forth) _on top_ of the site for a sale. The browser would eat interactions and resizing was a pain. Cool feature but your animation shouldn't interfere with use _ever_.

So I don't hate them, they can be good to give your site a memorable experience, especially for portfolio applications. But how did I do mine?

I think the majority of the code is self explanatory, but the short answer is canvas... And a little bit of math. With this, I am just plotting each character each frame, then moving them. Sprinkle in some randomness and it looks like a weird data stream or something. I am not sure what I mean it to represent but I thought it was cool never-the-less.

```js
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

```
