---
title: Player paddle and controls
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
tags:
  - 2D
  - Beginner
  - Canvas
  - Games
  - JavaScript
  - Phaser
  - Tutorial
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

This is the **7th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson07.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson07.html).

We have the ball moving and bouncing off the walls, but it quickly gets boring — there's no interactivity! We need a way to introduce gameplay, so in this article we'll create a paddle to move around and hit the ball with.

## Rendering the paddle

From the framework point of view the paddle is very similar to the ball — we need to add a variable to represent it, load the relevant image asset, and then do the magic.

### Loading the paddle

First, add the `paddle` variable we will be using in our game, right after the `ball` variable:

```js
let paddle;
```

Then, in the `preload` function, load the `paddle` image by adding the following new `load.image()` call:

```js
function preload() {
  // …
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
}
```

### Adding the paddle graphic

Just so we don't forget, at this point you should grab the [paddle graphic](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/paddle.png) from GitHub, and save it in your `/img` folder.

### Rendering the paddle, with physics

Next up, we will initialize our paddle by adding the following `add.sprite()` call inside the `create()` function — add it right at the bottom:

```js
paddle = game.add.sprite(
  game.world.width * 0.5,
  game.world.height - 5,
  "paddle"
);
```

We can use the `world.width` and `world.height` values to position the paddle exactly where we want it: `game.world.width*0.5` will be right in the middle of the screen. In our case the world is the same as the Canvas, but for other types of games, like side-scrollers for example, the world will be bigger, and you can tinker with it to create interesting effects.

As you'll notice if you reload your `index.html` at this point, the paddle is currently not exactly in the middle. Why? Because the anchor from which the position is calculated always starts from the top left edge of the object. We can change that to have the anchor in the middle of the paddle's width and at the bottom of its height, so it's easier to position it against the bottom edge. Add the following line below the previous new one:

```js
paddle.anchor.set(0.5, 1);
```

The paddle is now positioned right where we want it to be. Now, to make it collide with the ball we have to enable physics for the paddle. Continue by adding the following new line, again at the bottom of the `create()` function:

```js
game.physics.enable(paddle, Phaser.Physics.ARCADE);
```

Now the magic can start to happen — the framework can take care of checking the collision detection on every frame. To enable collision detection between the paddle and ball, add the `collide()` method to the `update()` function as shown:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
}
```

The first parameter is one of the objects we are interested in — the ball — and the second is the other one, the paddle. This works, but not quite as we expected it to — when the ball hits the paddle, the paddle falls off the screen! All we want is the ball bouncing off the paddle and the paddle staying in the same place. We can set the `body` of the paddle to be `immovable`, so it won't move when the ball hits it. To do this, add the below line at the bottom of the `create()` function:

```js
paddle.body.immovable = true;
```

Now it works as expected.

## Controlling the paddle

The next problem is that we can't move the paddle. To do that we can use the system's default input (mouse or touch, depending on platform) and set the paddle position to where the `input` position is. Add the following new line to the `update()` function, as shown:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  paddle.x = game.input.x;
}
```

Now on every new frame the paddle's `x` position will adjust accordingly to the input's `x` position, however when we start the game, the position of the paddle is not in the middle. It's because the input position is not yet defined. To fix that we can set the default position (if an input position is not yet defined) to be the middle of the screen. Update the previous line as follows:

```js
paddle.x = game.input.x || game.world.width * 0.5;
```

If you haven't already done so, reload your `index.html` and try it out!

## Position the ball

We have the paddle working as expected, so let's position the ball on it. It's very similar to positioning the paddle — we need to have it placed in the middle of the screen horizontally and at the bottom vertically with a little offset from the bottom. To place it exactly as we want it we will set the anchor to the exact middle of the ball. Find the existing `ball = game.add.sprite()` line, and replace it with the following two lines:

```js
ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
ball.anchor.set(0.5);
```

The velocity stays almost the same — we're just changing the second parameter's value from 150 to -150, so the ball will start the game by moving up instead of down. Find the existing `ball.body.velocity.set()` line and update it to the following:

```js
ball.body.velocity.set(150, -150);
```

Now the ball will start right from the middle of the paddle.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/ogqza0ye/","","400")}}

## Next steps

We can move the paddle and bounce the ball off it, but what's the point if the ball is bouncing off the bottom edge of the screen anyway? Let's introduce the possibility of losing — also known as [game over](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over) logic.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
