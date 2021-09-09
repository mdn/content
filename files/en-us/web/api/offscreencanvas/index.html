---
title: OffscreenCanvas
slug: Web/API/OffscreenCanvas
tags:
  - API
  - Canvas
  - Experimental
  - Interface
  - Reference
browser-compat: api.OffscreenCanvas
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p>The <strong><code>OffscreenCanvas</code></strong> interface provides a canvas that can be rendered off screen. It is available in both the window and <a href="/en-US/docs/Web/API/Web_Workers_API">worker</a> contexts.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Constructors">Constructors</h2>

<dl>
 <dt>{{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}}</dt>
 <dd><code>OffscreenCanvas</code> constructor. Creates a new <code>OffscreenCanvas</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("OffscreenCanvas.height")}}</dt>
 <dd>The height of the offscreen canvas.</dd>
 <dt>{{domxref("OffscreenCanvas.width")}}</dt>
 <dd>The width of the offscreen canvas.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("OffscreenCanvas.getContext()")}}</dt>
 <dd>Returns a rendering context for the offscreen canvas.</dd>
 <dt>{{domxref("OffscreenCanvas.convertToBlob()")}}</dt>
 <dd>Creates a {{domxref("Blob")}} object representing the image contained in the canvas.</dd>
 <dt>{{domxref("OffscreenCanvas.transferToImageBitmap()")}}</dt>
 <dd>Creates an {{domxref("ImageBitmap")}} object from the most recently rendered image of the <code>OffscreenCanvas</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Synchronous_display_of_frames_produced_by_an_OffscreenCanvas">Synchronous display of frames produced by an <code>OffscreenCanvas</code></h3>

<p>One way to use the <code>OffscreenCanvas</code> API, is to use a rendering context that has been obtained from an <code>OffscreenCanvas</code> object to generate new frames. Once a new frame has finished rendering in this context,  the {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} method can be called to save the most recent rendered image. This method returns an {{domxref("ImageBitmap")}} object, which can be used in a variety of Web APIs and also in a second canvas without creating a transfer copy.</p>

<p>To display the <code>ImageBitmap</code>, you can use a {{domxref("ImageBitmapRenderingContext")}} context, which can be created by calling <code>canvas.getContext("bitmaprenderer")</code> on a (visible) canvas element. This context only provides functionality to replace the canvas's contents with the given <code>ImageBitmap</code>. A call to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} with the previously rendered and saved <code>ImageBitmap</code> from the OffscreenCanvas, will display the <code>ImageBitmap</code> on the canvas and transfer its ownership to the canvas. A single <code>OffscreenCanvas</code> may transfer frames into an arbitrary number of other <code>ImageBitmapRenderingContext</code> objects.</p>

<p>Given these two {{HTMLElement("canvas")}} elements</p>

<pre class="brush: html">&lt;canvas id="one"&gt;&lt;/canvas&gt;
&lt;canvas id="two"&gt;&lt;/canvas&gt;</pre>

<p>the following code will provide the rendering using an <code>OffscreenCanvas</code> as described above.</p>

<pre class="brush: js">var one = document.getElementById("one").getContext("bitmaprenderer");
var two = document.getElementById("two").getContext("bitmaprenderer");

var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext('webgl');

// ... some drawing for the first canvas using the gl context ...

// Commit rendering to the first canvas
var bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// ... some more drawing for the second canvas using the gl context ...

// Commit rendering to the second canvas
var bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
</pre>

<h3 id="Asynchronous_display_of_frames_produced_by_an_OffscreenCanvas">Asynchronous display of frames produced by an <code>OffscreenCanvas</code></h3>

<p>Another way to use the <code>OffscreenCanvas</code> API, is to call {{domxref("HTMLCanvasElement.transferControlToOffscreen", "transferControlToOffscreen()")}} on a {{HTMLElement("canvas")}} element, either on a <a href="/en-US/docs/Web/API/Web_Workers_API">worker</a> or the main thread, which will return an <code>OffscreenCanvas</code> object from an {{domxref("HTMLCanvasElement")}} object from the main thread. Calling {{domxref("OffscreenCanvas.getContext", "getContext()")}} will then obtain a rendering context from that <code>OffscreenCanvas</code>.</p>

<p>main.js (main thread code):</p>

<pre class="brush: js">var htmlCanvas = document.getElementById("canvas");
var offscreen = htmlCanvas.transferControlToOffscreen();

var worker = new Worker("offscreencanvas.js");
worker.postMessage({canvas: offscreen}, [offscreen]);
</pre>

<p>offscreencanvas.js (worker code):</p>

<pre class="brush: js">onmessage = function(evt) {
  var canvas = evt.data.canvas;
  var gl = canvas.getContext("webgl");

  // ... some drawing using the gl context ...
};
</pre>

<p>You can also use requestAnimationFrame in workers</p>

<pre class="brush: js">onmessage = function(evt) {
  const canvas = evt.data.canvas;
  const gl = canvas.getContext("webgl");

  function render(time) {
    // ... some drawing using the gl context ...
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/">WebGL Off the Main Thread – Mozilla Hacks</a></li>
 <li>{{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("ImageBitmap")}}</li>
 <li>{{domxref("ImageBitmapRenderingContext")}}</li>
 <li>{{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}</li>
 <li>{{domxref("WebGLRenderingContext.commit()")}}</li>
</ul>
