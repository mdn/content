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
  ball.vel.x = -ball.vel.x;
}
if (hittingTopBoundary || hittingBottomBoundary) {
  ball.vel.y = -ball.vel.y;
}
```

We just need to replace each of the variables in the conditions with the right expressions. Take the left boundary as an example. Its `x` coordinate is 0, meaning that whenever the left edge of the ball has an `x` coordinate less than or equal to 0 and it's moving to the left, we know that it has hit the boundary.

> [!NOTE]
> Imagine the following: the ball moves to the left, overlaps with the wall (the `x` coordinate is negative), and reverses the direction. However, the next frame happens so quickly that the ball has not fully left the wall yet (the `x` coordinate is still negative). Without this condition, it would trigger another collision and reverse direction yet again. This is known as [collision jitter](https://docs.flatredball.com/flatredball/tutorials/code-tutorials/collision-jitter), a common bug in games, especially old ones that don't use established game engines. We solve it by adding the "is moving to the left" condition; it can also be solved by implementing the "overlap-avoiding adjustment" above.

To get the left edge of the ball, we need to subtract its half-width from the center position, similar to how we obtain the coordinates for `drawImage()`.

```js
const hittingLeftBoundary = ball.pos.x - ball.size.w / 2 <= 0 && ball.vel.x < 0;
```

The implementations for the other three boundaries are left as exercise; remember that the right boundary has an `x` coordinate of `canvas.width`, while the top and bottom boundaries have `y` coordinates of 0 and `canvas.height`, respectively.

> [!NOTE]
> Here, we are approximating the ball as a square centered at `ball.pos`, with size `ball.size.w` by `ball.size.h` (these are dimensions of the PNG image), because squares are easier to calculate for overlap than arbitrary geometric shapes. This is known as a _hitbox_. An object can also have many hitboxes if its geometry is complex. Because our PNG asset has no padding, the image-based hitbox pretty accurately circumscribes the rendered circle, save for the extra space on the four corners. The more complex your object is, the harder it is to create an accurate set of hitboxes while maintaining good performance.

## Incorporating collision handling

We decide to keep the collision handling logic outside of objects, because most collisions happen between two objects, and we may also want to control when and how it happens. The `Ball` class is only responsible for providing the `hitbox`:

```js
class Ball {
  // …
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
  }
}
```

The getter calculates the edges from the ball's current position and size whenever we read `ball.hitbox`. This avoids storing a second set of coordinates that we would need to update whenever the ball moves.

Now add the collision handler outside the class. It takes an object exposing `hitbox` and `vel`, along with the world's width and height:

```js
function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  if (hittingLeftBoundary || hittingRightBoundary) {
    object.vel.x = -object.vel.x;
  }
  if (hittingTopBoundary || hittingBottomBoundary) {
    object.vel.y = -object.vel.y;
  }
}
```

Inside the main `draw()` function, call the handler immediately after `ball.move(dt)`:

```js
if (lastTimestamp !== null) {
  const dt = timestamp - lastTimestamp;
  ball.move(dt);
  handleWallCollisions(ball, canvas.width, canvas.height);
}
lastTimestamp = timestamp;
ball.draw();
```

The game loop now moves the ball, handles wall collisions, and then draws it. The current collision algorithm is very simple and allows the aforementioned "temporary penetration". Later, when we add more objects, we will be upgrading this algorithm.

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
    this.size.w = this.asset.width;
    this.size.h = this.asset.height;
  }
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
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
  requestAnimationFrame(draw),
);

function draw(timestamp) {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (lastTimestamp !== null) {
    const dt = timestamp - lastTimestamp;
    ball.move(dt);
    handleWallCollisions(ball, canvas.width, canvas.height);
  }
  lastTimestamp = timestamp;
  ball.draw();

  requestAnimationFrame(draw);
}

function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  if (hittingLeftBoundary || hittingRightBoundary) {
    object.vel.x = -object.vel.x;
  }
  if (hittingTopBoundary || hittingBottomBoundary) {
    object.vel.y = -object.vel.y;
  }
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

This is starting to look more like a game now, but we can't control it in any way—it's high time we introduced the [player paddle and controls](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}
