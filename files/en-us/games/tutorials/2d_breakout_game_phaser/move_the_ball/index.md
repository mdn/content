---
title: Move the ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}

This is the **4th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson04.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson04.html).

We have our blue ball printed on screen, but it's doing nothing — It would be cool to make it move somehow. This article covers how to do just that.

## Updating the ball's position on each frame

Remember the `update()` function and its definition? The code inside it is executed on every frame, so it's a perfect place to put the code that will update the ball's position on screen. Add the following new lines of the code inside `update()`, as shown:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

The code above adds 1 to the `x` and `y` properties representing the ball coordinates on the canvas, on each frame. Reload index.html and you should see the ball rolling across the screen.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/g1cfp0vv/","","400")}}

## Next steps

The next step is to add some basic collision detection, so our ball can bounce off the walls. This would take several lines of code — a significantly more complex step than we have seen so far, especially if we want to add paddle and brick collisions too — but fortunately Phaser allows us to do this much more easily than if we wanted to use pure JavaScript.

In any case, before we do all that we will first introduce Phaser's [physics](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) engines, and do some setup work.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}
