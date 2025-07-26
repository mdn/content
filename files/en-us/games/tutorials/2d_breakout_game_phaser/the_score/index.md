---
title: The score
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

This is the **11th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson11.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson11.html).

Having a score can also make the game more interesting — you can try to beat your own high score, or your friend's. In this article we'll add a scoring system to our game.

We will use a separate property for storing the score and Phaser's `text` method to print it out onto the screen.

## New variables

Add two new variables right after the previously defined ones:

```js
class Example extends Phaser.Scene {
  // ... previous property definitions ...
  scoreText;
  score = 0;
  // ... rest of the class ...
}
```

## Adding score text to the game display

Now add this line at the end of the `create` method:

```js
this.scoreText = this.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  color: "#0095DD",
});
```

The `text` method can take four parameters:

- The x and y coordinates to draw the text at.
- The actual text that will be rendered.
- The font style to render the text with.

The last parameter looks very similar to CSS styling. In our case the score text will be blue, sized at 18 pixels, and use the Arial font.

## Updating the score when bricks are destroyed

We will increase the number of points every time the ball hits a brick and update the `scoreText` to display the current score. This can be done using the `setText` method — add the two new lines seen below to the `hitBrick` method:

```js
hitBrick (ball, brick) {
  brick.destroy();
  this.score += 10;
  this.scoreText.setText(`Points: ${this.score}`);
}
```

That's it for now — reload your `index.html` and check that the score updates on every brick hit.

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
  scoreText;
  score = 0;

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

    this.scoreText = this.add.text(5, 5, "Points: 0", {
      font: "18px Arial",
      color: "#0095DD",
    });
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, this.hitBrick.bind(this));

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
    this.score += 10;
    this.scoreText.setText(`Points: ${this.score}`);
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

We now have a scoring system, but what's the point of playing and keeping score if you can't win? Let's see how we can add a victory state, allowing us to [win the game](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
