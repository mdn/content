---
title: Physics
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}

This is the **5th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html).

For proper collision detection between objects in our game we will need to have physics; this article introduces you to what's available in Phaser, as well as demonstrating a typical simple setup.

## Adding physics

Phaser is bundled with three different physics engines — Arcade Physics, P2 and Ninja Physics — with a fourth option, Box2D, being available as a commercial plugin. For simple games like ours, we can use the Arcade Physics engine. We don't need any heavy geometry calculations — after all it's just a ball bouncing off walls and bricks.

First, let's initialize the Arcade Physics engine in our game. Add the `physics.startSystem()` method at the beginning of the `create` function (make it the first line inside the function), as shown below:

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

Next, we need to enable our ball for the physics system — Phaser object physics is not enabled by default. Add the following line at the bottom of the `create()` function:

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

Next, if we want to move our ball on the screen, we can set `velocity` on its `body`. Add the following line, again at the bottom of `create()`:

```js
ball.body.velocity.set(150, 150);
```

## Removing our previous update instructions

Remember to remove our old method of adding values to `x` and `y` from the `update()` function:

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

we are now handling this properly, with a physics engine.

## Final code check

The latest code should look like this:

```js
let ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";
  game.load.image("ball", "img/ball.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, "ball");
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, 150);
}

function update() {}
```

Try reloading `index.html` again — The ball should now be moving constantly in the given direction. At the moment, the physics engine has gravity and friction set to zero. Adding gravity would result in the ball falling down while friction would eventually stop the ball.

## Fun with physics

You can do much more with physics, for example by adding `ball.body.gravity.y = 100;` you will set the vertical gravity of the ball. As a result it will be launched upwards, but then fall due to the effects of gravity pulling it down.

This kind of functionality is just the tip of the iceberg — there are various functions and variables that can help you manipulate the physics objects. Check out the official [physics documentation](https://phaser.io/docs#physics) and see the huge collection of examples using the [Arcade](https://phaser.io/examples/v2/category/arcade-physics) and [P2](https://phaser.io/examples/v2/category/p2-physics) physics systems.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## Next steps

Now we can move to the next lesson and see how to make the ball [bounce off the walls](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}
