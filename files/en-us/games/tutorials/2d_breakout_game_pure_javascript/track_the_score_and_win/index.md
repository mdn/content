---
title: Track the score and win
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives")}}

This is the **7th step** out of 11 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). In this article, we'll add a scoring system to our game. Having a score can make the game more interesting—you can try to beat your own high score, or your friend's. We also add a winning condition, which is if you happen to destroy all the bricks.

## Adding score text to the game display

Add a new variable right after `let lastTimestamp` to store the score:

```js
let score = 0;
```

Add a `drawScore()` function to draw the current score on the canvas:

```js
function drawScore() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.fillText(`Points: ${score}`, 5, 5);
}
```

The {{domxref("CanvasRenderingContext2D/fillText", "ctx.fillText()")}} method takes the text to render and the x and y coordinates to draw it at. In our case, the score text will be blue, sized at 18 pixels, and use the Arial font. Setting `textBaseline` to `"top"` positions the top of the text at the given y coordinate.

Call `drawScore()` inside `draw()`, after drawing the bricks:

```js
function draw(timestamp) {
  // ...
  for (const brick of bricks) {
    brick.draw();
  }
  drawScore();

  requestAnimationFrame(draw);
}
```

## Updating the score when bricks are destroyed

We will increase the number of points every time the ball hits a brick. Add `score += 10;` to the brick's existing `onCollide()` method, after removing the brick from the two arrays:

```js
class Brick extends GameObject {
  // ...
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
    score += 10;
  }
}
```

That's it for now—reload your `index.html` and check that the score updates on every brick hit.

## How to win?

Add the following new code into your `draw()` function, after the `drawScore()` call:

```js
if (bricks.length === 0) {
  alert("You won the game, congratulations!");
  location.reload();
}
```

If there are no more bricks, then we display the winning message, restarting the game once the alert is dismissed.

Also update the `while` condition in `moveBall()` to stop moving the ball as soon as the last brick is destroyed:

```js
function moveBall(dt) {
  while (dt > 0 && bricks.length > 0) {
    // ... existing movement and collision code ...
  }
}
```

This prevents the ball from falling out of bounds during the remaining time in the frame after the player has already won.

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
let score = 0;

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
    score += 10;
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
  drawScore();

  if (bricks.length === 0) {
    alert("You won the game, congratulations!");
    location.reload();
    return;
  }

  requestAnimationFrame(draw);
}

function drawScore() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.fillText(`Points: ${score}`, 5, 5);
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
  while (dt > 0 && bricks.length > 0) {
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

Both losing and winning are implemented, so the core gameplay of our game is finished. Now let's add something extra—we'll give the player three [lives](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives) instead of one.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives")}}
