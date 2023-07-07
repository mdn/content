---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

This is the **15th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html).

Instead of starting the game right away we can leave that decision to the player by adding a Start button they can press. Let's investigate how to do that.

## New variables

We will need a variable to store a boolean value representing whether the game is currently being played or not, and another one to represent our button. Add these lines below your other variable definitions:

```js
let playing = false;
let startButton;
```

## Loading the button spritesheet

We can load the button spritesheet the same way we loaded the ball's wobble animation. Add the following to the bottom of the `preload()` function:

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

A single button frame is 120 pixels wide and 40 pixels high.

You also need to [grab the button spritesheet from GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png), and save it in your `/img` directory.

## Adding the button to the game

Adding the new button to the game is done by using the `add.button` method. Add the following lines to the bottom of your `create()` function:

```js
startButton = game.add.button(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "button",
  startGame,
  this,
  1,
  0,
  2,
);
startButton.anchor.set(0.5);
```

The `button()` method's parameters are as follows:

- The button's x and y coordinates
- The name of the graphic asset to be displayed for the button
- A callback function that will be executed when the button is pressed
- A reference to `this` to specify the execution context
- The frames that will be used for the _over_, _out_ and _down_ events.

> **Note:** The over event is the same as hover, out is when the pointer moves out of the button and down is when the button is pressed.

Now we need to define the `startGame()` function referenced in the code above:

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

When the button is pressed, we remove the button, sets the ball's initial velocity and set the `playing` variable to `true`.

Finally for this section, go back into your `create()` function, find the `ball.body.velocity.set(150, -150);` line, and remove it. You only want the ball to move when the button is pressed, not before!

## Keeping the paddle still before the game starts

It works as expected, but we can still move the paddle when the game hasn't started yet, which looks a bit silly. To stop this, we can take advantage of the `playing` variable and make the paddle movable only when the game has started. To do that, adjust the `update()` function like so:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if (playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
}
```

That way the paddle is immovable after everything is loaded and prepared, but before the start of the actual game.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/","","400")}}

## Next steps

The last thing we will do in this article series is make the gameplay even more interesting by adding some [randomization](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) to the way the ball bounces off the paddle.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
