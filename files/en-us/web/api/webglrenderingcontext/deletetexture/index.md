---
title: WebGLRenderingContext.deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
tags:
- API
- Method
- Reference
- Textures
- WebGL
- WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.deleteTexture
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>WebGLRenderingContext.deleteTexture()</code></strong> method of the
  <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> deletes a given
  {{domxref("WebGLTexture")}} object. This method has no effect if the texture has already
  been deleted.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var>gl</var>.deleteTexture(<var>texture</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>texture</dt>
  <dd>A {{domxref("WebGLTexture")}} object to delete.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Deleting_a_texture">Deleting a texture</h3>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var texture = gl.createTexture();

// ...

gl.deleteTexture(texture);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLRenderingContext.bindTexture()")}}</li>
  <li>{{domxref("WebGLRenderingContext.createTexture()")}}</li>
  <li>{{domxref("WebGLRenderingContext.isTexture()")}}</li>
  <li>{{domxref("WebGLRenderingContext.texImage2D()")}}</li>
</ul>
