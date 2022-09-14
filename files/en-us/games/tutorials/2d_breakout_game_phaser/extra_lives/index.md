---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
tags:
  - 2D
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - Phaser
  - Tutorial
  - lives
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

This is the **13th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html).

We can make the game enjoyable for longer by adding lives. In this article we'll implement a lives system, so that the player can continue playing until they have lost three lives, not just one.

## New variables

Add the following new variables below the existing ones in your code:

```js
let lives = 3;
let livesText;
let lifeLostText;
```

These respectively will store the number of lives, the text label that displays the number of lives that remain, and a text label that will be shown on screen when the player loses one of their lives.

## Defining the new text labels

Defining the texts look like something we already did in [the score](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) lesson. Add the following lines below the existing `scoreText` definition inside your `create()` function:

```js
livesText = game.add.text(game.world.width - 5, 5, `Lives: ${lives}`, {
  font: "18px Arial",
  fill: "#0095DD",
});
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095DD" }
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

The `livesText` and `lifeLostText` objects look very similar to the `scoreText` one — they define a position on the screen, the actual text to display, and the font styling. The former is anchored on its top right edge to align properly with the screen, and the latter is centered, both using `anchor.set()`.

The `lifeLostText` will be shown only when the life is lost, so its visibility is initially set to `false`.

### Making our text styling DRY

As you probably noticed we're using the same styling for all three texts: `scoreText`, `livesText` and `lifeLostText`. If we ever want to change the font size or color we will have to do it in multiple places. To make it easier for us to maintain in the future we can create a separate variable that will hold our styling, let's call it `textStyle` and place it before the text definitions:

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

We can now use this variable when styling our text labels — update your code so that the multiple instances of the text styling are replaced with the variable:

```js
scoreText = game.add.text(5, 5, "Points: 0", textStyle);
livesText = game.add.text(
  game.world.width - 5,
  5,
  `Lives: ${lives}`,
  textStyle
);
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  textStyle
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

This way changing the font in one variable will apply the changes to every place it is used.

## The lives handling code

To implement lives in our game, let's first change the ball's function bound to the `onOutOfBounds` event. Instead of executing an anonymous function and showing the alert right away :

```js
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

We will assign a new function called `ballLeaveScreen`; delete the previous event handler (shown above) and replace it with the following line:

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

We want to decrease the number of lives every time the ball leaves the canvas. Add the `ballLeaveScreen()` function definition at the end of our code:

```js
function ballLeaveScreen() {
  lives--;
  if (lives) {
    livesText.setText(`Lives: ${lives}`);
    lifeLostText.visible = true;
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
    game.input.onDown.addOnce(() => {
      lifeLostText.visible = false;
      ball.body.velocity.set(150, -150);
    }, this);
  } else {
    alert("You lost, game over!");
    location.reload();
  }
}
```

Instead of instantly printing out the alert when you lose a life, we first subtract one life from the current number and check if it's a non-zero value. If yes, then the player still has some lives left and can continue to play — they will see the life lost message, the ball and paddle positions will be reset on screen and on the next input (click or touch) the message will be hidden and the ball will start to move again.

When the number of available lives reaches zero, the game is over and the game over alert message will be shown.

## Events

You have probably noticed the `add()` and `addOnce()` method calls in the above two code blocks and wondered how they differ. The difference is that the `add()` method binds the given function and causes it to be executed every time the event occurs, while `addOnce()` is useful when you want to have the bound function executed only once and then unbound so it is not executed again. In our case, on every `outOfBounds` event the `ballLeaveScreen` will be executed, but when the ball leaves the screen we only want to remove the message from the screen once.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Next steps

Lives made the game more forgiving — if you lose one life, you still have two more left and can continue to play. Now let's expand the look and feel of the game by adding [animations and tweens](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
