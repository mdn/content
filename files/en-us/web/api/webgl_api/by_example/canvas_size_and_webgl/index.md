---
title: Canvas size and WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
tags:
  - Beginner
  - Example
  - Learn
  - Tutorial
  - WebGL
---
<p>{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}</p>

<p>This WebGL example explores the effect of setting (or not setting) the canvas size to its element size in {{Glossary("CSS")}} pixels, as it appears in the browser window.</p>

<h2 id="Effect_of_canvas_size_on_rendering_with_WebGL">Effect of canvas size on rendering with WebGL</h2>

<p>{{EmbedLiveSample("Effect_of_canvas_size_on_rendering_with_WebGL",660,180)}}</p>

<p>With {{domxref("WebGLRenderingContext.scissor()","scissor()")}} and {{domxref("WebGLRenderingContext.clear()","clear()")}} we can demonstrate how the WebGL drawing buffer is affected by the size of the canvas.</p>

<p>The size of the first canvas is set to the styled {{domxref("Element")}} size, determined by {{Glossary("CSS")}}. This is done by assigning the {{domxref("HTMLCanvasElement.width","width")}} and {{domxref("HTMLCanvasElement.height","height")}} properties of the canvas to the values of the {{domxref("Element.clientWidth","clientWidth")}} and {{domxref("Element.clientHeight","clientHeight")}} properties, respectively.</p>

<p>In contrast, no such assignment is done for the second canvas. The internal {{domxref("HTMLCanvasElement.width","width")}} and {{domxref("HTMLCanvasElement.height","height")}} properties of the canvas remain at default values, which are different than the actual size of the canvas {{domxref("Element")}} in the browser window.</p>

<p>The effect is clearly visible when using {{domxref("WebGLRenderingContext.scissor()","scissor()")}} and {{domxref("WebGLRenderingContext.clear()","clear()")}} to draw a square in the center of the canvas, by specifying its position and size in pixels. In the first canvas, we get the desired result. In the second, the square has the wrong shape, size, and position.</p>

<pre class="brush: html">&lt;p&gt;Compare the two canvases.&lt;/p&gt;
&lt;canvas&gt;Your browser does not seem to support
    HTML5 canvas.&lt;/canvas&gt;
&lt;canvas&gt;Your browser does not seem to support
    HTML5 canvas.&lt;/canvas&gt;
</pre>

<pre class="brush: css">body {
  text-align : center;
}
canvas {
  display : inline-block;
  width : 120px;
  height : 80px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
</pre>

<pre class="brush: js">window.addEventListener("load", function() {
  "use strict"
  var firstCanvas = document.getElementsByTagName("canvas")[0],
    secondCanvas = document.getElementsByTagName("canvas")[1];
  firstCanvas.width = firstCanvas.clientWidth;
  firstCanvas.height = firstCanvas.clientHeight;
  [firstCanvas, secondCanvas].forEach(function(canvas) {
    var gl = canvas.getContext("webgl")
      || canvas.getContext("experimental-webgl");
    if (!gl) {
      document.querySelector("p").innerHTML =
        "Failed to get WebGL context. "
        + "Your browser or device may not support WebGL.";
      return;
    }
    gl.viewport(0, 0,
      gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(30, 10, 60, 60);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  });
}, false);
</pre>

<p>The source code of this example is also available on <a href="https://github.com/idofilin/webgl-by-example/tree/master/canvas-size-and-webgl">GitHub</a>.</p>

<p>{{PreviousNext("Learn/WebGL/By_example/Basic_scissoring","Learn/WebGL/By_example/Boilerplate_1")}}</p>
