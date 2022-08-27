---
title: Animating objects with WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
page-type: guide
tags:
  - Tutorial
  - WebGL
---
{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}

> **Note:** This example uses the glMatrix library to perform its matrix and vertex math. You'll need to include it if you create your own project based on this code. Our sample loads a copy from a CDN in our HTML's {{HTMLElement("head")}}.

## Making the square rotate

In this example, we'll actually rotate our camera. By doing so, it will look as if we are rotating the square. The first thing we'll need is a variable in which to track the current rotation of the camera:

```js
let squareRotation = 0.0;
```

Now we need to update the `drawScene()` function to apply the current rotation to the camera when drawing it. After translating the camera to the initial drawing position for the square, we apply the rotation like this:

```js
  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0.0, 0.0, -6.0]);  // amount to translate
  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              squareRotation,   // amount to rotate in radians
              [0, 0, 1]);       // axis to rotate around
```

This rotates the modelViewMatrix by the current value of `squareRotation`, around the Z axis.

To actually animate, we need to add code that changes the value of `squareRotation` over time. We can do that by creating a new variable to track the time at which we last animated (let's call it `then`), then adding the following code to the end of the main function

```js
  let then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
```

This code uses `requestAnimationFrame` to ask the browser to call the function "`render`" on each frame. `requestAnimationFrame` passes us the time in milliseconds since the page loaded. We convert that to seconds and then subtract from it the last time to compute `deltaTime` which is the number of second since the last frame was rendered. At the end of drawscene we add the code to update `squareRotation.`

```js
squareRotation += deltaTime;
```

This code uses the amount of time that's passed since the last time we updated the value of `squareRotation` to determine how far to rotate the square.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample4/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample4) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample4/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}
