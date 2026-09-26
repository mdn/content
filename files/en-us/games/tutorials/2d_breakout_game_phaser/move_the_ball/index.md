---
title: Move the ball
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}

This is the **2nd step** out of 12 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). In this article, we'll look at how to load a ball sprite, add it to our gameworld, and move it across the screen. Our game will feature a ball rolling around the screen, bouncing off a paddle, and destroying bricks to earn points.

Doing this involves two steps: loading the ball's asset, and rendering it at the correct position as the ball moves.

## Having a ball

Let's start by adding a property representing our ball to the `ExampleScene` class. Add the following line just after the opening line, inside the class body:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  // ...
}
```

## Loading the ball sprite

With Phaser, loading images and printing them on our canvas is less complex than doing so using pure JavaScript. To load the asset, we will use the `Phaser.Scene`'s `load.image()` method, available as `this.load.image`. Add the following new line inside the `preload()` method:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
  // ...
}
```

The first parameter gives the asset its name that will be used across our game code. For consistency, use the same name as the backing property, which is `ball`. The second parameter is the relative path to the graphic asset. In our case, we will load the image for our ball. (Note that the file name does not need to be called `ball`, but we'd recommend it, as it makes everything more intuitive to follow.)

Of course, to load the image, it must be available in our code directory. [Grab the ball image from our assets website](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png), and save it inside an `/img` directory in the same place as your `index.html` file.

Now, to show it on the screen, we will use another `Phaser.Scene`'s method called `add.sprite()`; add the following new line inside the `create()` method:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

This will add the ball to the game and render it on the screen. The first two parameters are the x and y coordinates of the canvas where you want it added, and the third one is the name of the asset we defined earlier. That's it—if you load your `index.html` file, you will see the image already loaded and rendered on the canvas!

## Updating the ball's position on each frame

Remember the `update()` method and its definition? The code inside it is executed on every frame, so it's a perfect place to put the code that will update the ball's position on screen. Add the following new lines inside `update()`, as shown:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}
```

The code above adds 1 to the `x` and `y` properties representing the ball coordinates on the canvas, on each frame. Reload `index.html` and you should see the ball rolling across the screen.

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
  }
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

The next step is to add some basic collision detection, so our ball can bounce off the walls. This would take several lines of code—a significantly more complex step than we have seen so far, especially if we want to add paddle and brick collisions too—but fortunately, Phaser allows us to do this much more easily than if we wanted to use pure JavaScript.

In any case, before we do all that, we will first introduce Phaser's [physics](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics) engines and do some setup work.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}
