---
title: WebGL2RenderingContext.deleteSampler()
slug: Web/API/WebGL2RenderingContext/deleteSampler
tags:
- API
- Method
- Reference
- WebGL
- WebGL2
browser-compat: api.WebGL2RenderingContext.deleteSampler
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>WebGL2RenderingContext.deleteSampler()</code></strong> method of the
  <a href="/en-US/docs/Web/API/WebGL_API">WebGL 2 API</a> deletes a given
  {{domxref("WebGLSampler")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var>gl</var>.deleteSampler(<var>sampler</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>sampler</code></dt>
  <dd>A {{domxref("WebGLSampler")}} object to delete.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<p><code>gl</code> must be a {{domxref("WebGL2RenderingContext")}}.
  <code>WebGLSampler</code> objects are not available in WebGL 1.</p>

<pre class="brush: js">var sampler = gl.createSampler();

// ...

gl.deleteSampler(sampler);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLSampler")}}</li>
</ul>
