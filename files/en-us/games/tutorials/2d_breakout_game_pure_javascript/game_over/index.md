---
title: Game over
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}

This is the **5th step** out of 11 of the [creating a Breakout game in pure JavaScript tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). To make the game more interesting, we can introduce the ability to lose—if you don't hit the ball before it reaches the bottom edge of the screen, it will be game over.

## How to lose

To provide the ability to lose, we will disable the ball's collision with the bottom edge of the screen. Remove the last entry, `{ hitbox: { ...baseWallHitbox, top: canvas.height } }`, from the `colliders` list.

This will make the three walls (top, left, and right) bounce the ball back, but the fourth (bottom) will disappear, letting the ball fall off the screen if the paddle misses it. We need a way to detect this and act accordingly. Add the following lines to `moveBall()`, right after `dt -= hitTime`:

```js
const ballIsOutOfBounds = ball.hitbox.bottom > canvas.height;
if (ballIsOutOfBounds) {
  // Game over logic
  alert("Game over!");
  location.reload();
}
```

Adding those lines will check if the ball sticks out of the world (in our case, the canvas) bounds and then show an alert. When you click on the resulting alert, the page will reload, allowing you to play again.

> [!NOTE]
> The UX here is quite sketchy because [`alert()`](/en-US/docs/Web/API/Window/alert) shows a system dialog and blocks the game. In a real game, you would probably want to design your own modal dialog using {{HTMLElement("dialog")}}.
>
> Also, we will later add a ["Start" button](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons), but here our game starts immediately when the page loads, so you may "lose" before you even start playing. To prevent the annoying dialog, we will remove the `alert()` call from now on.

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

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const paddle = new Paddle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
colliders.push(paddle);

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
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

Now the basic gameplay is in place, let's make it more interesting by introducing bricks to smash—it's time to [build the brick field](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}
