---
title: Scissor animation
slug: Web/API/WebGL_API/By_example/Scissor_animation
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Boilerplate_1","Web/API/WebGL_API/By_example/Raining_rectangles")}}

A simple WebGL example in which we have some animation fun using scissoring and clearing operations.

## Animation with scissoring

{{EmbedLiveSample("Animation_with_scissoring",660,425)}}

In this example, we are animating squares using {{domxref("WebGLRenderingContext.scissor()","scissor()")}} and {{domxref("WebGLRenderingContext.clear()","clear()")}}. We again establish an animation loop using timers. Note that this time it is the position of the square (the scissoring area) that is updated every frame (we set frame rate to roughly one every 17ms, or roughly 60fps – frames per second).

In contrast, the color of the square (set with {{domxref("WebGLRenderingContext.clearColor()","clearColor")}}) is only updated when a new square is created. This is a nice demonstration of {{Glossary("WebGL")}} as a state machine. For each square, we set its color once, and then update only its position every frame. The clear color state of WebGL remains at the set value, until we change it again when a new square is created.

```html hidden
<p>
  WebGL animation by clearing the drawing buffer with solid color and applying
  scissor test.
</p>
<button id="animation-onoff">
  Press here to <strong>[verb goes here]</strong> the animation.
</button>
```

```html hidden
<canvas>Your browser does not seem to support canvases.</canvas>
```

```css hidden
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
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js hidden
;(() => {
  "use strict";
```

```js
window.addEventListener("load", setupAnimation, false);
// Variables to hold the WebGL context, and the color and
// position of animated squares.
let gl;
let color = getRandomColor();
let position;

function setupAnimation(evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext())) return;

  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(color[0], color[1], color[2], 1.0);
  // Unlike the browser window, vertical position in WebGL is
  // measured from bottom to top. In here we set the initial
  // position of the square to be at the top left corner of the
  // drawing buffer.
  position = [0, gl.drawingBufferHeight];

  const button = document.querySelector("button");
  let timer;

  function startAnimation(evt) {
    button.removeEventListener(evt.type, startAnimation, false);
    button.addEventListener("click", stopAnimation, false);
    document.querySelector("strong").textContent = "stop";
    timer = setInterval(drawAnimation, 17);
    drawAnimation();
  }

  function stopAnimation(evt) {
    button.removeEventListener(evt.type, stopAnimation, false);
    button.addEventListener("click", startAnimation, false);
    document.querySelector("strong").textContent = "start";
    clearInterval(timer);
  }

  stopAnimation({ type: "click" });
}

// Variables to hold the size and velocity of the square.
const size = [60, 60];
let velocity = 3.0;
function drawAnimation() {
  gl.scissor(position[0], position[1], size[0], size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Every frame the vertical position of the square is
  // decreased, to create the illusion of movement.
  position[1] -= velocity;
  // When the square hits the bottom of the drawing buffer,
  // we override it with new square of different color and
  // velocity.
  if (position[1] < 0) {
    // Horizontal position chosen randomly, and vertical
    // position at the top of the drawing buffer.
    position = [
      Math.random() * (gl.drawingBufferWidth - size[0]),
      gl.drawingBufferHeight,
    ];
    // Random velocity between 1.0 and 7.0
    velocity = 1.0 + 6.0 * Math.random();
    color = getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
  }
}

function getRandomColor() {
  return [Math.random(), Math.random(), Math.random()];
}
```

```js hidden
function getRenderingContext() {
  const canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    const paragraph = document.querySelector("p");
    paragraph.textContent =
      "Failed. Your browser or device may not support WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/scissor-animation).

{{PreviousNext("Web/API/WebGL_API/By_example/Boilerplate_1","Web/API/WebGL_API/By_example/Raining_rectangles")}}
