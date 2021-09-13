---
title: WebGL2RenderingContext.createTransformFeedback()
slug: Web/API/WebGL2RenderingContext/createTransformFeedback
tags:
- API
- Method
- Reference
- WebGL
- WebGL2
browser-compat: api.WebGL2RenderingContext.createTransformFeedback
---
<div>{{APIRef("WebGL")}}</div>

<p>The <code><strong>WebGL2RenderingContext.createTransformFeedback()</strong></code>
  method of the <a href="/en-US/docs/Web/API/WebGL_API">WebGL 2 API</a> creates and
  initializes {{domxref("WebGLTransformFeedback")}} objects.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">WebGLTransformFeedback <var>gl</var>.createTransformFeedback();
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("WebGLTransformFeedback")}} object.</p>

<h2 id="Examples">Examples</h2>

<p><code>gl</code> must be a {{domxref("WebGL2RenderingContext")}}.
  <code>WebGLTransformFeedback</code> objects are not available in WebGL 1.</p>

<pre class="brush: js">var transformFeedback = gl.createTransformFeedback();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLTransformFeedback")}}</li>
</ul>
