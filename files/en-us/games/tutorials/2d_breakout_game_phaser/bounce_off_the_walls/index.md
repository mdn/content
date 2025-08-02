---
title: Bounce off the walls
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}

This is the **6th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). Now that physics have been introduced, we can start implementing collision detection into the game—first we'll look at the walls.

## Bouncing off the world boundaries

The easiest way to get our ball bouncing off the walls is to tell the framework that we want to treat the boundaries of the {{htmlelement("canvas")}} element as walls and not let the ball move past them. In Phaser this can be easily accomplished using the `setCollideWorldBounds()` method. Add this line right after the existing `this.ball.body.setVelocity()` method call:

```js
this.ball.body.setCollideWorldBounds(true, 1, 1);
```

The `true` tells Phaser to enable collision detection with the world bounds, while the two `1`s are the bounce factor on the x and y axes, respectively. This means that when the ball hits a wall, it will bounce back with the same speed it had before hitting the wall. Try reloading index.html again—now you should see the ball bouncing off all the walls and moving inside the canvas area.

## Compare your code

Here's what you should have so far, running live. To view its source code, click the "Play" button.

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
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
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

This is starting to look more like a game now, but we can't control it in any way—it's high time we introduced the [player paddle and controls](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}
