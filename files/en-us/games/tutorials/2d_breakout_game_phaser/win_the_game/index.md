---
title: Win the game
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

This is the **12th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html).

Implementing winning in our game is quite easy: if you happen to destroy all the bricks, then you win.

## How to win?

Add the following new code into your `ballHitBrick()` function:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);

  let count_alive = 0;
  for (let i = 0; i < bricks.children.length; i++) {
    if (bricks.children[i].alive) {
      count_alive++;
    }
  }
  if (count_alive === 0) {
    alert("You won the game, congratulations!");
    location.reload();
  }
}
```

We loop through the bricks in the group using `bricks.children`, checking for the aliveness of each with each brick's `.alive()` method. If there are no more bricks left alive, then we show a winning message, restarting the game once the alert is dismissed.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Next steps

Both losing and winning are implemented, so the core gameplay of our game is finished. Now let's add something extra — we'll give the player three [lives](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives) instead of one.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
