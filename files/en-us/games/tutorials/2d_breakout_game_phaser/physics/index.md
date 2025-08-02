---
title: Physics
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}

This is the **5th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). For proper collision detection between objects in our game we will need to have physics; this article introduces you to what's available in Phaser, as well as demonstrating a typical simple setup.

## Adding physics

Phaser is bundled with three different physics engines—Arcade Physics, Impact Physics, and Matter.js Physics—with the fourth option, Box2D, available as a commercial plugin. For simple games like ours, we can use the Arcade Physics engine. We don't need any heavy geometry calculations—after all, it's just a ball bouncing off walls and bricks.

First, let's configure the Arcade Physics engine in our game. Add the `physics` property to the `config` object, as shown below:

```js
const config = {
  // ...
  physics: {
    default: "arcade",
  },
};
```

Next, we need to enable our ball for the physics system—Phaser object physics is not enabled by default. Add the following line at the bottom of the `create()` method:

```js
this.physics.add.existing(this.ball);
```

Next, if we want to move our ball on the screen, we can set `velocity` on its `body`. Add the following line, again at the bottom of `create()`:

```js
this.ball.body.setVelocity(150, 150);
```

## Removing our previous update instructions

Remember to remove our old method of adding values to `x` and `y` from the `update()` method, i.e., restore it to the empty state:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {}
}
```

We are now handling this properly, with a physics engine.

Try reloading `index.html` again. At the moment, the physics engine has no gravity or friction, so the ball will go in the given direction at a constant speed.

## Fun with physics

You can do much more with physics, for example by adding `this.ball.body.gravity.y = 500;` inside `create()`, you will set the vertical gravity of the ball. Try changing the velocity to `this.ball.body.setVelocity(150, -150);`, and you will see the ball launched upwards, but then fall due to the effects of gravity pulling it down.

This kind of functionality is just the tip of the iceberg—there are various functions and variables that can help you manipulate the physics objects. Check out the official [physics documentation](https://docs.phaser.io/phaser/concepts/physics/arcade) and see the [huge collection of examples](https://phaser.io/examples/v3.85.0/physics) using the Arcade and Matter.js physics systems.

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

Now we can move to the next lesson and see how to make the ball [bounce off the walls](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}
