---
title: Advanced animations
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
page-type: guide
tags:
  - Canvas
  - Graphics
  - Tutorial
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

In the last chapter we made some [basic animations](/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations) and got to know ways to get things moving. In this part we will have a closer look at the motion itself and are going to add some physics to make our animations more advanced.

## Drawing a ball

We are going to use a ball for our animation studies, so let's first draw that ball onto the canvas. The following code will set us up.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

As usual, we need a drawing context first. To draw the ball, we will create a `ball` object which contains properties and a `draw()` method to paint it on the canvas.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();
```

Nothing special here, the ball is actually a simple circle and gets drawn with the help of the {{domxref("CanvasRenderingContext2D.arc()", "arc()")}} method.

## Adding velocity

Now that we have a ball, we are ready to add a basic animation like we have learned in the [last chapter](/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations) of this tutorial. Again, {{domxref("window.requestAnimationFrame()")}} helps us to control the animation. The ball gets moving by adding a velocity vector to the position. For each frame, we also {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} the canvas to remove old circles from prior frames.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

## Boundaries

Without any boundary collision testing our ball runs out of the canvas quickly. We need to check if the `x` and `y` position of the ball is out of the canvas dimensions and invert the direction of the velocity vectors. To do so, we add the following checks to the `draw` method:

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### First demo

Let's see how it looks in action so far.

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### Result

Move your mouse into the canvas to start the animation.

{{EmbedLiveSample("First_demo", "610", "340")}}

## Acceleration

To make the motion more real, you can play with the velocity like this, for example:

```js
ball.vy *= .99;
ball.vy += .25;
```

This slows down the vertical velocity each frame, so that the ball will just bounce on the floor in the end.

### Second demo

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= .99;
  ball.vy += .25;

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### Result

{{EmbedLiveSample("Second_demo", "610", "340")}}

## Trailing effect

Until now we have made use of the {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} method when clearing prior frames. If you replace this method with a semi-transparent {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}, you can easily create a trailing effect.

```js
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### Third demo

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= .99;
  ball.vy += .25;

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### Result

{{EmbedLiveSample("Third_demo", "610", "340")}}

## Adding mouse control

To get some control over the ball, we can make it follow our mouse using the [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) event, for example. The [`click`](/en-US/docs/Web/API/Element/click_event) event releases the ball and lets it bounce again.

### Fourth demo

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let raf;
let running = false;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', (e) => {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener('click', (e) => {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener('mouseout', (e) => {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```

#### Result

Move the ball using your mouse and release it with a click.

{{EmbedLiveSample("Fourth_demo", "610", "340")}}

## Breakout

This short chapter only explains some techniques to create more advanced animations. There are many more! How about adding a paddle, some bricks, and turn this demo into a [Breakout](https://en.wikipedia.org/wiki/Breakout_%28video_game%29) game? Check out our [Game development](/en-US/docs/Games) area for more gaming related articles.

## See also

- {{domxref("window.requestAnimationFrame()")}}
- [Efficient animation for web games](/en-US/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
