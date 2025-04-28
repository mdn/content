---
title: WebGLShader
slug: Web/API/WebGLShader
page-type: web-api-interface
browser-compat: api.WebGLShader
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **WebGLShader** is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and can either be a vertex or a fragment shader. A {{domxref("WebGLProgram")}} requires both types of shaders.

{{InheritanceDiagram}}

## Description

To create a **WebGLShader** use {{domxref("WebGLRenderingContext.createShader")}}, then hook up the GLSL source code using {{domxref("WebGLRenderingContext.shaderSource()")}}, and finally invoke {{domxref("WebGLRenderingContext.compileShader()")}} to finish and compile the shader. At this point the **WebGLShader** is still not in a usable form and must still be attached to a {{domxref("WebGLProgram")}}.

```js
function createShader(gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  const shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw `Could not compile WebGL program. \n\n${info}`;
  }
  return shader;
}
```

See {{domxref("WebGLProgram")}} for information on attaching the shaders.

## Examples

### Creating a vertex shader

Note that there are many other strategies for writing and accessing shader source code strings. These example are for illustration purposes only.

```js
const vertexShaderSource =
  "attribute vec4 position;\n" +
  "void main() {\n" +
  "  gl_Position = position;\n" +
  "}\n";

// Use the createShader function from the example above
const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
```

### Creating a fragment shader

```js
const fragmentShaderSource =
  "void main() {\n" + "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" + "}\n";

// Use the createShader function from the example above
const fragmentShader = createShader(
  gl,
  fragmentShaderSource,
  gl.FRAGMENT_SHADER,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
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
