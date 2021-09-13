---
title: WebGLShaderPrecisionFormat.rangeMax
slug: Web/API/WebGLShaderPrecisionFormat/rangeMax
tags:
  - API
  - Property
  - Reference
  - WebGL
browser-compat: api.WebGLShaderPrecisionFormat.rangeMax
---
<div>{{APIRef("WebGL")}}</div>

<p>The read-only <strong><code>WebGLShaderPrecisionFormat.rangeMax</code></strong> property returns the base 2 log of the absolute value of the maximum value that can be represented.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax; // 127
gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax; // 24
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
