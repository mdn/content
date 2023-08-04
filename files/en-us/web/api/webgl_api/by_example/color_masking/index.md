---
title: Color masking
slug: Web/API/WebGL_API/By_example/Color_masking
page-type: guide
---

{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}

This WebGL example modifies random colors by applying color masking to limit the range of displayed colors to specific shades.

## Masking random colors

{{EmbedLiveSample("Masking_random_colors",660,425)}}

This example modifies the random color animation by applying color masking with {{domxref("WebGLRenderingContext.colorMask()","colorMask()")}}. You can think of the color masking operation as if looking at the colored canvas through some tinted glass or color filter. So, by masking off the blue and green channels, you are only allowing the red component of pixels to be updated, and therefore it is as if you were looking through a red tinted glass.

Color masking allows us to demonstrate some basics of [color theory](https://en.wikipedia.org/wiki/Color_theory). By masking off some channel(s), we are in fact biasing the displayed colors towards the complementary color. So, clearly masking both blue and red, would give us shades of green. Masking only the blue channel would give us shades of yellow (including shades of orange, brown, olive and yellow-green), the complementary of blue. Similarly, masking only green would give us shades of magenta (also purples, crimsons, and so on), and masking only red would give shades of cyan (also sea greens, blues, and so on).

Note that the calls to `colorMask()` only occur when the user clicks on one of the toggle buttons. But rendering is done every second, using the timer. The color mask state of {{Glossary("WebGL")}} is preserved, so we do not need to call `colorMask()` every frame to set up the color mask. This is an important aspect of the WebGL state machine. It allows us to setup WebGL in a single initialization phase, and then just execute drawing commands for each frame.

Color masking gives you fine control of updating pixel values on the screen. By limiting the color channels that are written by each drawing command, you can use each channel, for example, to store a different grayscale image. Alternatively, you may use the {{Glossary("RGB")}} components for color, but the alpha component for some custom pixel data of your invention.

Finally, color masking teaches us that {{Glossary("WebGL")}} is not only a state machine, it is also a _graphics pipeline_. This means that graphics operations in WebGL are done in a certain order, where the output of each operation serves as the input of the next. So, for example, clearing operation sets the value of each pixel to the chosen clear color. Masking occurs later in the pipeline, and modifies the pixel color value, so the final result on the screen is that of the clear color, tinted by the color mask.

```html
<p>Tinting the displayed colors with color masking.</p>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
<button id="red-toggle">On</button>
<button id="green-toggle">On</button>
<button id="blue-toggle">On</button>
```

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
button {
  display: inline-block;
  font-family: serif;
  font-size: inherit;
  font-weight: 900;
  color: white;
  margin: auto;
  padding: 0.6em 1.2em;
}
#red-toggle {
  background-color: red;
}
#green-toggle {
  background-color: green;
}
#blue-toggle {
  background-color: blue;
}
```

```js
window.addEventListener(
  "load",
  function setupAnimation(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupAnimation, false);

    const canvas = document.querySelector("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      document.querySelector("p").textContent =
        "Failed to get WebGL context. Your browser or device may not support WebGL.";
      return;
    }
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    const timer = setInterval(drawAnimation, 1000);

    const mask = [true, true, true];
    const redtoggle = document.querySelector("#red-toggle");
    const greentoggle = document.querySelector("#green-toggle");
    const bluetoggle = document.querySelector("#blue-toggle");
    redtoggle.addEventListener("click", setColorMask, false);
    greentoggle.addEventListener("click", setColorMask, false);
    bluetoggle.addEventListener("click", setColorMask, false);

    function setColorMask(evt) {
      const index =
        (evt.target === greentoggle && 1) ||
        (evt.target === bluetoggle && 2) ||
        0;
      mask[index] = !mask[index];
      evt.target.textContent = mask[index] ? "On" : "Off";
      gl.colorMask(mask[0], mask[1], mask[2], true);
      drawAnimation();
    }

    function drawAnimation() {
      const color = getRandomColor();
      gl.clearColor(color[0], color[1], color[2], 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/color-masking).

{{PreviousNext("Learn/WebGL/By_example/Simple_color_animation","Learn/WebGL/By_example/Basic_scissoring")}}
