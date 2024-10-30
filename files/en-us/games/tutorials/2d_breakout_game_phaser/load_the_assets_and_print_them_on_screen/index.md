---
title: Load the assets and print them on screen
slug: Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}

This is the **3rd step** out of 16 in the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson03.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson03.html).

Our game will feature a ball rolling around the screen, bouncing off a paddle, and destroying bricks to earn points — familiar, huh? In this article we'll look at how to add sprites into our gameworld.

## Having a ball

Let's start by creating a JavaScript variable to represent our ball. Add the following line between the game initialization code (our `const game` block) and the `preload()` function:

```js
let ball;
```

> [!NOTE]
> For the sake of this tutorial, we will use global variables. The purpose of the tutorial is to teach Phaser-specific approaches to game development rather than dwelling on subjective best approaches.

## Loading the ball sprite

Loading images and printing them on our canvas is a lot easier using Phaser than using pure JavaScript. To load the asset, we will use the `game` object created by Phaser, executing its `load.image()` method. Add the following new line just inside the `preload()` function, at the bottom:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
}
```

The first parameter we want to give the asset is the name that will be used across our game code — for example, in our `ball` variable name — so we need to make sure it is the same. The second parameter is the relative path to the graphic asset. In our case, we will load the image for our ball. (Note that the file name does not also have to be the same, but we'd recommend it, as it makes everything easier to follow.)

Of course, to load the image, it must be available in our code directory. [Grab the ball image from GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/ball.png), and save it inside an `/img` directory in the same place as your `index.html` file.

Now, to show it on the screen we will use another Phaser method called `add.sprite()`; add the following new code line inside the `create()` function as shown:

```js
function create() {
  ball = game.add.sprite(50, 50, "ball");
}
```

This will add the ball to the game and render it on the screen. The first two parameters are the x and y coordinates of the canvas where you want it added, and the third one is the name of the asset we defined earlier. That's it — if you load your `index.html` file you will see the image already loaded and rendered on the canvas!

## Compare your code

You can check the finished code for this lesson for yourself in the live demo below, and play with it to better understand how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/98xrv9x5/","","400")}}

## Next steps

Printing out the ball was easy; next, we'll try [moving the ball](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball) on screen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Scaling", "Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball")}}
