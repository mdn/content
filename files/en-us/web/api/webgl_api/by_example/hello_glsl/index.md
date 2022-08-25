---
title: Hello GLSL
slug: Web/API/WebGL_API/By_example/Hello_GLSL
page-type: guide
tags:
  - Beginner
  - Example
  - GLSL
  - Graphics
  - Learn
  - Shaders
  - Tutorial
  - WebGL
---
{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}

This WebGL example demonstrates a very basic GLSL shader program that draws a solid color square.

> **Note:** This example will most likely work in all modern desktop browsers. But it may not work in some mobile or older browsers. If the canvas remains blank, you can check the output of the next example, which draws exactly the same thing. But remember to read through the explanations and code on this page, before moving on to the next.

## Hello World program in GLSL

{{EmbedLiveSample("Hello_World_program_in_GLSL",660,425)}}

A very simple first shader program.

```html hidden
<p>Hello World! Hello GLSL!</p>
```

```html hidden
<canvas>Your browser does not seem to support
    HTML canvas.</canvas>
```

```css hidden
body {
  text-align : center;
}
canvas {
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

```html
<script type="x-shader/x-vertex" id="vertex-shader">
#version 100
void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 64.0;
}
</script>
```

```html
<script type="x-shader/x-fragment" id="fragment-shader">
#version 100
void main() {
  gl_FragColor = vec4(0.18, 0.54, 0.34, 1.0);
}
</script>
```

```js hidden
;(() => {
  "use strict";
```

```js
window.addEventListener("load", setupWebGL, false);
let gl;
let program;

function setupWebGL (evt) {
  window.removeEventListener(evt.type, setupWebGL, false);
  if (!(gl = getRenderingContext())) return;

  let source = document.querySelector("#vertex-shader").innerHTML;
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader,source);
  gl.compileShader(vertexShader);

  source = document.querySelector("#fragment-shader").innerHTML;
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader,source);
  gl.compileShader(fragmentShader);
  program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.detachShader(program, vertexShader);
  gl.detachShader(program, fragmentShader);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const linkErrLog = gl.getProgramInfoLog(program);
    cleanup();
    document.querySelector("p").textContent = `Shader program did not link successfully. Error log: ${linkErrLog}`;
    return;
  }

  initializeAttributes();

  gl.useProgram(program);
  gl.drawArrays(gl.POINTS, 0, 1);

  cleanup();
}

let buffer;
function initializeAttributes() {
  gl.enableVertexAttribArray(0);
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
}

function cleanup() {
  gl.useProgram(null);
  if (buffer) {
    gl.deleteBuffer(buffer);
  }
  if (program) {
    gl.deleteProgram(program);
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
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/hello-glsl).

{{PreviousNext("Learn/WebGL/By_example/Raining_rectangles","Learn/WebGL/By_example/Hello_vertex_attributes")}}
