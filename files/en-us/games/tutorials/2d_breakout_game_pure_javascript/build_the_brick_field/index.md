---
title: Build the brick field
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}

This is the **6th step** out of 12 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Let's explore how to create a group of bricks and print them on the screen using a loop. Building the brick field is a little bit more complicated than adding a single object to the screen.

## Drawing the bricks

Like the `Ball` and `Paddle`, the `Brick` is also backed by the `GameObject` class. A brick has no default position or size and must be explicitly specified in the constructor. Because the size is already explicitly specified, the `preload()` method will not override it with the image's dimensions. Because the bricks have explicit dimensions, we can use the extra `dWidth` and `dHeight` parameters of {{domxref("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}}, which automatically scales the image if it's not already of the desired dimensions.

```js
class Brick extends GameObject {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top, this.size.w, this.size.h);
  }
}
```

You also need to [grab the brick image](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) and save it in your `/img` directory.

We will place all the code for drawing the bricks inside an `initBricks` function to keep it separated from the rest of the code. Add a call to `initBricks` below `colliders.push(paddle);`:

```js
// …
const paddle = new Paddle("img/paddle.png", ctx);
colliders.push(paddle);
const bricks = initBricks();
// …
```

Now on to the function itself. Add the `initBricks` function at the end of the `script.js` file. To begin with, we add the `bricksLayout` object, as this will come in handy very soon:

```js
function initBricks() {
  const bricksLayout = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  const bricks = [];
  // continue adding here...
  return bricks;
}
```

This `bricksLayout` holds all the information we need: the width and height of a single brick, the number of rows and columns of bricks we will see on the screen, the top and left offset (the location on the canvas where we start to draw the bricks), and the padding between each row and column of bricks.

Now, let's start creating the bricks themselves. We can loop through the rows and columns to create a new brick on each iteration—add the following nested loop below the previous line of code:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX =
      c * (bricksLayout.width + bricksLayout.padding) +
      bricksLayout.offset.left;
    const brickY =
      r * (bricksLayout.height + bricksLayout.padding) +
      bricksLayout.offset.top;

    const newBrick = new Brick(
      "img/brick.png",
      ctx,
      brickX,
      brickY,
      bricksLayout.width,
      bricksLayout.height,
    );
    bricks.push(newBrick);
  }
}
```

Each `brickX` position is worked out as `bricksLayout.width` plus `bricksLayout.padding`, multiplied by the column number, `c`, plus the `bricksLayout.offset.left`; the logic for the `brickY` is identical except that it uses the values for row number, `r`, `bricksLayout.height`, and `bricksLayout.offset.top`. Now every single brick can be placed in its correct place, with padding between each brick, and drawn at an offset from the left and top Canvas edges.

Finally, we can draw these bricks to the screen inside the `draw()` function. Add the following below the `paddle.draw()` call:

```js
for (const brick of bricks) {
  brick.draw();
}
```

If you reload `index.html` at this point, you should see the bricks printed on screen, at an even distance from one another.

## Brick/Ball collision detection

Now onto the next challenge—the collision detection between the ball and the bricks. Luckily enough, we already implemented a very generic collision system, so we can simply wire our bricks to it.

First, register each brick as a collider, right below the `initBricks()` call:

```js
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}
```

Add a `onCollide()` method to each brick, which removes itself from the `bricks` and `colliders` collections:

```js
class Brick extends GameObject {
  // …
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}
```

The brick needs to be gone as soon as possible, so that the ball doesn't bounce off it.

And that's it! Reload your code, and you should see the new collision detection working just as required.

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
  touch-action: none;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let lastTimestamp = null;

const baseWallHitbox = {
  left: -Infinity,
  right: Infinity,
  top: -Infinity,
  bottom: Infinity,
};

const colliders = [
  { hitbox: { ...baseWallHitbox, right: 0 } },
  { hitbox: { ...baseWallHitbox, left: canvas.width } },
  { hitbox: { ...baseWallHitbox, bottom: 0 } },
];

class GameObject {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origin = { x: 0.5, y: 0.5 };
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
  get hitbox() {
    const left = this.pos.x - this.size.w * this.origin.x;
    const top = this.pos.y - this.size.h * this.origin.y;
    return {
      left,
      right: left + this.size.w,
      top,
      bottom: top + this.size.h,
    };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top);
  }
  onCollide() {}
}

class Ball extends GameObject {
  pos = { x: undefined, y: undefined };
  vel = { x: 0.15, y: -0.15 };
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
  onCollide({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
  }
}

class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}

class Brick extends GameObject {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top, this.size.w, this.size.h);
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const paddle = new Paddle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
colliders.push(paddle);
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}

canvas.addEventListener("pointermove", (event) => {
  if (paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});

Promise.all([ball, paddle].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(draw);
});

function draw(timestamp) {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (lastTimestamp !== null) {
    const dt = timestamp - lastTimestamp;
    moveBall(dt);
  }
  lastTimestamp = timestamp;
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }

  requestAnimationFrame(draw);
}

function getCollision(moving, velocity, obstacle, dt) {
  const width = moving.right - moving.left;
  const height = moving.bottom - moving.top;
  const movingPos = { x: moving.left, y: moving.top };
  const left = obstacle.left - width;
  const right = obstacle.right;
  const top = obstacle.top - height;
  const bottom = obstacle.bottom;
  const hit = { time: dt, x: null, y: null };

  function checkFace(axis, coordinate, min, max, direction) {
    if (velocity[axis] * direction <= 0) {
      return;
    }
    const time = (coordinate - movingPos[axis]) / velocity[axis];
    if (time < 0 || time > hit.time) {
      return;
    }
    const otherAxis = axis === "x" ? "y" : "x";
    const otherPosition = movingPos[otherAxis] + velocity[otherAxis] * time;
    if (otherPosition < min || otherPosition > max) {
      return;
    }
    if (time < hit.time) {
      hit.x = null;
      hit.y = null;
    }
    hit.time = time;
    hit[axis] = coordinate;
  }

  checkFace("x", left, top, bottom, 1);
  checkFace("x", right, top, bottom, -1);
  checkFace("y", top, left, right, 1);
  checkFace("y", bottom, left, right, -1);

  return hit.x === null && hit.y === null ? null : hit;
}

function moveBall(dt) {
  while (dt > 0) {
    // Avoid repeatedly triggering the getter
    const ballHitbox = ball.hitbox;
    let hitTime = dt;
    let hitX = null;
    let hitY = null;
    let contacts = [];

    for (const collider of colliders) {
      const hit = getCollision(ballHitbox, ball.vel, collider.hitbox, hitTime);
      if (hit === null) {
        continue;
      }
      if (hit.time < hitTime) {
        hitX = null;
        hitY = null;
        contacts = [];
      }
      hitTime = hit.time;
      hitX = hit.x ?? hitX;
      hitY = hit.y ?? hitY;
      contacts.push({ collider, hit });
    }

    ball.move(hitTime);
    dt -= hitTime;

    const ballIsOutOfBounds = ball.hitbox.bottom > canvas.height;
    if (ballIsOutOfBounds) {
      // Game over logic
      location.reload();
    }

    if (contacts.length === 0) {
      break;
    }
    // Snap the position to the point of contact to avoid floating point errors
    if (hitX !== null) {
      ball.pos.x = hitX + ball.size.w / 2;
    }
    if (hitY !== null) {
      ball.pos.y = hitY + ball.size.h / 2;
    }

    ball.onCollide({ x: hitX !== null, y: hitY !== null });
    for (const { collider, hit } of contacts) {
      collider.onCollide?.({ x: hit.x !== null, y: hit.y !== null });
    }
  }
}

function initBricks() {
  const bricksLayout = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  const bricks = [];
  for (let c = 0; c < bricksLayout.count.col; c++) {
    for (let r = 0; r < bricksLayout.count.row; r++) {
      const brickX =
        c * (bricksLayout.width + bricksLayout.padding) +
        bricksLayout.offset.left;
      const brickY =
        r * (bricksLayout.height + bricksLayout.padding) +
        bricksLayout.offset.top;

      const newBrick = new Brick(
        "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png",
        ctx,
        brickX,
        brickY,
        bricksLayout.width,
        bricksLayout.height,
      );
      bricks.push(newBrick);
    }
  }
  return bricks;
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

We can hit the bricks and remove them, which is a nice addition to the gameplay already. It would be even better to count the destroyed bricks and increment [the score](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win) as a result.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}
