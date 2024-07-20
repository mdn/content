---
title: Finishing up
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
page-type: guide
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

This is the **10th and final step** of the [Gamedev Canvas tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). You can find the source code as it should look after completing this lesson at [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html).

There's always room for improvements in any game we write. For example, we can offer more than one life to the player. They could make a mistake or two and still be able to finish the game. We could also improve our code rendering.

## Giving the player some lives

Implementing lives is quite straightforward. Let's first add a variable to store the number of lives in the same place where we declared our other variables:

```js
let lives = 3;
```

Drawing the life counter looks almost the same as drawing the score counter — add the following function to your code, below the `drawScore()` function:

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
```

Instead of ending the game immediately, we will decrease the number of lives until they are no longer available. We can also reset the ball and the paddle positions when the player begins with their next life. So, in the `draw()` function replace the following three lines:

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
```

With this, we can add slightly more complex logic to it as given below:

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

Now, when the ball hits the bottom edge of the screen, we're subtracting one life from the `lives` variable. If there are no lives left, the game is lost; if there are still some lives left, then the position of the ball and the paddle are reset, along with the movement of the ball.

### Rendering the lives display

Now you need to add a call to `drawLives()` inside the `draw()` function and add it below the `drawScore()` call.

```js
drawLives();
```

## Improving rendering with requestAnimationFrame()

Now let's work on something that is not connected to the game mechanics, but to the way it is being rendered. {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} helps the browser render the game better than the fixed frame rate we currently have implemented using {{domxref("setInterval()")}}. Replace the following line:

```js
interval = setInterval(draw, 10);
```

with:

```js
draw();
```

and remove each instance of:

```js
clearInterval(interval); // Needed for Chrome to end game
```

Then, at the very bottom of the `draw()` function (just before the closing curly brace), add in the following line, which causes the `draw()` function to call itself over and over again:

```js
requestAnimationFrame(draw);
```

The `draw()` function is now getting executed again and again within a `requestAnimationFrame()` loop, but instead of the fixed 10 milliseconds frame rate, we are giving control of the frame rate back to the browser. It will sync the frame rate accordingly and render the shapes only when needed. This produces a more efficient, smoother animation loop than the older `setInterval()` method.

## Compare your code

That's all — the final version of the game is ready and set to go!

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Start game</button>
```

```css hidden
canvas {
  background: #eee;
}
button {
  display: block;
}
```

```js hidden
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let lives = 3;

let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

document.getElementById("runButton").addEventListener("click", function () {
  draw();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> **Note:**: Try changing the number of lives and the angle the ball bounces off the paddle.

## Game over - for now!

You've finished all the lessons - congratulations! By this point, you should now know the basics of canvas manipulation and the logic behind 2D games. Now it's a good time to learn some frameworks and continue game development. You can check out this series' counterpart, [2D breakout game using Phaser](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser) or the [Cyber Orb built in Phaser](/en-US/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation) tutorial. You can also look through the [Games section on MDN](/en-US/docs/Games) for inspiration and more knowledge.

You could also go back to [this tutorial series' index page](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Have fun coding!

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
