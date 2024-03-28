---
title: Collision detection
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}

This is the **10th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson10.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson10.html).

Now onto the next challenge — the collision detection between the ball and the bricks. Luckily enough we can use the physics engine to check collisions not only between single objects (like the ball and the paddle), but also between an object and the group.

## Brick/Ball collision detection

The physics engine makes everything a lot easier — we just need to add two simple pieces of code. First, add a new line inside your `update()` function that checks for collision detection between ball and bricks, as shown below:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

The ball's position is calculated against the positions of all the bricks in the group. The third, optional parameter is the function executed when a collision occurs — `ballHitBrick()`. Create this new function as the bottom of your code, just before the closing `</script>` tag, as follows:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
}
```

And that's it! Reload your code and you should see the new collision detection working just as required.

Thanks to Phaser there are two parameters passed to the function — the first one is the ball, which we explicitly defined in the collide method, and the second one is the single brick from the bricks group that the ball is colliding with. Inside the function we remove the brick in question from the screen by running the `kill()` method on it.

You would expect to have to write a lot more calculations of your own to implement collision detection when using [pure JavaScript](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection). That's the beauty of using the framework — you can leave a lot of boring code to Phaser, and focus on the most fun and interesting parts of making a game.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/wwneakwf/","","400")}}

## Next steps

We can hit the bricks and remove them, which is a nice addition to the gameplay already. It would be even better to count the destroyed bricks increment [the score](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) as a result.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}
