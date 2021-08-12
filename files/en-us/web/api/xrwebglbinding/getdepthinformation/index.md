---
title: XRWebGLBinding.getDepthInformation()
slug: Web/API/XRWebGLBinding/getDepthInformation
tags:
- API
- Method
- Reference
- AR
- XR
- WebXR
browser-compat: api.XRWebGLBinding.getDepthInformation
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <code><strong>getDepthInformation()</strong></code> method of the {{domxref("XRWebGLBinding")}} interface returns an {{domxref("XRWebGLDepthInformation")}} object containing WebGL depth information.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getDepthInformation(view)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>view</code></dt>
  <dd>An {{domxref("XRView")}} object obtained from a viewer pose.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{domxref("XRWebGLDepthInformation")}} object.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>Throws a <code>NotSupportedError</code> if "depth-sensing" is not in the list of enabled features for this {{domxref("XRSession")}}.</li>
  <li>Throws an <code>InvalidStateError</code> if the <code>XRFrame</code> is not active nor animated. Obtaining depth information is only valid within the {{domxref("XRSession.requestAnimationFrame()", "requestAnimationFrame()")}} callback.</li>
  <li>Throws an <code>InvalidStateError</code> if the the session’s {{domxref("XRSession.depthUsage", "depthUsage")}} is not "gpu-optimized".</li>

</ul>

<h2>Examples</h2>

<h3>Obtaining WebGL depth information</h3>

<pre class="brush: js">
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
await gl.makeXRCompatible();

// Make sure  to request a session with depth-sensing enabled
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["gpu-optimized"],
    formatPreference: ["luminance-alpha"]
  }
});

const glBinding = new XRWebGLBinding(session, gl);

// ...

// Obtain depth information in an active and animated frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = glBinding.getDepthInformation(view);
      if (depthInformation) {
        // Do something with the depth information
        // gl.bindTexture(gl.TEXTURE_2D, depthInformation.texture);
        // ...
      }
    }
  }
}

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("XRWebGLDepthInformation.texture")}}</li>
</ul>

