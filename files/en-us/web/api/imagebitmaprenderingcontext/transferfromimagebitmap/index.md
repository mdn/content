---
title: ImageBitmapRenderingContext.transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
tags:
- API
- Experimental
- ImageBitmapRenderingContext
- Method
- OffscreenCanvas
- Reference
- transferFromImageBitmap
browser-compat: api.ImageBitmapRenderingContext.transferFromImageBitmap
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p>The <strong><code>ImageBitmapRenderingContext.transferFromImageBitmap()</code></strong>
  method displays the given {{domxref("ImageBitmap")}} in the canvas associated with this
  rendering context. The ownership of the <code>ImageBitmap</code> is transferred to the
  canvas as well.</p>

<p>This method was previously named <code>transferImageBitmap()</code>, but was renamed in
  a spec change. The old name is being kept as an alias to avoid code breakage.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">void ImageBitmapRenderingContext.transferFromImageBitmap(bitmap)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>bitmap</code></dt>
  <dd>An {{domxref("ImageBitmap")}} object to transfer.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;canvas id="htmlCanvas"&gt;&lt;/canvas&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var htmlCanvas = document.getElementById("htmlCanvas").getContext("bitmaprenderer");

// Draw a WebGL scene offscreen
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

// ... some drawing using the gl context ...

// Transfer the current frame to the visible canvas
var bitmap = offscreen.transferToImageBitmap();
htmlCanvas.transferFromImageBitmap(bitmap);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The interface defining this method, {{domxref("ImageBitmapRenderingContext")}}</li>
  <li>{{domxref("OffscreenCanvas")}}</li>
  <li>{{domxref("OffscreenCanvas.transferToImageBitmap()")}}</li>
</ul>
