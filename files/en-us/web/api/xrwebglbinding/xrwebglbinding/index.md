---
title: XRWebGLBinding()
slug: Web/API/XRWebGLBinding/XRWebGLBinding
tags:
  - API
  - Constructor
  - Reference
  - WebXR
  - XR
browser-compat: api.XRWebGLBinding.XRWebGLBinding
---
<p>{{APIRef("WebXR Device API")}}</p>

<p>The <code><strong>XRWebGLBinding()</strong></code> constructor creates and
    returns a new {{domxref("XRWebGLBinding")}} object.</p>

<h2 id="Syntax">Syntax</h2>
<pre class="brush: js">new XRWebGLBinding(session, <em>context</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>session</code></dt>
  <dd>An {{domxref("XRSession")}} object specifying the WebXR session which will be
    rendered using the WebGL context.</dd>
  <dt><code>context</code></dt>
  <dd>A {{domxref("WebGLRenderingContext")}} or {{domxref("WebGL2RenderingContext")}}
    identifying the WebGL drawing context to use for rendering the scene for the specified
    WebXR session.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A newly-created {{domxref("XRWebGLBinding")}}.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>InvalidStateError</code></dt>
  <dd>
    <p>The new <code>XRWebGLBinding</code> could not be created due to one of a number of
      possible state errors:</p>

    <ul>
      <li>The {{domxref("XRSession")}} specified by <code>session</code> has already been
        stopped.</li>
      <li>The specified WebGL context, <code>context</code>, <a
          href="/en-US/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes">has
          been lost</a> for any reason, such as a GPU switch or reset.</li>
      <li>The specified <code>session</code> is immersive but the <code>context</code> is
        not WebXR compatible.</li>
    </ul>
  </dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
const xrSession = await navigator.xr.requestSession("immersive-vr");
await gl.makeXRCompatible();

const glBinding = new XRWebGLBinding(xrSession, gl);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("WebGLRenderingContext.makeXRCompatible()")}}</li>
</ul>
