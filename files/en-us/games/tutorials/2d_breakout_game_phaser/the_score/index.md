---
title: The score
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

This is the **11th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html).

Having a score can also make the game more interesting — you can try to beat your own high score, or your friend's. In this article we'll add a scoring system to our game.

We will use a separate variable for storing the score and Phaser's `text()` method to print it out onto the screen.

## New variables

Add two new variables right after the previously defined ones:

```js
// …
let scoreText;
let score = 0;
```

## Adding score text to the game display

Now add this line at the end of the `create()` function:

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

The `text()` method can take four parameters:

- The x and y coordinates to draw the text at.
- The actual text that will be rendered.
- The font style to render the text with.

The last parameter looks very similar to CSS styling. In our case the score text will be blue, sized at 18 pixels, and use the Arial font.

## Updating the score when bricks are destroyed

We will increase the number of points every time the ball hits a brick and update the `scoreText` to display the current score. This can be done using the `setText()` method — add the two new lines seen below to the `ballHitBrick()` function:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);
}
```

That's it for now — reload your `index.html` and check that the score updates on every brick hit.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## Next steps

We now have a scoring system, but what's the point of playing and keeping score if you can't win? Let's see how we can add a victory state, allowing us to [win the game](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
