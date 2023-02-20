---
title: Bounce off the walls
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
tags:
  - 2D
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - Phaser
  - Tutorial
  - bouncing
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

This is the **6th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html).

Now that physics have been introduced, we can start implementing collision detection into the game — first we'll look at the walls.

## Bouncing off the world boundaries

The easiest way to get our ball bouncing off the walls is to tell the framework that we want to treat the boundaries of the {{htmlelement("canvas")}} element as walls and not let the ball move past them. In Phaser this can be easily accomplished using the `collideWorldsBound` property. Add this line right after the existing `game.physics.enable()` method call:

```js
ball.body.collideWorldBounds = true;
```

Now the ball will stop at the edge of the screen instead of disappearing, but it doesn't bounce. To make this occur we have to set its bounciness. Add the following line below the previous one:

```js
ball.body.bounce.set(1);
```

Try reloading index.html again — now you should see the ball bouncing off all the walls and moving inside the canvas area.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## Next steps

This is starting to look more like a game now, but we can't control it in any way — it's high time we introduced the [player paddle and controls](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
