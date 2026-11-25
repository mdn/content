---
title: Data in WebGL
slug: Web/API/WebGL_API/Data
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}

Shader programs have access to three kinds of data storage, each of which has a specific use case. Each kind of variable is accessible by one or both types of shader program (depending on the data store type) and possibly by the site's JavaScript code, depending on the specific type of variable.

## GLSL data types

See [Data Types](<https://wikis.khronos.org/opengl/Data_Type_(GLSL)>) in the GLSL documentation.

## GLSL variables

There are three kinds of "variable" or data storage available in GLSL, each of which with its own purpose and use cases: **[attributes](#attributes)**, **[varyings](#varyings)**, and **[uniforms](#uniforms)**.

### Attributes

**Attributes** are GLSL variables which are only available to the vertex shader (as variables) and the JavaScript code. Attributes are typically used to store color information, texture coordinates, and any other data calculated or retrieved that needs to be shared between the JavaScript code and the vertex shader.

```js
// init colors
// prettier-ignore
const colors = new Float32Array([
  1.0, 0.0, 0.0, 1.0, // red
  0.0, 1.0, 0.0, 1.0, // green
  0.0, 0.0, 1.0, 1.0, // blue
]);
```

```js
// continued
// create buffer to store colors and reference it to "aVertexColor" which is in GLSL
const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
const colorLocation = gl.getAttribLocation(program, "aVertexColor");
gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colorLocation);
```

```glsl
attribute vec4 aVertexColor;
varying vec4 vColor;

void main() {
  vColor = aVertexColor;
}
```

### Varyings

**Varyings** are variables that are declared by the vertex shader and used to pass data from the vertex shader to the fragment shader. This is commonly used to share a vertex's [normal vector](<https://en.wikipedia.org/wiki/Normal_(geometry)>) after it has been computed by the vertex shader.

<\<how to use>>

### Uniforms

**Uniforms** are set by the JavaScript code and are available to both the vertex and fragment shaders. They're used to provide values that will be the same for everything drawn in the frame, such as lighting positions and magnitudes, global transformation and perspective details, and so forth.

<\<add details>>

## Buffers

A buffer is a block of memory on the GPU. In JavaScript, it is represented by a {{domxref("WebGLBuffer")}} object. JavaScript usually fills it once with a typed array such as {{jsxref("Float32Array")}}. When drawing, the GPU reads directly from the buffer, without JavaScript having to send the data again for each draw call. Buffers typically hold per-vertex values such as positions, colors, normals, and texture coordinates.

To use a buffer, create it with {{domxref("WebGLRenderingContext.createBuffer()", "createBuffer()")}}, bind it to a target such as `gl.ARRAY_BUFFER`
with {{domxref("WebGLRenderingContext.bindBuffer()", "bindBuffer()")}}, and fill it with {{domxref("WebGLRenderingContext.bufferData()", "bufferData()")}}.

```js
// prettier-ignore
// x and y positions of the 3 vertices
const positions = new Float32Array([
  0.0, 0.8,   // top
  -0.8, -0.8, // bottom left
  0.8, -0.8,  // bottom right
]);

// create the buffer and store the position data
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
// reads 2 values from the buffer currently bound to ARRAY_BUFFER
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(positionLocation);

gl.drawArrays(gl.TRIANGLES, 0, 3);
```

{{domxref("WebGLRenderingContext.vertexAttribPointer()", "vertexAttribPointer()")}} connects the attribute to the buffer that is currently bound to `gl.ARRAY_BUFFER`. The second argument sets how many values the attribute reads per vertex: two here, for x and y. After that call, you can bind a different buffer without affecting the attribute. The [attributes](#attributes) example above uses the same pattern with its own color buffer.

The [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) shows more ways to use buffers, for example to store texture coordinates or vertex indices.

## Textures

<\<add information>>
