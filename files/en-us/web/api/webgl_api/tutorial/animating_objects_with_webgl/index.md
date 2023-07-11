---
title: Animating objects with WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
page-type: guide
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

## Making the square rotate

In this example, we'll actually rotate our camera. By doing so, it will look as if we are rotating the square. First we'll need some variables in which to track the current rotation of the camera.

> **Note:** Add this code at the start of your "webgl-demo.js" script:

```js
let squareRotation = 0.0;
let deltaTime = 0;
```

Now we need to update the `drawScene()` function to apply the current rotation to the camera when drawing it. After translating the camera to the initial drawing position for the square, we apply the rotation.

> **Note:** In your "draw-scene.js" module, update the declaration of your `drawScene()` function so it can be passed the rotation to use:

```js-nolint
function drawScene(gl, programInfo, buffers, squareRotation) {
```

> **Note:** In your `drawScene()` function, right after the line `mat4.translate()` call, add this code:

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  squareRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around
```

This rotates the modelViewMatrix by the current value of `squareRotation`, around the Z axis.

To actually animate, we need to add code that changes the value of `squareRotation` over time.

> **Note:** Add this code at the end of your `main()` function, replacing the existing `drawScene()` call:

```js
let then = 0;

// Draw the scene repeatedly
function render(now) {
  now *= 0.001; // convert to seconds
  deltaTime = now - then;
  then = now;

  drawScene(gl, programInfo, buffers, squareRotation);
  squareRotation += deltaTime;

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
```

This code uses `requestAnimationFrame` to ask the browser to call the function "`render`" on each frame. `requestAnimationFrame` passes us the time in milliseconds since the page loaded. We convert that to seconds and then subtract from it the last time to compute `deltaTime`, which is the number of second since the last frame was rendered.

Finally, we update `squareRotation`.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
