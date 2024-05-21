---
title: Build the brick field
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}

This is the **9th step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson09.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson09.html).

Building the brick field is a little bit more complicated than adding a single object to the screen, although It's still easier with Phaser than in pure JavaScript. Let's explore how to create a group of bricks and print them on screen using a loop.

## Defining new variables

First, let's define the needed variables — add the following below your previous variable definitions:

```js
let bricks;
let newBrick;
let brickInfo;
```

The `bricks` variable will be used to create a group, `newBrick` will be a new object added to the group on every iteration of the loop, and `brickInfo` will store all the data we need.

## Rendering the brick image

Next, let's load the image of the brick — add the following `load.image()` call just below the others:

```js
function preload() {
  // …
  game.load.image("brick", "img/brick.png");
}
```

You also need to [grab the brick image from GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/brick.png) and save it in your `/img` directory.

## Drawing the bricks

We will place all the code for drawing the bricks inside an `initBricks` function to keep it separated from the rest of the code. Add a call to `initBricks` at the end of the `create()` function:

```js
function create() {
  // …
  initBricks();
}
```

Now onto the function itself. Add the `initBricks()` function at the end of our games code, just before the closing \</script> tag, as shown below. To begin with we've included the `brickInfo` object, as this will come in handy very soon:

```js
function initBricks() {
  brickInfo = {
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
```

This `brickInfo` object will hold all the information we need: the width and height of a single brick, the number of rows and columns of bricks we will see on screen, the top and left offset (the location on the canvas where we shall start to draw the bricks) and the padding between each row and column of bricks.

Now, let's start creating the bricks themselves — add an empty group first to contain the bricks, by adding the following line at the bottom of the `initBricks()` function:

```js
bricks = game.add.group();
```

We can loop through the rows and columns to create new brick on each iteration — add the following nested loop below the previous line of code:

```js
for (let c = 0; c < brickInfo.count.col; c++) {
  for (let r = 0; r < brickInfo.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

This way we will create the exact number of bricks we need and have them all contained in a group. Now we need to add some code inside the nested loop structure to draw each brick. Fill in the contents as shown below:

```js
for (let c = 0; c < brickInfo.count.col; c++) {
  for (let r = 0; r < brickInfo.count.row; r++) {
    let brickX = 0;
    let brickY = 0;
    newBrick = game.add.sprite(brickX, brickY, "brick");
    game.physics.enable(newBrick, Phaser.Physics.ARCADE);
    newBrick.body.immovable = true;
    newBrick.anchor.set(0.5);
    bricks.add(newBrick);
  }
}
```

Here we're looping through the rows and columns to create the new bricks and place them on the screen. The newly created brick is enabled for the Arcade physics engine, its body is set to be immovable (so it won't move when hit by the ball), and we're also setting the anchor to be in the middle and adding the brick to the group.

The problem currently is that we're painting all the bricks in one place, at coordinates (0,0). What we need to do is draw each brick at its own x and y position. Update the `brickX` and `brickY` lines as follows:

```js
const brickX =
  c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
const brickY =
  r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
```

Each `brickX` position is worked out as `brickInfo.width` plus `brickInfo.padding`, multiplied by the column number, `c`, plus the `brickInfo.offset.left`; the logic for the `brickY` is identical except that it uses the values for row number, `r`, `brickInfo.height`, and `brickInfo.offset.top`. Now every single brick can be placed in its correct place, with padding between each brick, and drawn at an offset from the left and top Canvas edges.

## Checking the initBricks() code

Here is the complete code for the `initBricks()` function:

```js
function initBricks() {
  brickInfo = {
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
  bricks = game.add.group();
  for (let c = 0; c < brickInfo.count.col; c++) {
    for (let r = 0; r < brickInfo.count.row; r++) {
      const brickX =
        c * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
      const brickY =
        r * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, "brick");
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
}
```

If you reload `index.html` at this point, you should see the bricks printed on screen, at an even distance from one another.

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cck2b9e8/","","400")}}

## Next steps

Something is missing though. The ball goes through the bricks without stopping — we need proper [collision detection](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}
