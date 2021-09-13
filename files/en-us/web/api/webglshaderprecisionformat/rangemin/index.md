---
title: WebGLShaderPrecisionFormat.rangeMin
slug: Web/API/WebGLShaderPrecisionFormat/rangeMin
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLShaderPrecisionFormat.rangeMin
---
<div>{{APIRef("WebGL")}}</div>

<p>The read-only <strong><code>WebGLShaderPrecisionFormat.rangeMin</code></strong> property returns the base 2 log of the absolute value of the minimum value that can be represented.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin; // 127
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin; // 24
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("WebGLShaderPrecisionFormat")}}</li>
 <li>{{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}</li>
</ul>
