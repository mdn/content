---
title: Bounce off the walls
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}

This is the **3rd step** out of 13 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Now that motion physics have been introduced, we can start implementing collision detection into the game—first we'll look at the walls.

## Bouncing off the world boundaries

The [law of reflection](<https://en.wikipedia.org/wiki/Reflection_(physics)>) tells us that, in an ideal world, when a ball hits a flat surface like a wall, it would reflect back—the velocity component perpendicular to the wall is reversed, while the component parallel to the wall is preserved. For example, if the ball hits the lower boundary while flying towards the lower right, it should reflect and fly towards the upper right.

We'll perform the collision detection right after the position update. The ball's motion will be updated like this, assuming it's directly moving to the left with `vx = -1`:

1. Frame 1: at `x = 1`, `vx = -1`
2. Frame 2: at `x = 0`; collision detected, so velocity becomes `vx = 1`
3. Frame 3: at `x = 1`, `vx = 1`

> [!NOTE]
> At frame 2, it's possible for `x` to be less than 0, for example if `vx = -2`, so the ball overlaps with the wall. Because this only sustains for no more than a few frames, most game engines will tolerate it because it makes calculation significantly easier. You can also adjust the ball's position to avoid overlap, like setting `x = 0` whenever `x <= 0`.

The essential logic is as follows:

```js
if (hittingLeftBoundary || hittingRightBoundary) {
  ballVel.x = -ballVel.x;
}
if (hittingTopBoundary || hittingBottomBoundary) {
  ballVel.y = -ballVel.y;
}
```

We just need to replace each of the variables in the conditions with the right expressions. Take the left boundary as an example. Its `x` coordinate is 0, meaning that whenever the left edge of the ball has an `x` coordinate less than or equal to 0 and it's moving to the left, we know that it has hit the boundary.

> [!NOTE]
> Imagine the following: the ball moves to the left, overlaps with the wall (the `x` coordinate is negative), and reverses the direction. However, the next frame happens so quickly that the ball has not fully left the wall yet (the `x` coordinate is still negative). Without this condition, it would trigger another collision and reverse direction yet again. This is known as [collision jitter](https://docs.flatredball.com/flatredball/tutorials/code-tutorials/collision-jitter), a common bug in games, especially old ones that don't use established game engines. We solve it by adding the "is moving to the left" condition; it can also be solved by implementing the "overlap-avoiding adjustment" above.

To get the left edge of the ball, we need to subtract its half-width from the center position, similar to how we obtain the coordinates for `drawImage()`. For convenience we'll define `const rx = ball.width / 2` so we can reuse it for all other calculations. Note that `rx` has to be defined _inside_ the `draw` function, because `ball.width` is only available after the image has been loaded, but top-level code is executed before that.

```js
const hittingLeftBoundary = ballPos.x - rx <= 0 && ballVel.x < 0;
```

The implementations for the other three boundaries are left as exercise; remember that the right boundary has an `x` coordinate of 480, while the top and bottom boundaries have `y` coordinates of 0 and 320, respectively.

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

const ball = new Image();
ball.src =
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png";

const ballPos = { x: 50, y: 50 };
let lastTimestamp = null;
const ballVel = { x: 0.15, y: 0.15 };

Promise.all([ball].map((img) => img.decode())).then(() =>
  requestAnimationFrame(draw),
);

function draw(timestamp) {
  const rx = ball.width / 2;
  const ry = ball.height / 2;

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, 480, 320);
  if (lastTimestamp !== null) {
    const dt = timestamp - lastTimestamp;
    ballPos.x += ballVel.x * dt;
    ballPos.y += ballVel.y * dt;
  }
  lastTimestamp = timestamp;
  ctx.drawImage(ball, ballPos.x - rx, ballPos.y - ry);

  const hittingLeftBoundary = ballPos.x - rx <= 0 && ballVel.x < 0;
  const hittingRightBoundary = ballPos.x + rx >= 480 && ballVel.x > 0;
  const hittingTopBoundary = ballPos.y - ry <= 0 && ballVel.y < 0;
  const hittingBottomBoundary = ballPos.y + ry >= 320 && ballVel.y > 0;
  if (hittingLeftBoundary || hittingRightBoundary) {
    ballVel.x = -ballVel.x;
  }
  if (hittingTopBoundary || hittingBottomBoundary) {
    ballVel.y = -ballVel.y;
  }
  // continue adding things here...

  requestAnimationFrame(draw);
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

This is starting to look more like a game now, but we can't control it in any way—it's high time we introduced the [player paddle and controls](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}
