---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
tags:
  - Beginner
  - Canvas
  - Games
  - Graphics
  - JavaScript
  - Tutorial
  - game over
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

This is the **5th step** out of 10 of the [Gamedev Canvas tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). You can find the source code as it should look after completing this lesson at [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

It's fun to watch the ball bouncing off the walls and be able to move the paddle around, but other than that the game does nothing and doesn't have any progression or end goal. It would be good from the gameplay point of view to be able to lose. The logic behind losing in breakout is simple. If you miss the ball with the paddle and let it reach the bottom edge of the screen, then it's game over.

## Implementing game over

Let's try to implement game over in our game. Here's the piece of code from the third lesson where we made the ball bounce off the walls:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Instead of allowing the ball to bounce off all four walls, let's only allow three now — left, top and right. Hitting the bottom wall will end the game. We'll edit the second if block so it's an if else block that will trigger our "game over" state upon the ball colliding with the bottom edge of the canvas. For now we'll keep it simple, showing an alert message and restarting the game by reloading the page.

First, replace where you initially called `setInterval()`

```js
setInterval(draw, 10);
```

with:

```js
const interval = setInterval(draw, 10);
```

Then replace the second if statement with the following:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
}
```

## Letting the paddle hit the ball

The last thing to do in this lesson is to create some kind of collision detection between the ball and the paddle, so it can bounce off it and get back into the play area. The easiest thing to do is to check whether the center of the ball is between the left and right edges of the paddle. Update the last bit of code you modified again, to the following:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
  }
}
```

If the ball hits the bottom edge of the Canvas we need to check whether it hits the paddle. If so, then it bounces off just like you'd expect; if not, then the game is over as before.

## Compare your code

Here's the working code for you to compare yours against:

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/L61c9y50/","","395")}}

> **Note:** Try making the ball move faster when it hits the paddle.

## Next steps

We're doing quite well so far and our game is starting to feel a lot more worth playing now that you can lose! But it is still missing something. Let's move on to the sixth chapter — [Build the brick field](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — and create some bricks for the ball to destroy.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
