---
title: WebGLRenderingContext.drawingBufferHeight
slug: Web/API/WebGLRenderingContext/drawingBufferHeight
tags:
- API
- Property
- Read-only
- Reference
- WebGL
- WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.drawingBufferHeight
---
<div>{{APIRef("WebGL")}}</div>

<p>The read-only <code><strong>WebGLRenderingContext.drawingBufferHeight</strong></code>
  property represents the actual height of the current drawing buffer. It should match the
  <code>height</code> attribute of the {{HTMLElement("canvas")}} element associated with
  this context, but might differ if the implementation is not able to provide the
  requested height.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var><em>gl</em></var>.drawingBufferHeight;</pre>

<h2 id="Examples">Examples</h2>

<p>Given this {{HTMLElement("canvas")}} element:</p>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<p>You can get the height of the drawing buffer with the following lines:</p>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
gl.drawingBufferHeight; // 150
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLRenderingContext.drawingBufferWidth")}}</li>
  <li>{{domxref("WebGLRenderingContext.viewport()")}}</li>
</ul>
