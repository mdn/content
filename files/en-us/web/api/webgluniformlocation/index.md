---
title: WebGLUniformLocation
slug: Web/API/WebGLUniformLocation
tags:
  - API
  - Reference
  - WebGL
browser-compat: api.WebGLUniformLocation
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong>WebGLUniformLocation</strong> interface is part of the <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> and represents the location of a uniform variable in a shader program.</p>

<h2 id="Description">Description</h2>

<p>The <code>WebGLUniformLocation</code> object does not define any methods or properties of its own and its content is not directly accessible. When working with <code>WebGLUniformLocation</code> objects, the following methods of the {{domxref("WebGLRenderingContext")}} are useful:</p>

<ul>
 <li>{{domxref("WebGLRenderingContext.getUniformLocation()")}}</li>
 <li>{{domxref("WebGLRenderingContext.uniform()")}}</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Getting_an_uniform_location">Getting an uniform location</h3>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

var location = gl.getUniformLocation(WebGLProgram, 'uniformName');</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.getUniformLocation()")}}</li>
</ul>
