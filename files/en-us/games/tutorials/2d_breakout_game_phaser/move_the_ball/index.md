---
title: Move the ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}

This is the **4th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson04.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson04.html).

We have our blue ball printed on screen, but it's doing nothing — It would be cool to make it move somehow. This article covers how to do just that.

## Updating the ball's position on each frame

Remember the `update()` method and its definition? The code inside it is executed on every frame, so it's a perfect place to put the code that will update the ball's position on screen. Add the following new lines of the code inside `update()`, as shown:

```js
class Example extends Phaser.Scene {
  // ...

  update() {
    ball.x += 1;
    ball.y += 1;
  }
}
```

The code above adds 1 to the `x` and `y` properties representing the ball coordinates on the canvas, on each frame. Reload index.html and you should see the ball rolling across the screen.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

```html hidden live-sample__final
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden live-sample__final
* {
  padding: 0;
  margin: 0;
}
```

```js hidden live-sample__final
class Example extends Phaser.Scene {
  ball;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: Example,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eee",
};

const game = new Phaser.Game(config);
```

{{embedlivesample("final", "", "480px")}}

## Next steps

The next step is to add some basic collision detection, so our ball can bounce off the walls. This would take several lines of code — a significantly more complex step than we have seen so far, especially if we want to add paddle and brick collisions too — but fortunately Phaser allows us to do this much more easily than if we wanted to use pure JavaScript.

In any case, before we do all that we will first introduce Phaser's [physics](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) engines, and do some setup work.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Workflows/2D_Breakout_game_Phaser/Physics")}}
