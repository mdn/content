---
title: Getting started with WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
page-type: guide
tags:
  - Tutorial
  - WebGL
---
{{WebGLSidebar("Tutorial")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](/en-US/docs/Web/API/WebGL_API) enables web content to use an API based on [OpenGL ES](https://www.khronos.org/opengles/) 2.0 to perform 2D and 3D rendering in an HTML [`canvas`](/en-US/docs/Web/API/Canvas_API) in browsers that support it without the use of plug-ins.

WebGL programs consist of control code written in JavaScript and shader code (GLSL) that is executed on a computer's Graphics Processing Unit (GPU). WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background.

This article will introduce you to the basics of using WebGL. It's assumed that you already have an understanding of the mathematics involved in 3D graphics, and this article doesn't pretend to try to teach you 3D graphics concepts itself.

The code examples in this tutorial can also be found in the [webgl-examples folder on GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial).

It's worth noting here that this series of articles introduces WebGL itself; however, there are a number of frameworks available that encapsulate WebGL's capabilities, making it easier to build 3D applications and games, such as [THREE.js](https://threejs.org/) and [BABYLON.js](https://www.babylonjs.com/).

## Preparing to render in 3D

The first thing you need in order to use WebGL for rendering is a canvas. The HTML fragment below declares a canvas that our sample will draw into.

```html
<body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
</body>
```

### Preparing the WebGL context

The `main()` function in our JavaScript code, is called when our script is loaded. Its purpose is to set up the WebGL context and start rendering content.

```js
//
// start here
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
```

The first thing we do here is obtain a reference to the canvas, assigning it to a variable named `canvas`.

Once we have the canvas, we try to get a [`WebGLRenderingContext`](/en-US/docs/Web/API/WebGLRenderingContext) for it by calling [`getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext) and passing it the string `"webgl"`. If the browser does not support WebGL, `getContext()` will return `null` in which case we display a message to the user and exit.

If the context is successfully initialized, the variable `gl` is our reference to it. In this case, we set the clear color to black, and clear the context to that color (redrawing the canvas with the background color).

At this point, you have enough code that the WebGL context should successfully initialize, and you should wind up with a big black, empty box, ready and waiting to receive content.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [Open this demo on a new page](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## See also

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/): Written by Luz Caballero, published at dev.opera.com. This article addresses what WebGL is, explains how WebGL works (including the rendering pipeline concept), and introduces some WebGL libraries.
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [An intro to modern OpenGL:](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents) A series of nice articles about OpenGL written by Joe Groff, providing a clear introduction to OpenGL from its history to the important graphics pipeline concept, and also includes some examples to demonstrate how OpenGL works. If you have no idea what OpenGL is, this is a good place to start.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
