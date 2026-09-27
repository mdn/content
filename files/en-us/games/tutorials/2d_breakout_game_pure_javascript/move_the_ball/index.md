---
title: Move the ball
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

This is the **2nd step** out of 11 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). In this article, we'll look at how to add sprites into our gameworld. Our game will feature a ball rolling around the screen, bouncing off a paddle, and destroying bricks to earn points.

Doing this involves two steps: loading the ball's asset, and rendering it at the correct position as the ball moves. Technically, we will be painting the ball on the screen, clearing it and then painting it again in a slightly different position every frame to make the impression of movement — just like how movement works with the movies.

## Defining a drawing loop

To keep constantly updating the canvas drawing on each frame, we need to define a drawing function that will run over and over again, with a different set of variable values each time to change sprite positions, etc.

You may want to use {{domxref("Window.setInterval", "setInterval()")}} to schedule the function to run every few milliseconds (say, 10, which would be 100 frames per second). This works, but it causes problems:

1. Timers are inexact, so you cannot assume that the function will be called at exactly 10-millisecond intervals.
2. If your rendering function is slow and takes more than 10 milliseconds to paint the frame, it will miss the next tick, and these lags add up, causing the game's time to be out of sync with real-world time.

You can still use `setInterval`—or `setTimeout`—which has the benefit of being able to configure the frame rate, but you have to implement some logic to pace the timeouts to avoid the issues above. For simplicity, we'll use {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}, which lets the browser automatically call the rendering function the next time it's available for redrawing. The function receives a timestamp, telling us how much time has elapsed since the last frame, so we can decide the distance that the ball should have traveled in the meantime.

Replace your `script.js` file content with the following:

```js
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

requestAnimationFrame(update);

function update(timestamp) {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // continue adding things here...

  requestAnimationFrame(update);
}
```

Now the game is already running in a loop when you reload the HTML. However, we haven't defined any moving parts, so it has no visible effects yet.

## Loading the ball sprite

All our game objects—ball, paddle, bricks—will be implemented as classes, so that they can encapsulate their state and expose behavior.

Our ball will be represented by a PNG image. We will be using {{domxref("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}} to rendering the PNG to the canvas. Among the many types of input data it takes, we will use an {{domxref("HTMLImageElement")}}, because it automatically handles the fetching and decoding for us.

> [!NOTE]
> You can of course draw a filled circle directly on the canvas, using {{domxref("CanvasRenderingContext2D/arcTo", "ctx.arcTo()")}} and {{domxref("CanvasRenderingContext2D/fill", "ctx.fill()")}}, but in a real game your ball is probably more complex than a single circle, so eventually you will want to use a separate picture asset anyway.

First define the class:

```js
class Ball {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async preload() {
    await this.asset.decode();
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
}
```

The {{domxref("HTMLImageElement/Image", "Image()")}} constructor creates an `HTMLImageElement` without attaching it to the DOM (we won't be rendering the `<img>` element itself, only using it to paint the canvas). The assignment to {{domxref("HTMLImageElement/src", "src")}} initiates the request for the `ball.png` image. The `preload()` function calls {{domxref("HTMLImageElement/decode", "decode()")}}, which returns a promise that fulfills when the corresponding image is successfully fetched and decoded. After that happens, we can save the image's dimensions for later calculation.

Replace the `requestAnimationFrame(update);` call above the `update` function definition with the following:

```js
const ball = new Ball("img/ball.png", ctx);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);
```

We call `Promise.all([ball].map((obj) => obj.preload()))`, which gets a single promise that fulfills when all assets preload successfully. If that happens, then we start drawing using `requestAnimationFrame(update)`.

Of course, to load the image, it must be available in our code directory. [Grab the ball image from our assets website](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png), and save it inside an `/img` directory in the same place as your `index.html` file.

Now, to show it on the screen, we call `drawImage()`, passing both the `ball` image and the x and y coordinates of the canvas where we want it added. Add the following to your `Ball` class:

```js
class Ball {
  // …
  draw() {
    this.ctx.drawImage(this.asset, 50 - this.size.w / 2, 50 - this.size.h / 2);
  }
}
```

> [!NOTE]
> The coordinates you pass to `drawImage()` is the coordinates of the _top-left corner_ of the image. In practice, it's often more convenient to track the _center_ of objects, so that all directions can be processed in the same way (especially for [collision detection](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls)). Therefore, we specify the intended coordinates for the _center_ of the ball as `(50, 50)`, and subtract `width / 2` and `height / 2` to get the corresponding locations of the top-left corner.

That's it—if you load your `index.html` file, you will see the image already loaded and rendered on the canvas!

## Updating the ball's position on each frame

Currently, each `ball.draw()` invocation paints the ball in exactly the same place, so the ball appears stationary. We can maintain separate state fields tracking the position and velocity of the ball's center. Just below the existing field declarations in `class Ball`, add definitions for `pos` and `vel`, and replace the `draw()` method so it uses those coordinates:

```js
class Ball {
  // …
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 0.15, y: 0.15 };
  // …
  draw() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
}
```

The velocity is set to 0.15 along both axes, meaning that the ball moves 150 pixels in both the x and y directions every second. We'll update the ball's position on every call of `update()`. We need to work out how much to displace it from the last position, using the formula `dx = vx * dt`, where `vx` is its speed along the x axis and `dt` is the time elapsed since the last `update()` call. Because each time the `update()` function receives a `timestamp`, we can compare it with the previous iteration to get `dt`. Add the following to the class:

```js
class Ball {
  // …
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}
```

It adds the calculated displacement to the ball's coordinates on the canvas, on each frame. We'll be adding more logic to this function, like collision detection.

Add the following, right after `const ctx`:

```js
let lastTimestamp = null;
```

Within the `update()` function, we can now call `ball.move()` and `ball.draw()` to let the class update itself, while the `update()` function only keeps track of the time:

```js
const dt = lastTimestamp === null ? 0 : timestamp - lastTimestamp;
lastTimestamp = timestamp;
ball.move(dt);

ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ball.draw();
```

On the first frame, `lastTimestamp` is `null`, so `dt` is zero and the ball stays at its initial position. On later frames, `dt` is the time elapsed since the previous frame.

Reload `index.html` and you should see the ball rolling across the screen.

> [!NOTE]
> The canvas isn't automatically cleared every time `update()` is called. The previous position of the ball is removed because we redraw the whole background with `ctx.fillRect(0, 0, canvas.width, canvas.height)`, which lays over any existing content. If you remove that line, you'll see the ball leaving behind a trail.

## Compare your code

Here's what you should have so far, running live. To view its source code, click the "Play" button.

```html hidden
<canvas id="game-canvas" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let lastTimestamp = null;

class Ball {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 0.15, y: 0.15 };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async preload() {
    await this.asset.decode();
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  draw() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  ball.move(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();

  requestAnimationFrame(update);
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

Now we can move to the next lesson and see how to make the ball [bounce off the walls](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
