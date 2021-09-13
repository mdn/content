---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
tags:
  - API
  - Canvas
  - Experimental
  - Interface
  - OffscreenCanvas
  - Reference
browser-compat: api.ImageBitmapRenderingContext
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p>The <strong><code>ImageBitmapRenderingContext</code></strong> interface is a canvas rendering context that provides the functionality to replace the canvas's contents with the given {{domxref("ImageBitmap")}}. Its context id (the first argument to {{domxref("HTMLCanvasElement.getContext()")}} or {{domxref("OffscreenCanvas.getContext()")}}) is <code>"bitmaprenderer"</code>.</p>

<p>This interface is available in both the window and the <a href="/en-US/docs/Web/API/Web_Workers_API">worker</a> context.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}</dt>
 <dd>
 <p>Displays the given <code>ImageBitmap</code> in the canvas associated with this rendering context. Ownership of the <code>ImageBitmap</code> is transferred to the canvas. This was previously named <code>transferImageBitmap()</code>, but was renamed in a spec change. The old name is being kept as an alias to avoid code breakage.</p>
 </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("OffScreenCanvas")}}</li>
</ul>
