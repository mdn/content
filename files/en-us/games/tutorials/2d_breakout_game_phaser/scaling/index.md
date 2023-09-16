---
title: Scaling
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

This is the **2nd step** out of 16 of the [Gamedev Phaser tutorial](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser). You can find the source code as it should look after completing this lesson at [Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson02.html).

Scaling refers to how the game canvas will scale on different screen sizes. We can make the game scale to fit on any screen size automatically during the preload stage, so we don't have to worry about it later.

## The Phaser scale object

There's a special `scale` object available in Phaser with a few handy methods and properties available. Update your existing `preload()` function as follows:

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` has a few different options available for how the Canvas can be scaled:

- `NO_SCALE` — nothing is scaled.
- `EXACT_FIT` — scale the canvas to fill all the available space both vertically and horizontally, without preserving the aspect ratio.
- `SHOW_ALL` — scales the canvas, but keeps the aspect ratio untouched, so images won't be skewed like in the previous mode. There might be black stripes visible on the edges of the screen, but we can live with that.
- `RESIZE` — creates the canvas with the same size as the available width and height, so you have to place the objects inside your game dynamically; this is more of an advanced mode.
- `USER_SCALE` — allows you to have custom dynamic scaling, calculating the size, scale and ratio on your own; again, this is more of an advanced mode

The other two lines of code in the `preload()` function are responsible for aligning the canvas element horizontally and vertically, so it is always centered on screen regardless of size.

## Adding a custom canvas background color

We can also add a custom background color to our canvas, so it won't stay black. The `stage` object has a `backgroundColor` property for this purpose, which we can set using CSS color definition syntax. Add the following line below the other three you added earlier:

```js
game.stage.backgroundColor = "#eee";
```

## Compare your code

You can check the finished code for this lesson in the live demo below, and play with it to understand better how it works:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## Next steps

Now we've set up the scaling for our game, let's continue to the third lesson and work out how to [load the assets and print them on screen](/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
