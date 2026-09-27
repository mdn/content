---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens")}}

This is the **8th step** out of 11 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). In this article, we'll implement a lives system, so that the player can continue playing until they have lost three lives, not just one, which makes the game enjoyable for longer.

## New variables

Add two new variables below `let score = 0;` to store the number of lives and whether to display the life lost message:

```js
let lives = 3;
let showLifeLostText = false;
```

## Drawing the text labels

Drawing the texts looks like something we already did in the [Track the score and win](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win) lesson. Replace `drawScore()` with a `drawStatus()` function that draws the score, the remaining lives, and a message when the player loses a life:

```js
function drawStatus() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Points: ${score}`, 5, 5);

  ctx.textAlign = "right";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 5, 5);

  if (showLifeLostText) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Life lost, click to continue",
      canvas.width / 2,
      canvas.height / 2,
    );
  }
}
```

The three labels share the same font and color. We use `textAlign` and `textBaseline` to position the score at the top left, the lives at the top right, and the life lost message in the center (if `showLifeLostText` is `true`).

In `update()`, replace the `drawScore()` call with `drawStatus()`.

## The lives handling code

To implement lives in our game, let's first change the behavior when the ball gets out of bounds. Instead of restarting right away:

```js
if (ballIsOutOfBounds) {
  // Game over logic
  location.reload();
  return;
}
```

We will call a new function called `ballLeaveScreen()`; delete the previous lines (shown above) and replace it with the following line:

```js
if (ballIsOutOfBounds) {
  ballLeaveScreen();
  return;
}
```

The `return` stops processing the remaining movement and collisions for this frame after the ball leaves the screen.

We want to decrease the number of lives every time the ball leaves the canvas. Add the `ballLeaveScreen()` function to your code:

```js
function ballLeaveScreen() {
  lives--;
  if (lives === 0) {
    // Game over logic
    location.reload();
    return;
  }

  paddle.pos.x = canvas.width / 2;
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  ball.vel = { x: 0, y: 0 };
  showLifeLostText = true;
  canvas.addEventListener(
    "pointerdown",
    () => {
      showLifeLostText = false;
      ball.vel = { x: 0.15, y: -0.15 };
      lastTimestamp = null;
    },
    { once: true },
  );
}
```

Instead of instantly printing out the alert when you lose a life, we first subtract one life from the current number and check if it's a non-zero value. If yes, then the player still has some lives left and can continue to play—they will see the life lost message, the ball and paddle positions will be reset on the screen, and on the next input (click or touch) the message will be hidden and the ball will start to move again.

When the number of available lives reaches zero, the game is over, and the game over alert message will be shown.

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
let lives = 3;
let showLifeLostText = false;

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

Promise.all([ball, paddle, ...bricks].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(update);
});

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  moveBall(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }
  drawStatus();

  if (bricks.length === 0) {
    alert("You won the game, congratulations!");
    location.reload();
    return;
  }

  requestAnimationFrame(update);
}

function drawStatus() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Points: ${score}`, 5, 5);

  ctx.textAlign = "right";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 5, 5);

  if (showLifeLostText) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Life lost, click to continue",
      canvas.width / 2,
      canvas.height / 2,
    );
  }
}

function ballLeaveScreen() {
  lives--;
  if (lives === 0) {
    // Game over logic
    location.reload();
    return;
  }

  paddle.pos.x = canvas.width / 2;
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  ball.vel = { x: 0, y: 0 };
  showLifeLostText = true;
  canvas.addEventListener(
    "pointerdown",
    () => {
      showLifeLostText = false;
      ball.vel = { x: 0.15, y: -0.15 };
      lastTimestamp = null;
    },
    { once: true },
  );
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
      ballLeaveScreen();
      return;
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

Lives made the game more forgiving—if you lose one life, you still have two more left and can continue to play. Now let's expand the look and feel of the game by adding [animations and tweens](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens")}}
