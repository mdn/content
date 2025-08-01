---
title: Collision detection
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}

This is the **10th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson10.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson10.html).

Now onto the next challenge — the collision detection between the ball and the bricks. Luckily enough we can use the physics engine to check collisions not only between single objects (like the ball and the paddle), but also between an object and the group.

## Brick/Ball collision detection

The physics engine makes everything a lot easier — we just need to add two simple pieces of code. First, add a new line inside your `update` method that detects a collision between the ball and bricks, as shown below:

```js
class Example extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, this.hitBrick);
    paddle.x = game.input.x || game.world.width * 0.5;
  }
  // ...
}
```

The ball's position is calculated against the positions of all the bricks in the group. The third, optional parameter is the function executed when a collision occurs — `hitBrick`. Create this new function as the last method of the `Example` class, just before the closing brace `}`, as follows:

```js
class Example extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
  }
  // ...
}
```

And that's it! Reload your code and you should see the new collision detection working just as required.

Thanks to Phaser there are two parameters passed to the function — the first one is the ball, which we explicitly passed to the collide method, and the second one is the single brick from the bricks group that the ball is colliding with. Inside the function we remove the brick in question from the screen by running the `destroy` method on it.

You would expect to have to write a lot more calculations of your own to implement collision detection when using [pure JavaScript](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection). That's the beauty of using the framework — you can leave a lot of boring code to Phaser, and focus on the most fun and interesting parts of making a game.

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
  paddle;
  bricks;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
  }
  create() {
    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, -150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);

    this.physics.world.checkCollision.down = false;
    this.ball.body.onWorldBounds = true;

    this.initBricks();
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, this.hitBrick);

    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      alert("Game over!");
      location.reload();
    }
  }

  initBricks() {
    const bricksLayout = {
      width: 50,
      height: 20,
      count: {
        row: 3,
        col: 7,
      },
      offset: {
        top: 50,
        left: 60,
      },
      padding: 10,
    };

    this.bricks = this.add.group();
    for (let c = 0; c < bricksLayout.count.col; c++) {
      for (let r = 0; r < bricksLayout.count.row; r++) {
        const brickX =
          c * (bricksLayout.width + bricksLayout.padding) +
          bricksLayout.offset.left;
        const brickY =
          r * (bricksLayout.height + bricksLayout.padding) +
          bricksLayout.offset.top;

        const newBrick = this.add.sprite(brickX, brickY, "brick");
        this.physics.add.existing(newBrick);
        newBrick.body.setImmovable(true);
        this.bricks.add(newBrick);
      }
    }
  }

  hitBrick(ball, brick) {
    brick.destroy();
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
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{embedlivesample("final", "", "480px")}}

## Next steps

We can hit the bricks and remove them, which is a nice addition to the gameplay already. It would be even better to count the destroyed bricks increment [the score](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) as a result.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}
