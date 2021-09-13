---
title: WebGL2RenderingContext.bindVertexArray()
slug: Web/API/WebGL2RenderingContext/bindVertexArray
tags:
- API
- Method
- Reference
- WebGL
- WebGL2
browser-compat: api.WebGL2RenderingContext.bindVertexArray
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>WebGL2RenderingContext.bindVertexArray()</code></strong> method of
  the <a href="/en-US/docs/Web/API/WebGL_API">WebGL 2 API</a> binds a
  passed {{domxref("WebGLVertexArrayObject")}} object to the buffer.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var>gl</var>.bindVertexArray(<var>vertexArray</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>vertexArray</dt>
  <dd>A {{domxref("WebGLVertexArrayObject")}} (VAO) object to bind.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// ...
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// ...
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLVertexArrayObject")}}</li>
</ul>
