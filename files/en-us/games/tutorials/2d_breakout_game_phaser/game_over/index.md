---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
tags:
  - 2D
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - Phaser
  - Tutorial
  - game over
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

This is the **8th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html).

To make the game more interesting we can introduce the ability to lose — if you don't hit the ball before it reaches the bottom edge of the screen it will be game over.

## How to lose

To provide the ability to lose, we will disable the ball's collision with the bottom edge of the screen. Add the code below inside the `create()` function; just after you define the ball's attributes is fine:

```js
game.physics.arcade.checkCollision.down = false;
```

This will make the three walls (top, left and right) bounce the ball back, but the fourth (bottom) will disappear, letting the ball fall off the screen if the paddle misses it. We need a way to detect this and act accordingly. Add the following lines just below the previous new one:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(() => {
  alert("Game over!");
  location.reload();
}, this);
```

Adding those lines will make the ball check the world (in our case canvas) bounds and execute the function bound to the `onOutOfBounds` event. When you click on the resulting alert, the page will be reloaded so you can play again.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Next steps

Now the basic gameplay is in place let's make it more interesting by introducing bricks to smash — it's time to [build the brick field](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
