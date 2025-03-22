---
title: Create the Canvas and draw on it
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
page-type: guide
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

This is the **1st step** out of 10 of the [Gamedev Canvas tutorial](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). You can find the source code as it should look after completing this lesson at [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Before we can start writing the game's functionality, we need to create a basic structure to render the game inside. This can be done using HTML and the {{htmlelement("canvas")}} element.

## The game's HTML

The HTML document structure is quite minimal, as the game will be rendered entirely on the {{htmlelement("canvas")}} element. Using your favorite text editor, create a new HTML document, save it as `index.html`, in a sensible location, and add the following code to it:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // JavaScript code goes here
    </script>
  </body>
</html>
```

We have a `charset` defined, {{htmlelement("title")}} and some basic CSS in the header. The body contains {{htmlelement("canvas")}} and {{htmlelement("script")}} elements — we will render the game inside the first one and write the JavaScript code that controls it in the second one. The {{htmlelement("canvas")}} element has an `id` of `myCanvas` to allow us to easily grab a reference to it, and it is 480 pixels wide and 320 pixels high. All the JavaScript code we will write in this tutorial will go between the opening `<script>` and closing `</script>` tags.

## Canvas basics

To actually be able to render graphics on the {{htmlelement("canvas")}} element, first we have to grab a reference to it in JavaScript. Add the following below your opening `<script>` tag.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Here we're storing a reference to the {{htmlelement("canvas")}} element to the `canvas` variable. Then we're creating the `ctx` variable to store the 2D rendering context — the actual tool we can use to paint on the Canvas.

Let's see an example piece of code that prints a red square on the canvas. Add this below your previous lines of JavaScript, then load your `index.html` in a browser to try it out.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

All the instructions are between the {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} and {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} methods. We are defining a rectangle using {{domxref("CanvasRenderingContext2D.rect()","rect()")}}: the first two values specify the coordinates of the top left corner of the rectangle on the canvas, while the second two specify the width and height of the rectangle. In our case the rectangle is painted 20 pixels from the left side of the screen and 40 pixels from the top side, and is 50 pixels wide and 50 pixels high, which makes it a perfect square. The {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} property stores a color that will be used by the {{domxref("CanvasRenderingContext2D.fill()","fill()")}} method to paint the square, in our case, red.

We're not limited to rectangles — here's a piece of code for printing out a green circle. Try adding this to the bottom of your JavaScript, saving and refreshing:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

As you can see we're using the {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} and {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} methods again. Between them, the most important part of the code above is the {{domxref("CanvasRenderingContext2D.arc()","arc()")}} method. It takes six parameters:

- `x` and `y` coordinates of the arc's center
- arc radius
- start angle and end angle (what angle to start and finish drawing the circle, in radians)
- direction of drawing (`false` for clockwise, the default, or `true` for anti-clockwise.) This last parameter is optional.

The {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} property looks different than before. This is because, just as with CSS, color can be specified as a hexadecimal value, a color keyword, the `rgb()` function, or any of the other available color methods.

Instead of using {{domxref("CanvasRenderingContext2D.fill()","fill()")}} and filling the shapes with colors, we can use {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} to only color the outer stroke. Try adding this code to your JavaScript too:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

The code above prints a blue-stroked empty rectangle. Thanks to the alpha channel in the `rgb()` function, the blue color is semi transparent.

## Compare your code

Here's the full source code of the first lesson, running live:

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
```

```css
canvas {
  background: #eee;
}
```

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 0.5)";
ctx.stroke();
ctx.closePath();
```

{{embedlivesample("compare_your_code", 600, 340)}}

> [!NOTE]
> Try changing the size and color of the given shapes.

## Next steps

Now we've set up the basic HTML and learned a bit about canvas, lets continue to the second chapter and work out how to [Move the ball in our game](/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
