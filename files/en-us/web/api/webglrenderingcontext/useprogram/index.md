---
title: WebGLRenderingContext.useProgram()
slug: Web/API/WebGLRenderingContext/useProgram
tags:
- API
- Method
- Reference
- WebGL
- WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.useProgram
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>WebGLRenderingContext.useProgram()</code></strong> method of the <a
		href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> sets the specified
	{{domxref("WebGLProgram")}} as part of the current rendering state.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var>gl</var>.useProgram(<var>program</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
	<dt>program</dt>
	<dd>A {{domxref("WebGLProgram")}} to use.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{domxref("WebGLRenderingContext.createProgram()")}}</li>
	<li>{{domxref("WebGLRenderingContext.deleteProgram()")}}</li>
	<li>{{domxref("WebGLRenderingContext.isProgram()")}}</li>
	<li>{{domxref("WebGLRenderingContext.linkProgram()")}}</li>
	<li>{{domxref("WebGLRenderingContext.validateProgram()")}}</li>
	<li>{{domxref("WebGLRenderingContext.getProgramParameter()")}}</li>
	<li>{{domxref("WebGLRenderingContext.getProgramInfoLog()")}}</li>
</ul>
