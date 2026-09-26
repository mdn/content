---
title: Initialize the canvas
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas
page-type: guide
sidebar: games
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Load_the_assets_and_print_them_on_screen")}}

This is the first of 15 tutorials to learn how to use [create a Breakout game in pure JavaScript](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Before we can start writing the game's functionality, we need to create a basic structure to render the game inside. This can be done using the {{htmlelement("canvas")}} element.

## The game's HTML

The HTML document structure is quite simple, as the game will be rendered entirely on the {{htmlelement("canvas")}} element. Using your favorite text editor, create a new HTML document, save it as `index.html`, in a sensible location, and add the following code to it:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Breakout game</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/script.js" defer></script>
  </head>
  <body>
    <canvas id="game-canvas" width="480" height="320"></canvas>
  </body>
</html>
```

And create a new `js` directory in the same location as your `index.html` file, and create a new file called `script.js` inside it. This is where we will write the JavaScript code that controls the game. Initially it should contain the following:

```js
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, 480, 320);
```

## Walking through what we have so far

At this point, we have a `charset` defined, {{htmlelement("title")}}, and some basic CSS in the header to reset the default `margin` and `padding`. The head contains a {{htmlelement("script")}} element, which references the JavaScript code we will write to render the game and control it.

The {{htmlelement("canvas")}} element is where the game is actually rendered. Initially, it is empty, and occupies 480x320 pixels. We use {{domxref("HTMLCanvasElement.getContext()")}} to get the {{domxref("CanvasRenderingContext2D")}} which allows us to draw 2D shapes on the canvas, and we make it fill the entire canvas space with a really light gray color.

## Scaling

Currently, the canvas takes up a fixed amount of screen space. On a large screen (like a laptop), it sits in a small corner; on a small screen (like a phone—though it has to be a really small phone!) it overflows. We can make the game scale to fit on any screen size by making the canvas responsive, so we don't have to worry about it later. We'll enlarge or shrink the canvas such that:

1. Its aspect ratio is preserved
2. Either its width equals the window width or its height equals the window height
3. The other dimension does not overflow

We do this by adding the following CSS to the `<style>` element in `index.html`:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

The canvas has an aspect ratio of 480 / 320, or 3:2. To fit within the window, its width must be no greater than the window width (`100vw`) or 1.5 times the window height (`150vh`). The CSS {{CSSxRef("min()")}} function selects the smaller of these two values. With `height: auto`, the height follows the canvas's aspect ratio, so both dimensions fit within the window. The body fills at least the window height and uses `place-items: center` to center the canvas both horizontally and vertically.

This CSS changes the canvas's displayed size, while its HTML `width` and `height` attributes keep the drawing area at 480×320 pixels. We can therefore keep using the same coordinates in our JavaScript regardless of the window size. The browser scales the resulting image to fit the displayed size.

## Running the application

To run the app, you can directly open the `index.html` file, but we recommend a local web server just in case we want to load external assets, which will be blocked by the browser's [same-origin policy](/en-US/docs/Web/Security/Defenses/Same-origin_policy).

Check out [tutorials for setting up a local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), and use any option you prefer. For example, if you choose to use the Python HTTP server, then open a terminal, navigate to the directory where your `index.html` file is located, and run the following command:

```bash
python3 -m http.server
```

This will start a simple HTTP server on port 8000. Then, open your web browser and navigate to `http://localhost:8000/index.html`.

## Compare your code

Here's what you should have so far, running live. To view its source code, click the "Play" button.

```html hidden
<canvas id="game-canvas" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, 480, 320);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Next steps

Now we've set up the basic HTML, let's continue to the second lesson and work out how to [load the assets and print them on screen](/en-US/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Load_the_assets_and_print_them_on_screen).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Load_the_assets_and_print_them_on_screen")}}
