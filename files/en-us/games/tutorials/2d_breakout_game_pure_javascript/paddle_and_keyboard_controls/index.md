---
title: Paddle and keyboard controls
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

This is the **4th step** out of 10 of the [Gamedev Canvas tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). You can find the source code as it should look after completing this lesson at [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

The ball is bouncing off the walls freely and you can watch it indefinitely, but currently there's no interactivity. It's not a game if you cannot control it! So let's add some user interaction: a controllable paddle.

## Defining a paddle to hit the ball

So, we need a paddle to hit the ball. Let's define a few variables for that. Add the following variables near the top of your code, beside your other variables:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Here we're defining the height and width of the paddle and its starting point on the `x` axis for use in calculations further on down the code. Let's create a function that will draw the paddle on the screen. Add the following just below your `drawBall()` function:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Allowing the user to control the paddle

We can draw the paddle wherever we want, but it should respond to the user's actions. It's time to implement some keyboard controls. We will need the following:

- Two variables for storing information on whether the left or right control button is pressed.
- Two event listeners for `keydown` and `keyup` events. We want to run some code to handle the paddle movement when the buttons are pressed.
- Two functions handling the `keydown` and `keyup` events the code that will be run when the buttons are pressed.
- The ability to move the paddle left and right

Pressed buttons can be defined and initialized with boolean variables like in the example. Add these lines somewhere near the rest of your variables:

```js
let rightPressed = false;
let leftPressed = false;
```

The default value for both is `false` because at the beginning the control buttons are not pressed. To listen for key presses, we will set up two event listeners. Add the following lines just above the `setInterval()` line at the bottom of your JavaScript:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

When the `keydown` event is fired on any of the keys on your keyboard (when they are pressed), the `keyDownHandler()` function will be executed. The same pattern is true for the second listener: `keyup` events will fire the `keyUpHandler()` function (when the keys stop being pressed). Add these to your code now, below the `addEventListener()` lines:

```js
function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}
```

When we press a key down, this information is stored in a variable. The relevant variable in each case is set to `true`. When the key is released, the variable is set back to `false`.

Both functions take an event as a parameter, represented by the `e` variable. From that you can get useful information: the `key` holds the information about the key that was pressed. Most browsers use `ArrowRight` and `ArrowLeft` for the left/right cursor keys, but we need to also include `Right` and `Left` checks to support IE/Edge browsers. If the left cursor is pressed, then the `leftPressed` variable is set to `true`, and when it is released, the `leftPressed` variable is set to `false`. The same pattern follows with the right cursor and the `rightPressed` variable.

### The paddle moving logic

We've now set up the variables for storing the info about the pressed keys, event listeners, and relevant functions. Next we'll get into the code to use all the things we just set up and to move the paddle on the screen. Inside the `draw()` function, we will check if the left or right cursor keys are pressed when each frame is rendered. Our code might look like this:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

If the left cursor is pressed, the paddle will move seven pixels to the left, and if the right cursor is pressed, the paddle will move seven pixels to the right. This currently works, but the paddle disappears off the edge of the canvas if we hold either key for too long. We could improve that and move the paddle only within the boundaries of the canvas by changing the code like this:

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

The `paddleX` position we're using will move between `0` on the left side of the canvas and `canvas.width-paddleWidth` on the right-hand side, which will work exactly as we want it to.

Add the above code block into the `draw()` function at the bottom, just above the closing curly brace.

The only thing left to do now is call the `drawPaddle()` function from within the `draw()` function, to actually print it on the screen. Add the following line inside your `draw()` function, just below the line that calls `drawBall()`:

```js
drawPaddle();
```

## Compare your code

See how your code compares to the live sample below:

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

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  x += dx;
  y += dy;
}

function startGame() {
  setInterval(draw, 10);
}

document.getElementById("runButton").addEventListener("click", function () {
  startGame();
  this.disabled = true;
});
```

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> Try making the paddle move faster or slower, or change its size.

## Next steps

Now we have something resembling a game. The only trouble now is that you can just continue hitting the ball with the paddle and there's no winning or losing implemented. This will all change in the fifth chapter, [Game over](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), when we start to add in an endgame state for our game.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
