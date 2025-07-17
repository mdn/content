---
title: WebXR performance guide
slug: Web/API/WebXR_Device_API/Performance
page-type: guide
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR applications involve multiple technologies which can be highly sensitive to performance constraints. As such, you may find yourself needing to make adjustments or compromises to optimize the performance of your WebXR application to be as usable as possible on the broadest assortment of target devices. In this guide, we'll examine a variety of suggestions and recommendations that will help you make your WebXR app as performant as possible.

## Rendering tips

Talk about general stuff like limiting how many different loops there are during rendering, avoiding unnecessary drawing, etc.

Can probably also include stuff from this [explainer in the spec repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions)

## Managing rendering quality

This section will come in part from this [explainer in the spec repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality)

## Managing frame rate

Content about frame rate management.

## Managing use of depth

This section will combine information from this [explainer](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision) and this [one](https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer), in the spec repository.

## Optimizing memory use

When using libraries that perform things such as matrix mathematics, you typically have a number of working variables through which various vectors, matrices, and quaternions pass over time. It makes sense, then, to have a limited set of these objects, replacing their contents with the new information each time you need to use them. They can be thought of as being similar to the registers in a microprocessor: a limited set of memory storage slots for specific kinds of data or use cases.

While an individual vector or matrix doesn't occupy an inordinate amount of memory, the sheer number of vectors and matrices and other structures that are used to build each frame of a 3D scene means the memory management becomes a problem eventually if you keep allocating and de-allocating memory objects.

Consider the following:

```js
function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  // …
  for (const object in scene) {
    const vertexList = [
      /* … */
    ];
    const normalMatrix = mat4.create();
    const modelViewMatrix = mat4.create();
    const objectMatrix = mat4.create();

    // Apply rotation updates to the object if needed

    mat4.rotate(/* … */);
  }
}
```

This renders a scene. But it's inefficient, because it allocates as local variables a number of things, including at least two matrices, an array of vertices, and more. That means that for every frame, the JavaScript runtime has to allocate memory for those and set them up—possibly triggering garbage collection—and then when each interaction of the loop is completed, the memory is released.

A simple change can optimize this significantly:

```js
const vertexList = [
  /* … */
];
const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  // …
  for (const object in scene) {
    // …
  }
}
```

Now, instead of allocating variables every loop iteration, we're using global constants(or class member constants). This has multiple benefits:

- The memory allocated for each value or structure will not need to be reallocated every frame. This reduces the potential for triggering garbage collection, and optimizes memory use.
- You can't accidentally delete the objects that contain your vectors and matrices, since they're constants.
- You can, however, still replace the _contents_ of each of these objects, so they're reusable.

You're now protected from several possible coding mistakes, and your entire animation will be smoother and more performant as well.
