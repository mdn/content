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

**Attributes** are GLSL variables that pass data to the vertex shader on a per-vertex basis: each vertex gets its own value. Only the vertex shader can declare attributes, and it can only read them. Attributes are typically used for vertex positions, colors, normals, and texture coordinates.

The JavaScript code usually supplies an attribute's values in a [buffer](#buffers). In the following example, the color of each vertex is stored in a buffer and connected to the `aVertexColor` attribute:

```js
// one RGBA color per vertex
// prettier-ignore
const colors = new Float32Array([
  1.0, 0.0, 0.0, 1.0, // red
  0.0, 1.0, 0.0, 1.0, // green
  0.0, 0.0, 1.0, 1.0, // blue
]);

// store the colors in a buffer and connect it to the aVertexColor attribute
const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
const colorLocation = gl.getAttribLocation(program, "aVertexColor");
gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colorLocation);
```

The vertex shader declares the attribute and reads its value. Here, it passes the color on to the fragment shader through the `vColor` [varying](#varyings):

```glsl
// Vertex shader
attribute vec4 aVertexColor;
varying vec4 vColor;

void main() {
  vColor = aVertexColor;
}
```

### Varyings

**Varyings** are variables that are used to pass data from the vertex shader to the fragment shader. This is commonly used to share a vertex's [normal vector](<https://en.wikipedia.org/wiki/Normal_(geometry)>) after it has been computed by the vertex shader.

A varying is declared in both shaders with the same name and type; otherwise, the program fails to link. The vertex shader writes a value to it for each vertex. The fragment shader can only read it, and the value it gets for each fragment is interpolated between the vertices of the primitive being drawn.

In the following example, the vertex shader copies the color of each vertex from the `aVertexColor` [attribute](#attributes) into the `vColor` varying:

```glsl
// Vertex shader
attribute vec2 aVertexPosition;
attribute vec4 aVertexColor;

varying vec4 vColor;

void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
  vColor = aVertexColor;
}
```

```glsl
// Fragment shader
precision mediump float;

varying vec4 vColor;

void main() {
  gl_FragColor = vColor;
}
```

Because the colors are interpolated, a triangle with a red, a green, and a blue vertex is drawn with smooth color gradients between its corners.

### Uniforms

**Uniforms** are set by the JavaScript code and are available to both the vertex and fragment shaders. Shaders can only read them. They're used to provide values that are the same for all vertices and fragments in a single draw call, such as lighting positions and magnitudes, transformation matrices, and so forth.

The following fragment shader extends the one from the [varyings](#varyings) example with a `uBrightness` uniform that darkens every color by the same factor:

```glsl
// Fragment shader
precision mediump float;

uniform float uBrightness;

varying vec4 vColor;

void main() {
  gl_FragColor = vec4(vColor.rgb * uBrightness, vColor.a);
}
```

```js
gl.useProgram(program);

const brightnessLocation = gl.getUniformLocation(program, "uBrightness");
gl.uniform1f(brightnessLocation, 0.5);
```

Uniform values belong to a shader program, and {{domxref("WebGLRenderingContext.uniform()", "uniform1f()")}} sets the value in the program that is currently in use. That's why the example calls {{domxref("WebGLRenderingContext.useProgram()", "useProgram()")}} first. A uniform keeps its value until you change it, so you can update it between two draw calls, for example to draw several objects with different transformations. The sampler that reads a [texture](#textures) is also a uniform.

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

A texture holds image data on the GPU. In JavaScript, it is represented by a {{domxref("WebGLTexture")}} object. To use a texture, create it with {{domxref("WebGLRenderingContext.createTexture()", "createTexture()")}}, bind it to a target such as `gl.TEXTURE_2D` with {{domxref("WebGLRenderingContext.bindTexture()", "bindTexture()")}}, and fill it with {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, for example from an image, a canvas, a video, or a typed array.

Textures use all three kinds of GLSL variables. The texture itself is accessed through a [uniform](#uniforms) of type `sampler2D`, because it is the same for every fragment. The texture coordinates are an [attribute](#attributes) with one value per vertex. The vertex shader passes them on as a [varying](#varyings), so each fragment gets an interpolated coordinate. The fragment shader then reads the color at that coordinate with `texture2D()`:

```glsl
// Fragment shader
precision mediump float;

uniform sampler2D uSampler;

varying vec2 vTextureCoord;

void main() {
  gl_FragColor = texture2D(uSampler, vTextureCoord);
}
```

```js
// select texture unit 0 and bind the texture to it
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, texture);

// tell the sampler uniform to read from texture unit 0
const samplerLocation = gl.getUniformLocation(program, "uSampler");
gl.uniform1i(samplerLocation, 0);
```

A sampler uniform doesn't hold the texture itself, but the number of a texture unit. {{domxref("WebGLRenderingContext.activeTexture()", "activeTexture()")}} selects the unit that the next `bindTexture()` call binds the texture to, and {{domxref("WebGLRenderingContext.uniform()", "uniform1i()")}} sets the sampler to the same unit number.

For loading textures from images, filtering, and wrapping, see [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
