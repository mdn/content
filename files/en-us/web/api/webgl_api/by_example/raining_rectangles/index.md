---
title: Raining rectangles
slug: Web/API/WebGL_API/By_example/Raining_rectangles
page-type: guide
tags:
  - Beginner
  - Example
  - Game
  - Graphics
  - Learn
  - Scissoring
  - Tutorial
  - WebGL
---
{{PreviousNext("Learn/WebGL/By_example/Scissor_animation","Learn/WebGL/By_example/Hello_GLSL")}}

A simple WebGL game that demonstrates clearing with solid colors, scissoring, animation, and user interaction.

## Animation and user interaction with scissoring

{{EmbedLiveSample("Animation_and_user_interaction_with_scissoring",660,425)}}

This is a simple game. The objective: try to catch as many of the raining rectangles as you can by clicking on them. In this example, we use an object-oriented approach for the displayed rectangles, which helps to keep the state of the rectangle (its position, color, and so on) organized in one place, and the overall code more compact and reusable.

This example combines clearing the drawing buffer with solid colors and scissoring operations. It is a preview of a full graphical application that manipulates various phases of the {{Glossary("WebGL")}} graphics pipeline and state machine.

In addition, the example demonstrates how to integrate the WebGL function calls within a game loop. The game loop is responsible for drawing the animation frames, and keeping the animation responsive to user input. Here, the game loop is implemented using timeouts.

```html hidden
<p>You caught <strong>0</strong>. You missed <strong>0</strong>.</p>
```

```html hidden
<canvas>Your browser does not seem to support canvases.</canvas>
```

```css hidden
body {
  text-align : center;
}
canvas {
  display : block;
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
```

```js hidden
;(() => {
  "use strict";
```

```js
window.addEventListener("load", setupAnimation, false);
let gl;
let timer;
let rainingRect;
let scoreDisplay;
let missesDisplay;
function setupAnimation(evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext())) return;
  gl.enable(gl.SCISSOR_TEST);

  rainingRect = new Rectangle();
  timer = setTimeout(drawAnimation, 17);
  document
    .querySelector("canvas")
    .addEventListener("click", playerClick, false);
  [scoreDisplay, missesDisplay] = document.querySelectorAll("strong");
}

let score = 0;
let misses = 0;
function drawAnimation() {
  gl.scissor(
    rainingRect.position[0],
    rainingRect.position[1],
    rainingRect.size[0],
    rainingRect.size[1],
  );
  gl.clear(gl.COLOR_BUFFER_BIT);
  rainingRect.position[1] -= rainingRect.velocity;
  if (rainingRect.position[1] < 0) {
    misses += 1;
    missesDisplay.textContent = misses;
    rainingRect = new Rectangle();
  }
  // We are using setTimeout for animation. So we reschedule
  // the timeout to call drawAnimation again in 17ms.
  // Otherwise we won't get any animation.
  timer = setTimeout(drawAnimation, 17);
}

function playerClick(evt) {
  // We need to transform the position of the click event from
  // window coordinates to relative position inside the canvas.
  // In addition we need to remember that vertical position in
  // WebGL increases from bottom to top, unlike in the browser
  // window.
  const position = [
    evt.pageX - evt.target.offsetLeft,
    gl.drawingBufferHeight - (evt.pageY - evt.target.offsetTop),
  ];
  // If the click falls inside the rectangle, we caught it.

  // Increment score and create a new rectangle.
  const diffPos = [
    position[0] - rainingRect.position[0],
    position[1] - rainingRect.position[1],
  ];
  if (diffPos[0] >= 0 && diffPos[0] < rainingRect.size[0]
      && diffPos[1] >= 0 && diffPos[1] < rainingRect.size[1]) {
    score += 1;
    scoreDisplay.textContent = score;
    rainingRect = new Rectangle();
  }
}

function Rectangle() {
  // Keeping a reference to the new Rectangle object, rather
  // than using the confusing this keyword.
  const rect = this;
  // We get three random numbers and use them for new rectangle
  // size and position. For each we use a different number,
  // because we want horizontal size, vertical size and
  // position to be determined independently.
  const randNums = getRandomVector();
  rect.size = [
    5 + 120 * randNums[0],
    5 + 120 * randNums[1],
  ];
  rect.position = [
    randNums[2] * (gl.drawingBufferWidth - rect.size[0]),
    gl.drawingBufferHeight,
  ];
  rect.velocity = 1.0 + 6.0 * Math.random();
  rect.color = getRandomVector();
  gl.clearColor(rect.color[0], rect.color[1], rect.color[2], 1.0);
  function getRandomVector() {
    return [Math.random(), Math.random(), Math.random()];
  }
}
```

```js hidden
function getRenderingContext() {
  const canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    const paragraph = document.querySelector("p");
    paragraph.textContent = "Failed. Your browser or device may not support WebGL.";
    return null;
  }
  gl.viewport(
    0,
    0,
    gl.drawingBufferWidth,
    gl.drawingBufferHeight,
  );
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/raining-rectangles).

{{PreviousNext("Learn/WebGL/By_example/Scissor_animation","Learn/WebGL/By_example/Hello_GLSL")}}
