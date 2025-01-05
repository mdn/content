---
title: Boilerplate 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Canvas_size_and_WebGL","Web/API/WebGL_API/By_example/Scissor_animation")}}

This example describes repeated pieces of code that will be hidden from now on, as well as defining a JavaScript utility function to make WebGL initialization easier.

## Boilerplate code for setting up WebGL rendering context

By now you are quite used to seeing the same pieces of {{Glossary("HTML")}}, {{Glossary("CSS")}}, and {{Glossary("JavaScript")}} repeated again and again. So we are going to hide them from now on. This would allow us to focus on the interesting pieces of code that are most relevant for learning {{Glossary("WebGL")}}.

Specifically, the HTML has a {{HTMLElement("p")}} element that contains some descriptive text about the page and may also hold error messages; a {{HTMLElement("canvas")}} element; and optionally a {{HTMLElement("button")}}. The CSS contains rules for `body`, `canvas`, and `button`. Any additional non-trivial CSS and HTML will be displayed on the pages of specific examples.

In following examples, we will use a JavaScript helper function, `getRenderingContext()`, to initialize the {{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}}. By now, you should be able to understand what the function does. Basically, it gets the WebGL rendering context from the canvas element, initializes the drawing buffer, clears it black, and returns the initialized context. In case of error, it displays an error message and returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

Finally, all JavaScript code will run within an immediate function, which is a common JavaScript technique (see {{Glossary("Function")}}). The function declaration and invocation will also be hidden.

### HTML

```html
<p>[ Some descriptive text about the example. ]</p>
<button>[ Optional button element. ]</button>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
```

### CSS

```css
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

### JavaScript

```js
function getRenderingContext() {
  const canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    const paragraph = document.querySelector("p");
    paragraph.textContent =
      "Failed to get WebGL context. Your browser or device may not support WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/boilerplate-1).

{{PreviousNext("Web/API/WebGL_API/By_example/Canvas_size_and_WebGL","Web/API/WebGL_API/By_example/Scissor_animation")}}
