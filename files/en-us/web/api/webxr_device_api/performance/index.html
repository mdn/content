---
title: WebXR performance guide
slug: Web/API/WebXR_Device_API/Performance
tags:
  - API
  - Guide
  - Performance
  - Quality
  - Scale
  - Scaling
  - WebXR
  - WebXR API
  - WebXR Device API
  - detail
  - effects
  - frame rate
  - frameRate
  - rendering
  - resolution
  - size
  - speed
---
<p>{{draft}}{{DefaultAPISidebar("WebXR Device API")}}</p>

<p>WebXR applications involve multiple technologies which can be highly sensitive to performance constraints. As such, you may find yourself needing to make adjustments or compromises to optimize the performance of your WebXR application to be as usable as possible on the broadest assortment of target devices. In this guide, we'll examine a variety of suggestions and recommendations that will help you make your WebXR app as performant as possible.</p>

<h2 id="Rendering_tips">Rendering tips</h2>

<p>...</p>

<p>Talk about general stuff like limiting how many different loops there are during rendering, avoiding unnecessary drawing, etc.</p>

<p>Can probably also include stuff from https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions</p>

<h2 id="Managing_rendering_quality">Managing rendering quality</h2>

<p>...</p>

<p>This section will come in part from https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality</p>

<h2 id="Managing_frame_rate">Managing frame rate</h2>

<p>...</p>

<h2 id="Managing_use_of_depth">Managing use of depth</h2>

<p>...</p>

<p>This section will combine information from https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision and https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer</p>

<h2 id="Optimizing_memory_use">Optimizing memory use</h2>

<p>When using libraries that perform things such as matrix mathematics, you typically have a number of working variables through which various vectors, matrices, and quaternions pass over time. It makes sense, then, to have a limited set of these objects, replacing their contents with the new information each time you need to use them. They can be thought of as being similar to the registers in a microprocessor: a limited set of memory storage slots for specific kinds of data or use cases.</p>

<p>While an individual vector or matrix doesn't occupy an inordinate amount of memory, the sheer number of vectors and matrices and other structures that are used to build each frame of a 3D scene means the memory management becomes a problem eventually if you keep allocating and de-allocating memory objects.</p>

<p>Consider the following</p>

<pre>function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  ...
  for (object in scene) {
    let vertexList = ...
    let normalMatrix = mat4.create();
    let modelViewMatrix = mat4.create();
    let objectMatrix = mat4.

    // Apply rotation updates to the object if needed

    mat4.rotate(
  }
}</pre>

<p>This renders a scene. But it's inefficient, because it allocates as local variables a number of things, including at least two matrices, an array of vertices, and more. That means that for every frame, the JavaScript runtime has to allocate memory for those and set them up—possibly triggering garbage collection—and then when each interaction of the loop is completed, the memory is released.</p>

<p>A simple change can optimize this significantly:</p>

<pre>const vertexList = ...
const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  ...
  for (object in scene) {
    ...
  }
}</pre>

<p>Now, instead of allocating variables every loop iteration, we're using global constants(or class member constants). This has multiple benefits:</p>

<ul>
 <li>The memory allocated for each value or structure will not need to be reallocated every frame. This reduces the potential for triggering garbage collection, and optimizes memory use.</li>
 <li>You can't accidentally delete the objects that contain your vectors and matrices, since they're constants.</li>
 <li>You can, however, still replace the <em>contents</em> of each of these objects, so they're reusable.</li>
</ul>

<p>You're now protected from several possible coding mistakes, and your entire animation will be smoother and more performant as well.</p>

<h2 id="See_also">See also</h2>

<p>...</p>
