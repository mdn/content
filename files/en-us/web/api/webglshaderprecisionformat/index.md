---
title: WebGLShaderPrecisionFormat
slug: Web/API/WebGLShaderPrecisionFormat
tags:
  - API
  - Reference
  - WebGL
browser-compat: api.WebGLShaderPrecisionFormat
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong>WebGLShaderPrecisionFormat</strong> interface is part of the <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> and represents the information returned by calling the {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} method.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("WebGLShaderPrecisionFormat.rangeMin")}} {{ReadOnlyInline}}</dt>
 <dd>The base 2 log of the absolute value of the minimum value that can be represented.</dd>
 <dt>{{domxref("WebGLShaderPrecisionFormat.rangeMax")}} {{ReadOnlyInline}}</dt>
 <dd>The base 2 log of the absolute value of the maximum value that can be represented.</dd>
 <dt>{{domxref("WebGLShaderPrecisionFormat.precision")}} {{ReadOnlyInline}}</dt>
 <dd>The number of bits of precision that can be represented. For integer formats this value is always 0.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>A <code>WebGLShaderPrecisionFormat</code> object is returned by the {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} method.</p>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
// WebGLShaderPrecisionFormat { rangeMin: 127, rangeMax: 127, precision: 23 }
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}</li>
</ul>
