---
title: Clearing with colors
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
tags:
  - Beginner
  - Example
  - Graphics
  - Learn
  - Tutorial
  - WebGL
---
<p>{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}</p>

<p>An example showing how to clear a WebGL rendering context to a solid color.</p>

<h2 id="Clearing_the_WebGL_context_with_a_solid_color">Clearing the WebGL context with a solid color</h2>

<p>{{EmbedLiveSample("Clearing_the_WebGL_context_with_a_solid_color",660,425)}}</p>

<p>The simplest graphical {{Glossary("WebGL")}} program. Set up the {{domxref("WebGLRenderingContext","rendering context", "", 1)}} and then just clear it solid green. Note that {{Glossary("CSS")}} sets the background color of the canvas to black, so when the canvas turns green we know that {{Glossary("WebGL")}}'s magic has worked.</p>

<p>In addition, you may notice that clearing the drawing buffer with a solid color is a two-stage process. First, we set the clear color to green, using the method {{domxref("WebGLRenderingContext.clearColor()","clearColor()")}}. This only changes some internal state of {{Glossary("WebGL")}}, but does not draw anything yet. Next, we actually do the drawing by calling the {{domxref("WebGLRenderingContext.clear()","clear()")}} method. This is typical of how drawing is done with WebGL. There is only a handful of methods for actual drawing (<code>clear()</code> is one of them). All other methods are for setting and querying WebGL state variables (such as the clear color).</p>

<p>There are many "dials" and "switches" that affect drawing with {{Glossary("WebGL")}}. The clear color is just the first of many you will get to know. This is why {{Glossary("WebGL")}}/{{Glossary("OpenGL")}} is often called a <em>state machine</em>. By tweaking those "dials" and "switches" you can modify the internal state of the WebGL machine, which in turn changes how input (in this case, a clear command) translates into output (in this case, all pixels are set to green).</p>

<p>Finally, we note that color in WebGL is usually in {{Glossary("RGBA")}} format, that is four numerical components for red, green, blue and alpha (opacity). Therefore, <code>clearColor()</code> takes four arguments.</p>

<pre class="brush: html">&lt;p&gt;A very simple WebGL program that shows some color.&lt;/p&gt;
&lt;!-- Text within a canvas element is displayed
    only if canvas is not supported. --&gt;
&lt;canvas&gt;Your browser does not seem to support
    HTML5 canvas.&lt;/canvas&gt;
</pre>

<pre class="brush: css">body {
  text-align : center;
}
canvas {
  display : block;
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
</pre>

<pre class="brush: js">// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it,
// and to not mess up the global scope. We are giving the event
// handler a name (setupWebGL) so that we can refer to the
// function object within the function itself.
window.addEventListener("load", function setupWebGL (evt) {
  "use strict"

  // Cleaning after ourselves. The event handler removes
  // itself, because it only needs to run once.
  window.removeEventListener(evt.type, setupWebGL, false);

  // References to the document elements.
  var paragraph = document.querySelector("p"),
    canvas = document.querySelector("canvas");

  // Getting the WebGL rendering context.
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");

  // If failed, inform user of failure. Otherwise, initialize
  // the drawing buffer (the viewport) and clear the context
  // with a solid color.
  if (!gl) {
    paragraph.innerHTML = "Failed to get WebGL context. "
      + "Your browser or device may not support WebGL.";
    return;
  }
  paragraph.innerHTML =
    "Congratulations! Your browser supports WebGL. ";
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);
  // Set the clear color to darkish green.
  gl.clearColor(0.0, 0.5, 0.0, 1.0);
  // Clear the context with the newly set color. This is
  // the function call that actually does the drawing.
  gl.clear(gl.COLOR_BUFFER_BIT);

}, false);
</pre>

<p>The source code of this example is also available on <a href="https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors">GitHub</a>.</p>

<p>{{PreviousNext("Learn/WebGL/By_example/Detect_WebGL","Learn/WebGL/By_example/Clearing_by_clicking")}}</p>
