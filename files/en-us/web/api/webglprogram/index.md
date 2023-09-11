---
title: WebGLProgram
slug: Web/API/WebGLProgram
page-type: web-api-interface
browser-compat: api.WebGLProgram
---

{{APIRef("WebGL")}}

The **`WebGLProgram`** is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and is a combination of two compiled {{domxref("WebGLShader")}}s consisting of a vertex shader and a fragment shader (both written in GLSL).

{{InheritanceDiagram}}

To create a `WebGLProgram`, call the GL context's {{domxref("WebGLRenderingContext.createProgram", "createProgram()")}} function. After attaching the shader programs using {{domxref("WebGLRenderingContext.attachShader", "attachShader()")}}, you link them into a usable program. This is shown in the code below.

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}
```

See {{domxref("WebGLShader")}} for information on creating the `vertexShader` and `fragmentShader` in the above example.

## Examples

### Using the program

The steps to actually do some work with the program involve telling the GPU to use the program, bind the appropriate data and configuration options, and finally draw something to the screen.

```js
// Use the program
gl.useProgram(program);

// Bind existing attribute data
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Draw a single triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### Deleting the program

If there is an error linking the program or you wish to delete an existing program, then it is as simple as running {{domxref("WebGLRenderingContext.deleteProgram()")}}. This frees the memory of the linked program.

```js
gl.deleteProgram(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
