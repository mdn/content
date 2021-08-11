---
title: XRWebGLDepthInformation.texture
slug: Web/API/XRWebGLDepthInformation/texture
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
browser-compat: api.XRWebGLDepthInformation.texture
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <em>read-only</em> <strong><code>texture</code></strong> property of the {{DOMxRef("XRWebGLDepthInformation")}} interface is a {{domxref("WebGLTexture")}} containing depth buffer information as an opaque texture.</p>

<h3 id="Value">Value</h3>

<p>A {{domxref("WebGLTexture")}}.</p>

<h2>Examples</h2>

<p>Use {{domxref("XRWebGLBinding.getDepthInformation()")}} to obtain GPU depth information. The returned <code>XRWebGLDepthInformation</code> object will contain the <code>texture</code> buffer which can then be bound to a texture and depth buffer information can be made available to a WebGL fragment shader.</p>

<pre class="brush: js">
const depthInfo = glBinding.getDepthInformation(view);
const uvTransform = depthInfo.normDepthBufferFromNormView.matrix;

const u_DepthTextureLocation = gl.getUniformLocation(program, "u_DepthTexture");
const u_UVTransformLocation = gl.getUniformLocation(program, "u_UVTransform");
const u_RawValueToMeters = gl.getUniformLocation(program, "u_RawValueToMeters");

gl.bindTexture(gl.TEXTURE_2D, depthInfo.texture);
gl.activeTexture(gl.TEXTURE0);
gl.uniform1i(u_DepthTextureLocation, 0);

// UV transform to correctly index into the depth map
gl.uniformMatrix4fv(u_UVTransformLocation, false, uvTransform);

// scaling factor to convert from the raw number to meters
gl.uniform1f(u_RawValueToMeters, depthInfo.rawValueToMeters);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("XRWebGLBinding.getDepthInformation()")}}</li>
  <li>{{domxref("WebGLRenderingContext.bindTexture()")}}</li>
</ul>
