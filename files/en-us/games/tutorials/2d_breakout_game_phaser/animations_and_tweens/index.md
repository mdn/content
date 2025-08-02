---
title: Animations and tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

This is the **14th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). We'll explore how to implement Phaser animations and tweens in our game, to make the game look more juicy and alive. This will result in a better, more entertaining experience.

## Animations

In Phaser, animations involve taking a spritesheet from an external source and displaying the sprites sequentially. As an example, we will make the ball wobble when it hits something.

First of all, [grab the spritesheet](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png) and save it in your `/img` directory.

Next, we will load the spritesheet—put the following line at the bottom of your `preload()` method:

```js
this.load.spritesheet("wobble", "img/wobble.png", {
  frameWidth: 20,
  frameHeight: 20,
});
```

Instead of loading a single image of the ball, we can load the whole spritesheet—a collection of different images. We will show the sprites sequentially to create the illusion of animation. The `spritesheet()` method's extra parameter determines the width and height of each single frame in the given spritesheet file, indicating to the program how to chop it up to get the individual frames.

## Loading the animation

Next up, go into your `create()` method, find the code block that loads and configures the ball sprite, and below it, put the call to `anims.create` seen below:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
// ...
this.ball.anims.create({
  key: "wobble",
  frameRate: 24,
  frames: this.anims.generateFrameNumbers("wobble", {
    frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
  }),
});
```

To add an animation to the object, we use the `anims.create()` method, which receives the parameter with the following properties:

- `key`: The name we chose for the animation.
- `frameRate`: The frame rate in fps. Since we are running the animation at 24fps and there are 9 frames, the animation will display just under three times per second.
- `frames`: An array defining the order in which to display the frames during the animation. If you look again at the `wobble.png` image, you'll see there are three frames. Phaser extracts these and stores references to them in an array—positions 0, 1, and 2. The above array says that we are displaying frame 0, then 1, then 0, etc.

## Applying the animation when the ball hits the paddle

In the `physics.collide()` method call that handles the collision between the ball and the paddle (the first line inside `update()`, see below), we can add an extra parameter that specifies a function to be executed every time the collision happens, in the same fashion as the `hitBrick()` method. Update the first line inside `update()` as shown below:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
  }
  // ...
}
```

Then, we can create the `hitPaddle()` method (having `ball` and `paddle` as parameters), playing the wobble animation when it is called. Add the following method, above the `hitBrick()` method:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }
  // ...
}
```

The animation is played every time the ball hits the paddle. You can add the `anims.play()` call inside the `hitBrick()` method too, if you feel it would make the game look better.

## Tweens

Whereas animations play external sprites sequentially, tweens smoothly animate properties of an object in the gameworld, such as width or opacity.

Let's add a tween to our game to make the bricks smoothly disappear when they are hit by the ball. Go to your `hitBrick()` method, find your `brick.destroy();` line, and replace it with the following:

```js
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
```

Let's walk through this so you can see what's happening here:

1. When defining a new tween, you have to specify which property of the `targets` will be tweened—in our case, instead of hiding the bricks instantly when hit by the ball, we will make their width and height scale to zero, so they will nicely disappear. To the end, we use the `tweens.add()` method, specifying `brick` as the `targets` and the `scaleX` and `scaleY` properties to tween in the `props` object.
2. Other properties we can set are `ease`, which defines the easing function to use (in this case, `Linear`), `repeat`, which defines how many times the tween should repeat (0 means it will not repeat), and `duration`, which is the time in milliseconds that the tween will take to complete.
3. We will also add the optional `onComplete` event handler, which defines a function to be executed when the tween finishes.
4. The last thing to do is to start the tween right away using the `play()` method.

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
  }
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
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

Animations and tweens look very nice, but we can add even more to our game—in the next section we'll look at handling [button](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) inputs.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
