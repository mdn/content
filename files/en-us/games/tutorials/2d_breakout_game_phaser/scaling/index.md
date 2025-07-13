---
title: Scaling
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

This is the **2nd step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [2D_Breakout_game_Phaser/lesson02.html](https://github.com/igrep/2D_Breakout_game_Phaser/blob/main/lesson02.html).

Scaling refers to how the game canvas will scale on different screen sizes. We can make the game scale to fit on any screen size by configuring `scale`, so we don't have to worry about it later.

## The Phaser scale object

The `scale` property of the Phaser game configuration object allows us to set how the game canvas will be scaled. Update your `config` object as follows:

```js
const config = {
  // ...
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  // ...
};
```

The `mode` property in `scale` has a few different options available for how the Canvas can be scaled:

- `NO_SCALE` — nothing is scaled (the default value).
- `ENVELOP` — ajudsts the width and height automatically to cover the entire target area while keeping the aspect ratio. It may extend further out than the target size.
- `FIT` — scales the canvas to fit the available space while keeping the aspect ratio untouched. Depending on the aspect ratio, it may not cover some space.
- `HEIGHT_CONTROLS_WIDTH` — adjusts the width of the canvas based on the height.
- `WIDTH_CONTROLS_HEIGHT` — adjusts the height of the canvas based on the width.
- `RESIZE` — resizes the visible area of the canvas to fit all available _parent_ space, regardless of aspect ratio.
- `EXPAND` — resizes the visible area of the canvas to fit all available _parent_ space like the RESIZE mode, and scale the canvas size to fit inside the visible area like the FIT mode.

The other property, `autoCenter` is responsible for aligning the canvas element horizontally and vertically, so it always centers the canvas on screen regardless of size.

## Adding a custom canvas background color

We can also add a custom background color to our canvas, so it won't stay black. The configuration object has a `backgroundColor` property for this purpose, which we can set using CSS color definition syntax. Add the following line to your `config` object:

```js
const config = {
  // ...
  backgroundColor: "#eee",
  // ...
};
```

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Next steps

Now we've set up the scaling for our game, let's continue to the third lesson and work out how to [load the assets and print them on screen](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
