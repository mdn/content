---
title: Player paddle and controls
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

This is the **7th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson07.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson07.html).

We have the ball moving and bouncing off the walls, but it quickly gets boring — there's no interactivity! We need a way to introduce gameplay, so in this article, we'll create a paddle to move around and hit the ball with.

## Rendering the paddle

From the framework point of view the paddle is very similar to the ball — we need to add a property to represent it, load the relevant image asset, and then do the magic.

### Loading the paddle

First, add the `paddle` property we will be using in our game, right after the `ball` property:

```js
class Example extends Phaser.Scene {
  ball;
  paddle;
  // ...
}
```

Then, in the `preload` method, load the `paddle` image by adding the following new `load.image()` call:

```js
class Example extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
    this.load.image("paddle", "img/paddle.png");
  }
  // ...
}
```

### Adding the paddle graphic

Just so we don't forget, at this point, you should grab the [paddle graphic](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/img/paddle.png) from GitHub and save it in your `/img` folder.

### Rendering the paddle, with physics

Next up, we will initialize our paddle by adding the following `add.sprite()` call inside the `create()` function — add it right at the bottom:

```js
this.paddle = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 5,
  "paddle",
);
```

We can use the `scale.width` and `scale.height` values to position the paddle exactly where we want it: `this.scale.width * 0.5` will be right in the middle of the screen. Typically, the `scale.width` and `scale.height` are the same as those in the `config` object, which represent the canvas's size before the scale factor is applied.

As you'll notice if you reload your `index.html` at this point, the paddle is currently at the complete bottom of the screen, too low for the paddle. Why? Because the origin from which the position is calculated starts from the center of the object. We can change that to have the origin in the middle of the paddle's width and at the bottom of its height, so it's easier to position it against the bottom edge. Add the following line below the previous new one:

```js
this.paddle.setOrigin(0.5, 1);
```

The paddle is now positioned right where we want it to be. Now, to make it collide with the ball, we have to enable physics for the paddle. Continue by adding the following new line, again at the bottom of the `create` method:

```js
this.physics.add.existing(this.paddle);
```

Now the magic can start to happen — the framework can take care of checking the collision detection on every frame. To enable collision detection between the paddle and ball, add the `collide()` method to the `update` method as shown:

```js
update () {
  this.physics.collide(this.ball, this.paddle);
}
```

The first parameter is one of the objects we are interested in — the ball — and the second is the other one, the paddle. This works, but not quite as we expected it to — when the ball hits the paddle, the paddle falls off the screen! All we want is the ball bouncing off the paddle and the paddle staying in the same place. We can set the `body` of the paddle to be immovable, so it won't move when the ball hits it. To do this, add the below line at the bottom of the `create` method:

```js
this.paddle.body.setImmovable(true);
```

Now it works as expected.

## Controlling the paddle

The next problem is that we can't move the paddle. To fix that, we can use the system's default input (mouse or touch, depending on platform) and set the paddle position to where the `input` position is. Add the following new line to the `update` method, as shown:

```js
this.paddle.x = this.input.x;
```

Now on every new frame the paddle's `x` position will adjust accordingly to the input's `x` position, however, when we start the game, the position of the paddle is not in the middle. It's because the input position is not yet defined. To fix that we can set the default position (if an input position is not yet defined) to be the middle of the screen. Update the previous line as follows:

```js
this.paddle.x = this.input.x || this.scale.width * 0.5;
```

If you haven't already done so, reload your `index.html` and try it out!

## Position the ball

We have the paddle working as expected, so let's position the ball on it. It's very similar to positioning the paddle — we need to have it placed in the middle of the screen horizontally and at the bottom vertically with a little offset from the bottom. To place it exactly as we want it we will set the origin to the exact middle of the ball. Find the existing `this.ball = this.add.sprite()` line, and replace it with the following lines:

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
```

The velocity stays almost the same — we're just changing the second parameter's value from 150 to -150, so the ball will start the game by moving up instead of down. Find the existing `this.ball.body.setVelocity()` line and update it to the following:

```js
this.ball.body.setVelocity(150, -150);
```

Now the ball will start right from the middle of the paddle.

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
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
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.input.x || this.scale.width * 0.5;
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

We can move the paddle and bounce the ball off it, but what's the point if the ball is bouncing off the bottom edge of the screen anyway? Let's introduce the possibility of losing — also known as [game over](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over) logic.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
