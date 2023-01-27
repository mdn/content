---
title: Track the score and win
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
tags:
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - Tutorial
  - scoring
  - winning
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

This is the **8th step** out of 10 of the [Gamedev Canvas tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). You can find the source code as it should look after completing this lesson at [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Destroying the bricks is really cool, but to be even more awesome the game could award points for every brick a user hits, and keep count of the total score.

## Counting the score

If you can see your score throughout the game, eventually you can impress your friends. You need a variable to record the score. Add the following into your JavaScript, after the rest of your variables:

```js
let score = 0;
```

You also need a `drawScore()` function, to create and update the score display. Add the following after the `collisionDetection()` function:

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}
```

Drawing text on a canvas is similar to drawing a shape. The font definition looks exactly like the one in CSS — you can set the size and font type in the {{domxref("CanvasRenderingContext2D.font","font()")}} method. Then use {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} to set the color of the font and {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} to set the actual text that will be placed on the canvas, and where it will be placed. The first parameter is the text itself — the code above shows the current number of points — and the last two parameters are the coordinates where the text will be placed on the canvas.

To award a score each time a brick is hit, add a line to the `collisionDetection()` function to increment the value of the score variable each time a collision is detected. Add the following highlighted line to your code:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
        }
      }
    }
  }
}
```

Calling `drawScore()` from the `draw()` function keeps the score up to date with every new frame — add the following line inside `draw()`, just below the `drawPaddle()` call:

```js
drawScore();
```

## Displaying a winning message when all bricks have been destroyed

Collecting the points works well, but you won't be adding them forever — what about when all the bricks have been destroyed? It's the main purpose of the game after all, so you should display a winning message if all available points have been collected. Add the following highlighted section into your `collisionDetection()` function:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}
```

Thanks to this, your users can actually win the game when they destroy all the bricks, which is quite important when it comes to games. The `document.location.reload()` function reloads the page and starts the game again once the alert button is clicked.

## Compare your code

The latest code looks (and works) like this, in case you want to compare and contrast it with yours:

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/b3z2Lpu9/","","395")}}

> **Note:** Try adding more points per brick hit, print out the number of collected points in the end game alert box.

## Next steps

The game looks pretty good at this point. In the next lesson you will broaden the game's appeal by adding [Mouse controls](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
