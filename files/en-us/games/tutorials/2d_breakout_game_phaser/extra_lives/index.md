---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}

This is the **13th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). In this article we'll implement a lives system, so that the player can continue playing until they have lost three lives, not just one, which makes the game enjoyable for longer.

## New properties

Add the following new properties below the existing ones in your code:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  lives = 3;
  livesText;
  lifeLostText;
  // ... rest of the class ...
}
```

These respectively will store the number of lives, the text label that displays the number of remaining lives, and a text label that will be shown on the screen when the player loses one of their lives.

## Defining the new text labels

Defining the texts look like something we already did in [the score](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) lesson. Add the following lines below the existing `scoreText` definition inside your `create()` method:

```js
this.livesText = this.add.text(
  this.scale.width - 5,
  5,
  `Lives: ${this.lives}`,
  { font: "18px Arial", fill: "#0095dd" },
);
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095dd" },
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

The `this.livesText` and `this.lifeLostText` objects look very similar to the `this.scoreText` one—they define a position on the screen, the actual text to display, and the font styling. The former is anchored on its top right edge to align properly with the screen, and the latter is centered, both using `setOrigin`.

The `lifeLostText` will be shown only when the life is lost, so its visibility is initially set to `false`.

### Making our text styling DRY

As you probably noticed we're using the same styling for all three texts: `scoreText`, `livesText` and `lifeLostText`. If we ever want to change the font size or color we will have to do it in multiple places. To make it easier for us to maintain in the future we can create a separate variable that will hold our styling, let's call it `textStyle` and place it before the text definitions:

```js
const textStyle = { font: "18px Arial", fill: "#0095dd" };
```

We can now use this variable when styling our text labels—update your code so that the multiple instances of the text styling are replaced with the variable:

```js
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
```

This way changing the font in one variable will apply the changes to every place it is used.

## The lives handling code

To implement lives in our game, let's first change the behavior when the ball gets out of bounds. Instead of showing the alert right away:

```js
if (ballIsOutOfBounds) {
  alert("Game over!");
  location.reload();
}
```

We will call a new method called `ballLeaveScreen()`; delete the previous lines (shown above) and replace it with the following line:

```js
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

We want to decrease the number of lives every time the ball leaves the canvas. Add the `ballLeaveScreen()` method definition at the end of the `ExampleScene` class:

```js
class ExampleScene extends Phaser.Scene {
  // ...
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
```

Instead of instantly printing out the alert when you lose a life, we first subtract one life from the current number and check if it's a non-zero value. If yes, then the player still has some lives left and can continue to play—they will see the life lost message, the ball and paddle positions will be reset on screen and on the next input (click or touch) the message will be hidden and the ball will start to move again.

When the number of available lives reaches zero, the game is over and the game over alert message will be shown.

## Events

You have probably noticed the `once` method call in the above code block and wondered what it is. The `once()` method is a Phaser event listener that listens for the next occurrence of the specified event (in this case, a pointer down event) and then removes itself after being triggered. This means that the code inside the callback will only run once after calling `once`, which is exactly what we want here—we want to hide the life lost message and start the ball movement again only once, after the player clicks or touches the screen.

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
  }
  create() {
    this.physics.world.checkCollision.down = false;

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
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    this.paddle.x = this.input.x || this.scale.width * 0.5;
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

Lives made the game more forgiving—if you lose one life, you still have two more left and can continue to play. Now let's expand the look and feel of the game by adding [animations and tweens](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}
