---
title: XRSession.depthDataFormat
slug: Web/API/XRSession/depthDataFormat
tags:
- API
- AR
- Augmented Reality
- Experimental
- Property
- Reference
- VR
- WebXR
- WebXR Device API
- XRSession
browser-compat: api.XRSession.depthDataFormat
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <em>read-only</em> <strong><code>depthDataFormat</code></strong> property of an <code>immersive-ar</code>
    {{DOMxRef("XRSession")}} describes which depth sensing data format is used.</p>

<h3 id="Value">Value</h3>

<p>This property can return the following values:</p>

<dl>
  <dt><code>luminance-alpha</code></dt>
  <dd>2-byte unsigned integer data buffers (<code>LUMINANCE_ALPHA</code> <code>GLEnum</code>). <br>
  CPU usage: interpret {{domxref("XRCPUDepthInformation.data")}} as {{jsxref("Uint8Array")}}. <br>
  GPU usage: inspect Luminance and Alpha channels to reassemble single value.</dd>
  <dt><code>float32</code></dt>
  <dd>4-byte floating point data buffers (<code>R32F</code> <code>GLEnum</code>). <br>
  CPU usage: interpret {{domxref("XRCPUDepthInformation.data")}} as {{jsxref("Float32Array")}}. <br>
  GPU usage: inspect Red channel and use the value.</dd>
</dl>

<h2>Examples</h2>

<p>To request the desired data format, you need to specify a <code>dataFormatPreference</code> when requesting a session using {{domxref("XRSystem.requestSession()")}}. Here, the caller is able to handle both "luminance-alpha" and "float32" formats. The order indicates preference for "luminance-alpha":</p>

<pre class="brush: js">
navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"]
  }
});
</pre>

<p>To check which data format was selected by the user agent, you can call the <code>depthDataFormat</code> property:</p>

<pre class="brush: js">
console.log(session.depthDataFormat); // either "luminance-alpha" or "float32"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>
