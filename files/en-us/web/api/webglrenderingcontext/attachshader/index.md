---
title: WebGLRenderingContext.attachShader()
slug: Web/API/WebGLRenderingContext/attachShader
tags:
- Method
- WebGL
browser-compat: api.WebGLRenderingContext.attachShader
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong>WebGLRenderingContext.attachShader()</strong> method of the <a
    href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> attaches either a fragment or
  vertex {{domxref("WebGLShader")}} to a {{domxref("WebGLProgram")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var><em>gl</em>.attach</var>Shader<var>(program, shader);</var>
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>program</code></dt>
  <dd>A {{domxref("WebGLProgram")}}.</dd>
  <dt><code>shader</code></dt>
  <dd>A fragment or vertex {{domxref("WebGLShader")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following code attaches pre-existing shaders to a {{domxref("WebGLProgram")}}.</p>

<pre class="brush: js">var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if ( !gl.getProgramParameter( program, gl.LINK_STATUS) ) {
  var info = gl.getProgramInfoLog(program);
  throw 'Could not compile WebGL program. \n\n' + info;
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLProgram")}}</li>
  <li>{{domxref("WebGLShader")}}</li>
  <li>{{domxref("WebGLRenderingContext.attachShader()")}}</li>
  <li>{{domxref("WebGLRenderingContext.compileShader()")}}</li>
  <li>{{domxref("WebGLRenderingContext.createProgram()")}}</li>
  <li>{{domxref("WebGLRenderingContext.createShader()")}}</li>
  <li>{{domxref("WebGLRenderingContext.deleteProgram()")}}</li>
  <li>{{domxref("WebGLRenderingContext.deleteShader()")}}</li>
  <li>{{domxref("WebGLRenderingContext.detachShader()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getAttachedShaders()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getProgramParameter()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getProgramInfoLog()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getShaderParameter()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getShaderInfoLog()")}}</li>
  <li>{{domxref("WebGLRenderingContext.getShaderSource()")}}</li>
  <li>{{domxref("WebGLRenderingContext.isProgram()")}}</li>
  <li>{{domxref("WebGLRenderingContext.isShader()")}}</li>
  <li>{{domxref("WebGLRenderingContext.linkProgram()")}}</li>
  <li>{{domxref("WebGLRenderingContext.shaderSource()")}}</li>
  <li>{{domxref("WebGLRenderingContext.useProgram()")}}</li>
  <li>{{domxref("WebGLRenderingContext.validateProgram()")}}</li>
</ul>
