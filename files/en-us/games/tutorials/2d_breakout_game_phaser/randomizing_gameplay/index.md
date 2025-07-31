---
title: Randomizing gameplay
slug: Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay
page-type: guide
sidebar: games
---

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

This is the **16th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson16.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson16.html).

Our game appears to be completed, but if you look close enough you'll notice that the ball is bouncing off the paddle at the same angle throughout the whole game. This means that every game is quite similar. To fix this and improve playability we should make the rebound angles more random, and in this article we'll look at how.

## Making rebounds more random

We can change the ball's velocity depending on the exact spot it hits the paddle, by modifying the `x` velocity each time the `hitPaddle` method is run using a line along the lines of the below. Add this new line to your code now, and try it out.

```js
hitPaddle (ball, paddle) {
  this.ball.anims.play('wobble');
  ball.body.velocity.x = -5 * (paddle.x - ball.x);
}
```

It's a little bit of magic — the new velocity is higher, the larger the distance between the center of the paddle and the place where the ball hits it. Also, the direction (left or right) is determined by that value — if the ball hits the left side of the paddle it will bounce left, whereas hitting the right side will bounce it to the right. It ended up that way because of a little bit of experimentation with the given values, you can do your own experimentation and see what happens. It's not completely random of course, but it does make the gameplay a bit more unpredictable and therefore more interesting.

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

  lives = 3;
  livesText;
  lifeLostText;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
    this.load.spritesheet("wobble", "wobble.png", {
      frameWidth: 20,
      frameHeight: 20,
    });
    this.load.spritesheet("button", "button.png", {
      frameWidth: 120,
      frameHeight: 40,
    });
  }
  create() {
    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);
    this.ball.anims.create({
      key: "wobble",
      frameRate: 24,
      frames: this.anims.generateFrameNumbers("wobble", {
        frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
      }),
    });

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

    const textStyle = { font: "18px Arial", fill: "#0095DD" };
    this.scoreText = this.add.text(5, 5, "Points: 0", textStyle);

    this.livesText = this.add.text(
      this.scale.width - 5,
      5,
      `Lives: ${this.lives}`,
      textStyle,
    );
    this.livesText.setOrigin(1, 0);
    this.lifeLostText = this.add.text(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "Life lost, click to continue",
      textStyle,
    );
    this.lifeLostText.setOrigin(0.5, 0.5);
    this.lifeLostText.visible = false;

    this.startButton = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "button",
      0,
    );
    this.startButton.setInteractive();
    this.startButton.on(
      "pointerover",
      () => {
        this.startButton.setFrame(1);
      },
      this,
    );
    this.startButton.on(
      "pointerdown",
      () => {
        this.startButton.setFrame(2);
      },
      this,
    );
    this.startButton.on(
      "pointerout",
      () => {
        this.startButton.setFrame(0);
      },
      this,
    );
    this.startButton.on(
      "pointerup",
      () => {
        this.startGame();
      },
      this,
    );
  }
  update() {
    this.physics.collide(this.ball, this.paddle, this.hitPaddle.bind(this));
    this.physics.collide(this.ball, this.bricks, this.hitBrick.bind(this));

    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }

    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      this.ballLeaveScreen();
    }
  }

  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
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

  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
    ball.body.velocity.x = -5 * (paddle.x - ball.x);
  }

  hitBrick(ball, brick) {
    const destroyTween = this.tweens.add({
      targets: brick,
      ease: "Linear",
      repeat: 0,
      duration: 200,
      props: {
        scaleX: 0,
        scaleY: 0,
      },
      onComplete: () => {
        brick.destroy();
      },
    });
    destroyTween.play();
    this.score += 10;
    this.scoreText.setText(`Points: ${this.score}`);

    if (this.bricks.countActive() === 0) {
      alert("You won the game, congratulations!");
      location.reload();
    }
  }

  ballLeaveScreen() {
    this.lives--;
    if (this.lives > 0) {
      this.livesText.setText(`Lives: ${this.lives}`);
      this.lifeLostText.visible = true;
      this.ball.body.reset(this.scale.width * 0.5, this.scale.height - 25);
      this.input.once(
        "pointerdown",
        () => {
          this.lifeLostText.visible = false;
          this.ball.body.setVelocity(150, -150);
        },
        this,
      );
    } else {
      alert("Game over!");
      location.reload();
    }
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

## Summary

You've finished all the lessons — congratulations! By this point you would have learnt the basics of Phaser and the logic behind simple 2D games.

### Exercises to follow

You can do a lot more in the game — add whatever you feel would be best to make it more fun and interesting. It's a basic intro scratching the surface of the countless helpful methods that Phaser provides. Below are some suggestions as to how you could expand our little game, to get you started:

- Add a second ball or paddle.
- Change the color of the background on every hit.
- Change the images and use your own.
- Grant extra bonus points if bricks are destroyed rapidly, several-in-a-row (or other bonuses of your choosing.)
- Create levels with different brick layouts.

Be sure to check the ever-growing list of [examples](https://labs.phaser.io/) and the [official documentation](https://phaser.io/docs/), and visit the [Phaser Discourse forum](https://phaser.discourse.group/) if you ever need any help.

You could also go back to [this tutorial series' index page](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser).

{{Previous("Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
