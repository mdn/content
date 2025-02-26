---
title: Creating 3D objects using WebGL
slug: Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL
page-type: guide
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}

Let's take our square plane into three dimensions by adding five more faces to create a cube. To do this efficiently, we're going to switch from drawing using the vertices directly by calling the {{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} method to using the vertex array as a table, and referencing individual vertices in that table to define the positions of each face's vertices, by calling {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}.

Consider: each face requires four vertices to define it, but each vertex is shared by three faces. We can pass a lot fewer data around by building an array of all 24 vertices, then referring to each vertex by its index into that array instead of moving entire sets of coordinates around. If you wonder why we need 24 vertices, and not just 8, it is because each corner belongs to three faces of different colors, and a single vertex needs to have a single specific color; therefore we will create three copies of each vertex in three different colors, one for each face.

## Define the positions of the cube's vertices

First, let's build the cube's vertex position buffer by updating the code in `initBuffers()`. This is pretty much the same as it was for the square plane, but somewhat longer since there are 24 vertices (4 per side).

> [!NOTE]
> In the `initPositionBuffer()` function of your "init-buffers.js" module, replace the `positions` declaration with this code:

```js
const positions = [
  // Front face
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Back face
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];
```

Since we've added a z-component to our vertices, we need to update the `numComponents` of our `vertexPosition` attribute to 3.

> [!NOTE]
> In the `setPositionAttribute()` function of your "draw-scene.js" module, change the `numComponents` constant from `2` to `3`:

```js
const numComponents = 3;
```

## Define the vertices' colors

We also need to build an array of colors for each of the 24 vertices. This code starts by defining a color for each face, then uses a loop to assemble an array of all the colors for each of the vertices.

> [!NOTE]
> In the `initColorBuffer()` function of your "init-buffers.js" module, replace the `colors` declaration with this code:

```js
const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

// Convert the array of colors into a table for all the vertices.

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];
  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}
```

## Define the element array

Once the vertex arrays are generated, we need to build the element array.

> [!NOTE]
> In your "init-buffer.js" module, add the following function:

```js
function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
  ];

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );

  return indexBuffer;
}
```

The `indices` array defines each face like a pair of triangles, specifying each triangle's vertices as an index into the cube's vertex arrays. Thus the cube is described as a collection of 12 triangles.

Next, you need to call this new function from `initBuffers()`, and return the buffer it creates.

> [!NOTE]
> At the end of the `initBuffers()` function of your "init-buffers.js" module, add the following code, replacing the existing `return` statement:

```js
const indexBuffer = initIndexBuffer(gl);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};
```

## Drawing the cube

Next we need to add code to our `drawScene()` function to draw using the cube's index buffer, adding new {{domxref("WebGLRenderingContext.bindBuffer()", "gl.bindBuffer()")}} and {{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}} calls.

> [!NOTE]
> In your `drawScene()` function, add the following code just before the `gl.useProgram` line:

```js
// Tell WebGL which indices to use to index the vertices
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
```

> [!NOTE]
> In the `drawScene()` function of your "draw-scene.js" module, replace the block just after the two `gl.uniformMatrix4fv` calls, that contains the `gl.drawArrays()` line, with the following block:

```js
{
  const vertexCount = 36;
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
}
```

Since each face of our cube is comprised of two triangles, there are 6 vertices per side, or 36 total vertices in the cube, even though many of them are duplicates.

Finally, let's replace our variable `squareRotation` by `cubeRotation` and add a second rotation around the x axis.

> [!NOTE]
> At the start of your "webgl-demo.js" file, replace the `squareRotation` declaration with this line:

```js
let cubeRotation = 0.0;
```

> [!NOTE]
> In your `drawScene()` function declaration, replace the `squareRotation` with `cubeRotation`:

```js-nolint
function drawScene(gl, programInfo, buffers, cubeRotation) {
```

> [!NOTE]
> In your `drawScene()` function, replace the `mat4.rotate` call with the following code:

```js
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation, // amount to rotate in radians
  [0, 0, 1],
); // axis to rotate around (Z)
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation * 0.7, // amount to rotate in radians
  [0, 1, 0],
); // axis to rotate around (Y)
mat4.rotate(
  modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to rotate
  cubeRotation * 0.3, // amount to rotate in radians
  [1, 0, 0],
); // axis to rotate around (X)
```

> [!NOTE]
> In your `main()` function, replace the code that calls `drawScene()` and updates `squareRotation` to pass in and update `cubeRotation` instead:

```js
drawScene(gl, programInfo, buffers, cubeRotation);
cubeRotation += deltaTime;
```

At this point, we now have an animated cube rotating, its six faces rather vividly colored.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample5/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample5) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample5/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL", "Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL")}}
