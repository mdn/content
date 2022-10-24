---
title: Randomizing gameplay
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
tags:
  - 2D
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - Phaser
  - Tutorial
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

This is the **16th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson16.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson16.html).

Our game appears to be completed, but if you look close enough you'll notice that the ball is bouncing off the paddle at the same angle throughout the whole game. This means that every game is quite similar. To fix this and improve playability we should make the rebound angles more random, and in this article we'll look at how.

## Making rebounds more random

We can change the ball's velocity depending on the exact spot it hits the paddle, by modifying the `x` velocity each time the `ballHitPaddle()` function is run using a line along the lines of the below. Add this new line to your code now, and try it out.

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
  ball.body.velocity.x = -5 * (paddle.x - ball.x);
}
```

It's a little bit of magic — the new velocity is higher, the larger the distance between the center of the paddle and the place where the ball hits it. Also, the direction (left or right) is determined by that value — if the ball hits the left side of the paddle it will bounce left, whereas hitting the right side will bounce it to the right. It ended up that way because of a little bit of experimentation with the given values, you can do your own experimentation and see what happens. It's not completely random of course, but it does make the gameplay a bit more unpredictable and therefore more interesting.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3yds5ege/","","400")}}

## Summary

You've finished all the lessons — congratulations! By this point you would have learnt the basics of Phaser and the logic behind simple 2D games.

### Exercises to follow

You can do a lot more in the game — add whatever you feel would be best to make it more fun and interesting. It's a basic intro scratching the surface of the countless helpful methods that Phaser provides. Below are some suggestions as to how you could expand our little game, to get you started:

- Add a second ball or paddle.
- Change the color of the background on every hit.
- Change the images and use your own.
- Grant extra bonus points if bricks are destroyed rapidly, several-in-a-row (or other bonuses of your choosing.)
- Create levels with different brick layouts.

Be sure to check the ever-growing list of [examples](https://phaser.io/examples) and the [official documentation](https://phaser.io/docs/), and visit the [HTML5 Gamedevs forums](https://www.html5gamedevs.com/forum/14-phaser-2/) if you ever need any help.

You could also go back to [this tutorial series' index page](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser).

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
