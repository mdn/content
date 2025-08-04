---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}

This is the **15th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). Instead of starting the game right away, we can leave that decision to the player by adding a Start button they can press. Let's investigate how to do that.

## New properties

We will need a property to store a boolean value representing whether the game is currently being played or not, and another one to represent our button. Add these lines below your other properties definitions:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  playing = false;
  startButton;
  // ... rest of the class ...
}
```

## Loading the button spritesheet

We can load the button spritesheet the same way we loaded the ball's wobble animation. Add the following to the bottom of the `preload()` method:

```js
this.load.spritesheet("button", "img/button.png", {
  frameWidth: 120,
  frameHeight: 40,
});
```

A single button frame is 120 pixels wide and 40 pixels high.

You also need to [grab the button spritesheet](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png), and save it in your `/img` directory.

## Adding the button to the game

Adding the new button to the game is done by using the `add.sprite` method. Add the following lines to the bottom of your `create()` method:

```js
this.startButton = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "button",
  0,
);
```

In addition to the parameters we passed to the other `add.sprite` calls (such as when we added the ball and paddle), this time we also pass the frame number, which is `0` in this case. This means that the first frame of the spritesheet will be used for the button's initial appearance.

To make the button respond to various inputs such as mouse clicks, we need to add the following lines right after the previous `add.sprite` call:

```js
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
```

First, we call `setInteractive` on the button to make it respond to pointer events. Then we add the four event listeners to the button:

- `pointerover`—when the pointer is over the button, we change the button's frame to `1`, the second frame of the spritesheet.
- `pointerdown`—when the button is pressed, we change the button's frame to `2`, the third frame of the spritesheet.
- `pointerout`—when the pointer moves out of the button, we change the button's frame back to `0`, the first frame of the spritesheet.
- `pointerup`—when the button is released, we call the `startGame` method to start the game.

Now, we need to define the `startGame()` method referenced in the code above:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
  }
}
```

When the button is pressed, we remove the button, set the ball's initial velocity, and set the `playing` property to `true`.

Finally for this section, go back into your `create` method, find the `this.ball.body.setVelocity(150, -150);` line, and remove it. You only want the ball to move when the button is pressed, not before!

## Keeping the paddle still before the game starts

It works as expected, but we can still move the paddle when the game hasn't started yet, which looks a bit silly. To stop this, we can take advantage of the `playing` property and make the paddle movable only when the game has started. To do that, adjust the `update()` method like so:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }
    // ...
  }
  // ...
}
```

That way the paddle is immovable after everything is loaded and prepared, but before the start of the actual game.

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
    this.physics.world.checkCollision.down = false;

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

    this.initBricks();

    const textStyle = { font: "18px Arial", fill: "#0095dd" };
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
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

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
    if (this.bricks.countActive() === 0) {
      alert("You won the game, congratulations!");
      location.reload();
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
      // Game over logic
      location.reload();
    }
  }
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

The last thing we will do in this article series is make the gameplay even more interesting by adding some [randomization](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay) to the way the ball bounces off the paddle.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}
