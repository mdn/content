---
title: Basic scissoring
slug: Web/API/WebGL_API/By_example/Basic_scissoring
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}

In this example, we see how to draw rectangles and squares using WebGL scissoring operations. Scissoring establishes a clipping region outside which drawing will not occur.

## Clearing the drawing buffer when scissoring applies

{{EmbedLiveSample("Clearing_the_drawing_buffer_when_scissoring_applies",660,425)}}

This is a demonstration of a rendering with {{domxref("WebGLRenderingContext.scissor","scissor()")}}.

Although the {{domxref("WebGLRenderingContext.clear","clear()")}} drawing command writes the clear color (set by {{domxref("WebGLRenderingContext.clearColor","clearColor()")}}) to all pixels in the drawing buffer, {{domxref("WebGLRenderingContext.scissor","scissor()")}} defines a mask that only allows pixels inside the specified rectangular area to be updated.

This is a good opportunity to talk about the difference between pixels and _fragments_. A pixel is a picture element (in practice, a point) on the screen, or a single element of the drawing buffer, that area in memory that holds your pixel data (such as {{Glossary("RGB")}} color components). A _fragment_ refers to the pixel while it is being handled by the {{Glossary("WebGL")}} pipeline.

The reason for this distinction is that fragment color (and other fragment values, such as depth) may be manipulated and changed several times during graphics operations before finally being written to the screen. We have already seen how fragment color changes during graphics operations, by applying {{domxref("WebGLRenderingContext.colorMask()","color masking", "", 1)}}. In other cases, the fragments may be discarded altogether (so the pixel value is not updated), or it may interact with the already existing pixel value (such as when doing color blending for non-opaque elements in the scene).

Here we see another example of the distinction between fragments and pixels. Scissoring is a distinct stage in the {{Glossary("WebGL")}}/{{Glossary("OpenGL")}} graphics pipeline (it occurs after color clearing, but before color masking). Before the actual pixels are updated, fragments must go through the scissor test. If the fragments pass the scissor test, they continue down the graphics pipeline, and the corresponding pixels are updated on the screen. If they fail the test, they are immediately discarded, no further processing occurs, and pixels are not updated. Because only fragments within the specified rectangular area successfully pass the scissor test, only pixels inside that area are updated, and we get a rectangle on the screen.

The scissoring stage of the pipeline is disabled by default. We enable it here using the {{domxref("WebGLRenderingContext.enable","enable()")}} method (you will also use `enable()` to activate many other features of WebGL; hence, the use of the `SCISSOR_TEST` constant as an argument in this case). This again demonstrates the typical order of commands in {{Glossary("WebGL")}}. We first tweak WebGL state. In this case, enabling the scissor test and establishing a rectangular mask. Only when the WebGL state has been satisfactorily tweaked, we execute the drawing command (in this case, `clear()`) that starts the processing of fragments down the graphics pipeline.

```html
<p>Result of scissoring.</p>
<canvas>Your browser does not seem to support HTML canvas.</canvas>
```

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
```

```js
window.addEventListener(
  "load",
  function setupWebGL(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupWebGL, false);
    const paragraph = document.querySelector("p");
    const canvas = document.querySelector("canvas");

    // The following two lines set the size (in CSS pixels) of
    // the drawing buffer to be identical to the size of the
    // canvas HTML element, as determined by CSS.
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      paragraph.textContent =
        "Failed to get WebGL context. Your browser or device may not support WebGL.";
      return;
    }
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Enable scissoring operation and define the position and
    // size of the scissoring area.
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(40, 20, 60, 130);

    // Clear the drawing buffer solid yellow.
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  },
  false,
);
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/basic-scissoring).

{{PreviousNext("Web/API/WebGL_API/By_example/Color_masking","Web/API/WebGL_API/By_example/Canvas_size_and_WebGL")}}
