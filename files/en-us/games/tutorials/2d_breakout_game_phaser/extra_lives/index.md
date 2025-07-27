---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

This is the **13th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson13.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson13.html).

We can make the game enjoyable for longer by adding lives. In this article we'll implement a lives system, so that the player can continue playing until they have lost three lives, not just one.

## New properties

Add the following new properties below the existing ones in your code:

```js
class Example extends Phaser.Scene {
  // ... previous property definitions ...
  lives = 3;
  livesText;
  lifeLostText;
  // ... rest of the class ...
}
```

These respectively will store the number of lives, the text label that displays the number of remaining lives, and a text label that will be shown on the screen when the player loses one of their lives.

## Defining the new text labels

Defining the texts look like something we already did in [the score](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) lesson. Add the following lines below the existing `scoreText` definition inside your `create` method:

```js
this.livesText = this.add.text(
  this.scale.width - 5,
  5,
  `Lives: ${this.lives}`,
  { font: "18px Arial", fill: "#0095DD" },
);
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095DD" },
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

The `this.livesText` and `this.lifeLostText` objects look very similar to the `this.scoreText` one — they define a position on the screen, the actual text to display, and the font styling. The former is anchored on its top right edge to align properly with the screen, and the latter is centered, both using `setOrigin`.

The `lifeLostText` will be shown only when the life is lost, so its visibility is initially set to `false`.

### Making our text styling DRY

As you probably noticed we're using the same styling for all three texts: `scoreText`, `livesText` and `lifeLostText`. If we ever want to change the font size or color we will have to do it in multiple places. To make it easier for us to maintain in the future we can create a separate variable that will hold our styling, let's call it `textStyle` and place it before the text definitions:

```js
const textStyle = { font: "18px Arial", fill: "#0095DD" };
```

We can now use this variable when styling our text labels — update your code so that the multiple instances of the text styling are replaced with the variable:

```js
this.scoreText = this.add.text(5, 5, "Points: 0", textStyle);

this.livesText = this.add.text(
  this.scale.width - 5,
  5,
  `Lives: ${this.lives}`,
  textStyle,
);
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "Life lost, click to continue",
  textStyle,
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

This way changing the font in one variable will apply the changes to every place it is used.

## The lives handling code

To implement lives in our game, let's first change the behavior when the ball gets out of bounds. Instead of showing the alert right away:

```js
const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
  this.physics.world.bounds,
  this.ball.getBounds(),
);
if (ballIsOutOfBounds) {
  alert("Game over!");
  location.reload();
}
```

We will assign a new function called `ballLeaveScreen`; delete the previous lines (shown above) and replace it with the following line:

```js
const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
  this.physics.world.bounds,
  this.ball.getBounds(),
);
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

We want to decrease the number of lives every time the ball leaves the canvas. Add the `ballLeaveScreen()` method definition at the end of the `Example` class:

```js
ballLeaveScreen () {
  this.lives--;
  if (this.lives > 0) {
    this.livesText.setText(`Lives: ${this.lives}`);
    this.lifeLostText.visible = true;
    this.ball.body.reset(this.scale.width * 0.5, this.scale.height - 25);
    this.input.once("pointerdown", () => {
      this.lifeLostText.visible = false;
      this.ball.body.setVelocity(150, -150);
    }, this);
  } else {
    alert("Game over!");
    location.reload();
  }
}
```

Instead of instantly printing out the alert when you lose a life, we first subtract one life from the current number and check if it's a non-zero value. If yes, then the player still has some lives left and can continue to play — they will see the life lost message, the ball and paddle positions will be reset on screen and on the next input (click or touch) the message will be hidden and the ball will start to move again.

When the number of available lives reaches zero, the game is over and the game over alert message will be shown.

## Events

TODO: Describe `once` and `on` methods.
You have probably noticed the `once()` method call in the above two code blocks and wondered what it is. In our case, on every `outOfBounds` event the `ballLeaveScreen` will be executed, but when the ball leaves the screen we only want to remove the message from the screen once.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Next steps

Lives made the game more forgiving — if you lose one life, you still have two more left and can continue to play. Now let's expand the look and feel of the game by adding [animations and tweens](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
