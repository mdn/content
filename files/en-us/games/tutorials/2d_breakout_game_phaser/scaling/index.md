---
title: Scaling
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

This is the **2nd step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). We'll be working on scaling, which refers to how the game canvas will scale on different screen sizes. We can make the game scale to fit on any screen size by configuring `scale` during initialization, so we don't have to worry about it later.

## The Phaser scale object

The `scale` property of the `config` object allows us to set how the game canvas will be scaled. Update your `config` object as follows:

```js
const config = {
  // ...
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
```

The `mode` property in `scale` has a few different options available for how the canvas can be scaled:

- `NO_SCALE`—nothing is scaled (the default value).
- `ENVELOP`—adjusts the width and height automatically to cover the entire target area while keeping the aspect ratio. It may extend further out than the target size.
- `FIT`—scales the canvas to fit the available space while keeping the aspect ratio untouched. Depending on the aspect ratio, it may not cover some space.
- `HEIGHT_CONTROLS_WIDTH`—adjusts the width of the canvas based on the height.
- `WIDTH_CONTROLS_HEIGHT`—adjusts the height of the canvas based on the width.
- `RESIZE`—resizes the visible area of the canvas to fit all available _parent_ space, regardless of aspect ratio.
- `EXPAND`—resizes the visible area of the canvas to fit all available _parent_ space like the RESIZE mode, and scale the canvas size to fit inside the visible area like the FIT mode.

The other property, `autoCenter`, is responsible for aligning the canvas element horizontally and vertically, so it always centers the canvas on screen regardless of size.

## Adding a custom canvas background color

We can also add a custom background color to our canvas, so it won't stay black. The configuration object has a `backgroundColor` property for this purpose, which we can set using CSS color definition syntax. Add the following line to your `config` object:

```js
const config = {
  // ...
  backgroundColor: "#eeeeee",
};
```

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
  preload() {}
  create() {}
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

Now we've set up the scaling for our game, let's continue to the third lesson and work out how to [load the assets and print them on screen](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
