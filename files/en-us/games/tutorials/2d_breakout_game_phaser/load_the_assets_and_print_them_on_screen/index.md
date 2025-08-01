---
title: Load the assets and print them on screen
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}

This is the **3rd step** out of 16 in the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson03.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson03.html).

Our game will feature a ball rolling around the screen, bouncing off a paddle, and destroying bricks to earn points — familiar, huh? In this article we'll look at how to add sprites into our gameworld.

## Having a ball

Let's start by adding a property representing our ball to the `Example` class. Add the following line just after the class declaration, inside the class body:

```js
ball;
```

## Loading the ball sprite

Loading images and printing them on our canvas is a lot easier using Phaser than using pure JavaScript. To load the asset, we will use the `Phaser.Scene`'s `load.image` method, available as `this.load.image`. Add the following new line just the `preload()` method:

```js
class Example extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
  }
  // ...
}
```

The first parameter we give the asset its name that will be used across our game code. For consistency, give the same name as the `ball` property. The second parameter is the relative path to the graphic asset. In our case, we will load the image for our ball. (Note that the file name does not also have to be the same, but we'd recommend it, as it makes everything easier to follow.)

Of course, to load the image, it must be available in our code directory. [Grab the ball image from GitHub](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/img/ball.png), and save it inside an `/img` directory in the same place as your `index.html` file.

Now, to show it on the screen we will use another `Phaser.Scene`'s method called `add.sprite`; add the following new line inside the `create()` method:

```js
class Example extends Phaser.Scene {
  // ...
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  // ...
}
```

This will add the ball to the game and render it on the screen. The first two parameters are the x and y coordinates of the canvas where you want it added, and the third one is the name of the asset we defined earlier.

That's all you need to edit the code in this lesson! However, if you open your `index.html` file with the browser, you will see a black box where the ball should be. This is the same result you would get if you enter the wrong path to the image, which means that the image isn't loaded correctly. Why does this happen even though the path is correct? This is caused by a kind of the restriction imposed as the ["same-origin policy"](/en-US/docs/Web/Security/Same-origin_policy) by web browsers. The browser does not allow you to load local files from the JavaScript code in the HTML file.

To fix the problem, you need to run a local web server to serve the HTML files and the image files. [As the official document of Phaser suggests](https://docs.phaser.io/phaser/getting-started/set-up-dev-environment#installing-a-web-server), we have a lot of options to run a local web server. Here, I recommend using Python's built-in HTTP server, which is available out of the box if you have Python installed. Open a terminal, navigate to the directory where your `index.html` file is located, and run the following command:

```bash
python3 -m http.server
```

This will start a simple HTTP server on port 8000. Then, open your web browser and navigate to `http://localhost:8000/index.html`, and you will see the image loaded and rendered on the canvas!

## Compare your code

You can check the finished code for this lesson for yourself in the live demo below, and play with it to better understand how it works:

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
  scene: Example,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eee",
};

const game = new Phaser.Game(config);
```

{{embedlivesample("final", "", "480px")}}

## Next steps

Printing out the ball was easy; next, we'll try [moving the ball](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) on screen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}
