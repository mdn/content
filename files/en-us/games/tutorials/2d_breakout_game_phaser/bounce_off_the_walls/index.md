---
title: Bounce off the walls
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

This is the **6th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson06.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson06.html).

Now that physics have been introduced, we can start implementing collision detection into the game — first we'll look at the walls.

## Bouncing off the world boundaries

The easiest way to get our ball bouncing off the walls is to tell the framework that we want to treat the boundaries of the {{htmlelement("canvas")}} element as walls and not let the ball move past them. In Phaser this can be easily accomplished using the `setCollideWorldBounds` method. Add this line right after the existing `this.ball.body.setVelocity` method call:

```js
this.ball.body.setCollideWorldBounds(true, 1, 1);
```

Try reloading index.html again — now you should see the ball bouncing off all the walls and moving inside the canvas area.

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
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, 150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
  }
  update() {}
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
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{embedlivesample("final", "", "480px")}}

## Next steps

This is starting to look more like a game now, but we can't control it in any way — it's high time we introduced the [player paddle and controls](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
