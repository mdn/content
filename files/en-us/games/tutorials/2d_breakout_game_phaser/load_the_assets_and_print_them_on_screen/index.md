---
title: Load the assets and print them on screen
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Scaling", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}

This is the **3rd step** out of 16 in the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). In this article we'll look at how to add sprites into our gameworld. Our game will feature a ball rolling around the screen, bouncing off a paddle, and destroying bricks to earn points—familiar, huh?

## Having a ball

Let's start by adding a property representing our ball to the `ExampleScene` class. Add the following line just after the opening line, inside the class body:

```js
class ExampleScene extends Phaser.Scene {
  ball;
  // ...
}
```

## Loading the ball sprite

Loading images and printing them on our canvas is a lot easier using Phaser than using pure JavaScript. To load the asset, we will use the `Phaser.Scene`'s `load.image()` method, available as `this.load.image`. Add the following new line inside the `preload()` method:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
}
```

The first parameter gives the asset its name that will be used across our game code. For consistency, use the same name as the backing property, which is `ball`. The second parameter is the relative path to the graphic asset. In our case, we will load the image for our ball. (Note that the file name does not need to be called `ball`, but we'd recommend it, as it makes everything easier to follow.)

Of course, to load the image, it must be available in our code directory. [Grab the ball image from our assets website](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png), and save it inside an `/img` directory in the same place as your `index.html` file.

Now, to show it on the screen we will use another `Phaser.Scene`'s method called `add.sprite()`; add the following new line inside the `create()` method:

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

This will add the ball to the game and render it on the screen. The first two parameters are the x and y coordinates of the canvas where you want it added, and the third one is the name of the asset we defined earlier. That's it—if you load your `index.html` file you will see the image already loaded and rendered on the canvas!

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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

Printing out the ball was easy; next, we'll try [moving the ball](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) on screen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Scaling", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}
