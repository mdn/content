---
title: Randomizing gameplay
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay
page-type: guide
sidebar: games
---

{{Previous("Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons")}}

This is the **11th step** out of 11 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Our game appears to be completed, but if you look close enough, you'll notice that the ball is bouncing off the paddle at the same angle throughout the whole game. This means that every game is quite similar. To fix this and improve playability, we should make the rebound angles more random, and in this article we'll look at how.

## Making rebounds more random

We can change the ball's velocity depending on the exact spot it hits the paddle, by modifying the `x` velocity each time the paddle's `onCollide()` method is run using a line along the lines of the below. Add this new line to your code now, and try it out.

```js
class Paddle extends GameObject {
  // …
  onCollide() {
    ball.playWobble();
    ball.vel.x = -5 * (this.pos.x - ball.pos.x);
  }
}
```

It's a little bit of magic—the new velocity is higher, the larger the distance between the center of the paddle and the place where the ball hits it. Also, the direction (left or right) is determined by that value—if the ball hits the left side of the paddle, it will bounce left, whereas hitting the right side will bounce it to the right. It ended up that way because of a little bit of experimentation with the given values; you can do your own experimentation and see what happens. It's not completely random of course, but it does make the gameplay a bit more unpredictable and therefore more interesting.

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
let playing = false;
const buttonControls = new AbortController();
const disappearingBricks = [];

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
  size = { w: 20, h: 20 };
  wobbleFrames = [0, 1, 0, 2, 0, 1, 0, 2, 0];
  wobbleTime = null;
  pos = { x: undefined, y: undefined };
  vel = { x: 0, y: 0 };
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
  playWobble() {
    this.wobbleTime = 0;
  }
  updateAnimation(dt) {
    if (this.wobbleTime === null) {
      return;
    }
    this.wobbleTime += dt;
    if (this.wobbleTime >= this.wobbleFrames.length * (1 / 24)) {
      this.wobbleTime = null;
    }
  }
  draw() {
    const frame =
      this.wobbleTime === null
        ? 0
        : this.wobbleFrames[Math.floor(this.wobbleTime / (1 / 24))];
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      frame * this.size.w,
      0,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
  }
}

class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
  onCollide() {
    ball.playWobble();
    ball.vel.x = -5 * (this.pos.x - ball.pos.x);
  }
}

class Brick extends GameObject {
  shrinkTime = 0;
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const scale = 1 - Math.min(this.shrinkTime / 0.2, 1);
    const width = this.size.w * scale;
    const height = this.size.h * scale;
    this.ctx.drawImage(
      this.asset,
      this.pos.x - width / 2,
      this.pos.y - height / 2,
      width,
      height,
    );
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
    disappearingBricks.push(this);
    score += 10;
  }
}

class Button extends GameObject {
  size = { w: 120, h: 40 };
  frame = 0;
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 };
  }
  containsPointer(event) {
    const bounds = this.ctx.canvas.getBoundingClientRect();
    const x =
      ((event.clientX - bounds.left) * this.ctx.canvas.width) / bounds.width;
    const y =
      ((event.clientY - bounds.top) * this.ctx.canvas.height) / bounds.height;
    const { left, right, top, bottom } = this.hitbox;
    return x >= left && x <= right && y >= top && y <= bottom;
  }
  draw() {
    const columns = Math.floor(this.asset.width / this.size.w);
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      (this.frame % columns) * this.size.w,
      Math.floor(this.frame / columns) * this.size.h,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png",
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

const startButton = new Button(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png",
  ctx,
);

canvas.addEventListener("pointermove", (event) => {
  if (!playing || paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});

Promise.all(
  [ball, paddle, ...bricks, startButton].map((obj) => obj.preload()),
).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  initButtonControls();
  requestAnimationFrame(update);
});

function startGame() {
  buttonControls.abort();
  ball.vel = { x: 150, y: -150 };
  playing = true;
  lastTimestamp = null;
}

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  ball.updateAnimation(dt);
  for (let i = disappearingBricks.length - 1; i >= 0; i--) {
    const brick = disappearingBricks[i];
    brick.shrinkTime += dt;
    if (brick.shrinkTime >= 0.2) {
      disappearingBricks.splice(i, 1);
    }
  }
  moveBall(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }
  for (const brick of disappearingBricks) {
    brick.draw();
  }
  drawStatus();
  if (!playing) {
    startButton.draw();
  }

  if (bricks.length === 0 && disappearingBricks.length === 0) {
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
      ball.vel = { x: 150, y: -150 };
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

function initButtonControls() {
  const options = { signal: buttonControls.signal };
  let pressedPointer = null;

  function resetFrame(event) {
    if (pressedPointer === null || pressedPointer === event.pointerId) {
      startButton.frame = 0;
    }
  }
  function cancelPress(event) {
    if (event.pointerId === pressedPointer) {
      pressedPointer = null;
      resetFrame(event);
    }
  }

  canvas.addEventListener(
    "pointermove",
    (event) => {
      if (pressedPointer !== null && pressedPointer !== event.pointerId) {
        return;
      }
      if (startButton.containsPointer(event)) {
        startButton.frame = pressedPointer === null ? 1 : 2;
      } else {
        resetFrame(event);
      }
    },
    options,
  );
  canvas.addEventListener(
    "pointerdown",
    (event) => {
      if (
        event.button !== 0 ||
        pressedPointer !== null ||
        !startButton.containsPointer(event)
      ) {
        return;
      }
      pressedPointer = event.pointerId;
      startButton.frame = 2;
      canvas.setPointerCapture(event.pointerId);
    },
    options,
  );
  canvas.addEventListener(
    "pointerup",
    (event) => {
      if (event.pointerId !== pressedPointer) {
        return;
      }
      if (startButton.containsPointer(event)) {
        pressedPointer = null;
        startGame();
      } else {
        cancelPress(event);
      }
    },
    options,
  );
  canvas.addEventListener("pointerleave", resetFrame, options);
  canvas.addEventListener("pointercancel", cancelPress, options);
  canvas.addEventListener("lostpointercapture", cancelPress, options);
}
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Summary

You've finished all the lessons—congratulations! By this point you would have learned the basics of Phaser and the logic behind simple 2D games.

### Exercises to follow

You can do a lot more in the game—add whatever you feel would be best to make it more fun and interesting. Below are some suggestions as to how you could expand our little game, to get you started:

- Add a second ball or paddle.
- Change the color of the background on every hit.
- Change the images and use your own.
- Grant extra bonus points if bricks are destroyed rapidly, several-in-a-row (or other bonuses of your choosing).
- Create levels with different brick layouts.

You can even try to extract the reusable bits of this project and build a game engine of your own, just like [Phaser](https://docs.phaser.io/).

You could also go back to [this tutorial series' index page](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript).

{{Previous("Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons")}}
