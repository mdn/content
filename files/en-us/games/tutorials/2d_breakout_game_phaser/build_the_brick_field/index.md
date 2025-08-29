---
title: Build the brick field
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Collision_detection")}}

This is the **9th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). Let's explore how to create a group of bricks and print them on the screen using a loop. Building the brick field is a little bit more complicated than adding a single object to the screen, although it's still easier with Phaser than in pure JavaScript.

## New properties

First, add the new `bricks` property below your previous property definitions:

```js
class ExampleScene extends Phaser.Scene {
  // ... previous property definitions ...
  bricks;
  // ... rest of the class ...
}
```

The `bricks` property will be used to create a group of bricks, which will make it easy to manage multiple bricks at once.

## Rendering the brick image

Next, let's load the image of the brick—add the following `load.image()` call just below the others:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    // ...
    this.load.image("brick", "img/brick.png");
  }
  // ...
}
```

You also need to [grab the brick image](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) and save it in your `/img` directory.

## Drawing the bricks

We will place all the code for drawing the bricks inside an `initBricks` method to keep it separated from the rest of the code. Add a call to `initBricks` at the end of the `create()` method:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    // ...
    this.initBricks();
  }
  // ...
}
```

Now on to the method itself. Add the `initBricks` method at the end of the `ExampleScene` class, just before the closing brace `}`, as shown below. To begin with, we add the `bricksLayout` object, as this will come in handy very soon:

```js
class ExampleScene extends Phaser.Scene {
  // ...
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
  }
}
```

This `bricksLayout` holds all the information we need: the width and height of a single brick, the number of rows and columns of bricks we will see on the screen, the top and left offset (the location on the canvas where we start to draw the bricks), and the padding between each row and column of bricks.

Now, let's start creating the bricks themselves—first, add an empty group to contain the bricks, by adding the following line at the bottom of the `initBricks()` method:

```js
this.bricks = this.add.group();
```

We can loop through the rows and columns to create a new brick on each iteration—add the following nested loop below the previous line of code:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

This way, we will create the exact number of bricks we need and have them all contained in a group. Now we need to add some code inside the nested loop structure to draw each brick. Fill in the contents as shown below:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX = 0;
    const brickY = 0;

    const newBrick = this.add.sprite(brickX, brickY, "brick");
    this.physics.add.existing(newBrick);
    newBrick.body.setImmovable(true);
    this.bricks.add(newBrick);
  }
}
```

Here we're looping through the rows and columns to create the new bricks and place them on the screen. The newly created brick is enabled for the Arcade physics engine, its body is set to be immovable (so it won't move when hit by the ball), and then it's added to the group.

The problem currently is that we're painting all the bricks in one place, at coordinates (0,0). What we need to do is draw each brick at its own x and y position. Update the `brickX` and `brickY` lines as follows:

```js
const brickX =
  c * (bricksLayout.width + bricksLayout.padding) + bricksLayout.offset.left;
const brickY =
  r * (bricksLayout.height + bricksLayout.padding) + bricksLayout.offset.top;
```

Each `brickX` position is worked out as `bricksLayout.width` plus `bricksLayout.padding`, multiplied by the column number, `c`, plus the `bricksLayout.offset.left`; the logic for the `brickY` is identical except that it uses the values for row number, `r`, `bricksLayout.height`, and `bricksLayout.offset.top`. Now every single brick can be placed in its correct place, with padding between each brick, and drawn at an offset from the left and top Canvas edges.

If you reload `index.html` at this point, you should see the bricks printed on screen, at an even distance from one another.

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
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // Game over logic
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

Something is missing though. The ball goes through the bricks without stopping—we need proper [collision detection](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Collision_detection")}}
