---
title: XRFrame.getDepthInformation()
slug: Web/API/XRFrame/getDepthInformation
tags:
- API
- Method
- Reference
- AR
- XR
- WebXR
browser-compat: api.XRFrame.getDepthInformation
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <code><strong>getDepthInformation()</strong></code> method of the {{domxref("XRFrame")}} interface returns an {{domxref("XRCPUDepthInformation")}} object containing CPU depth information for the active and animated frame.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">getDepthInformation(view)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>view</code></dt>
  <dd>An {{domxref("XRView")}} object obtained from a viewer pose.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{domxref("XRCPUDepthInformation")}} object.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>Throws a <code>NotSupportedError</code> if "depth-sensing" is not in the list of enabled features for this {{domxref("XRSession")}}.</li>
  <li>Throws an <code>InvalidStateError</code> if the <code>XRFrame</code> is not active nor animated. Obtaining depth information is only valid within the {{domxref("XRSession.requestAnimationFrame()", "requestAnimationFrame()")}} callback.</li>
  <li>Throws an <code>InvalidStateError</code> if the the session’s {{domxref("XRSession.depthUsage", "depthUsage")}} is not "cpu-optimized".</li>

</ul>

<h2>Examples</h2>

<h3>Obtaining CPU depth information</h3>

<pre class="brush: js">
// Make sure  to request a session with depth-sensing enabled
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"]
  }
});

// ...

// Obtain depth information in an active and animated frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = frame.getDepthInformation(view);
      if (depthInformation) {
        // Do something with the depth information
        renderDepth(depthInformation);
      }
    }
  }
}

</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
