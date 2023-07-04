---
title: Animations and tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

This is the **14th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html).

To make the game look more juicy and alive we can use animations and tweens. This will result in a better, more entertaining experience. Let's explore how to implement Phaser animations and tweens in our game.

## Animations

In Phaser, animations, involve taking a spritesheet from an external source and displaying the sprites sequentially. As an example, we will make the ball wobble when it hits something.

First of all, [grab the spritesheet from GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/wobble.png) and save it in your `/img` directory.

Next, we will load the spritesheet — put the following line at the bottom of your `preload()` function:

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

Instead of loading a single image of the ball we can load the whole spritesheet — a collection of different images. We will show the sprites sequentially to create the illusion of animation. The `spritesheet()` method's two extra parameters determine the width and height of each single frame in the given spritesheet file, indicating to the program how to chop it up to get the individual frames.

## Loading the animation

Next up, go into your create() function, find the line that loads the ball sprite, and below it put the call to `animations.add()` seen below:

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

To add an animation to the object we use the `animations.add()` method, which contains the following parameters

- The name we chose for the animation
- An array defining the order in which to display the frames during the animation. If you look again at the `wobble.png` image, you'll see there are three frames. Phaser extracts these and stores references to them in an array — positions 0, 1, and 2. The above array says that we are displaying frame 0, then 1, then 0, etc.
- The frame rate, in fps. Since we are running the animation at 24fps and there are 9 frames, the animation will display just under three times per second.

## Applying the animation when the ball hits the paddle

In the `arcade.collide()` method call that handles the collision between the ball and the paddle (the first line inside `update()`, see below) we can add an extra parameter that specifies a function to be executed every time the collision happens, in the same fashion as the `ballHitBrick()` function. Update the first line inside `update()` as shown below:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Then we can create the `ballHitPaddle()` function (having `ball` and `paddle` as default parameters), playing the wobble animation when it is called. Add the following function just before your closing `</script>` tag:

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

The animation is played every time the ball hits the paddle. You can add the `animations.play()` call inside the `ballHitBrick()` function too, if you feel it would make the game look better.

## Tweens

Whereas animations play external sprites sequentially, tweens smoothly animate properties of an object in the gameworld, such as width or opacity.

Let's add a tween to our game to make the bricks smoothly disappear when they are hit by the ball. Go to your `ballHitBrick()` function, find your `brick.kill();` line, and replace it with the following:

```js
const killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(() => {
  brick.kill();
}, this);
killTween.start();
```

Let's walk through this so you can see what's happening here:

1. When defining a new tween you have to specify which property will be tweened — in our case, instead of hiding the bricks instantly when hit by the ball, we will make their width and height scale to zero, so they will nicely disappear. To the end, we use the `add.tween()` method, specifying `brick.scale` as the argument as this is what we want to tween.
2. The `to()` method defines the state of the object at the end of the tween. It takes an object containing the chosen parameter's desired ending values (scale takes a scale value, 1 being 100% of size, 0 being 0% of size, etc.), the time of the tween in milliseconds and the type of easing to use for the tween.
3. We will also add the optional `onComplete` event handler, which defines a function to be executed when the tween finishes.
4. The last thing do to is to start the tween right away using `start()`.

That's the expanded version of the tween definition, but we can also use the shorthand syntax:

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

This tween will double the brick's scale in half a second using Elastic easing, will start automatically, and have a delay of 100 milliseconds.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## Next steps

Animations and tweens look very nice, but we can add even more to our game — in the next section we'll look at handling [button](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) inputs.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
