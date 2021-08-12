---
title: XRFrame.createAnchor()
slug: Web/API/XRFrame/createAnchor
tags:
- API
- Method
- Reference
- AR
- VR
- XR
- WebXR
browser-compat: api.XRFrame.createAnchor
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <code><strong>createAnchor()</strong></code> method of the {{domxref("XRFrame")}} interface creates a free-floating {{domxref("XRAnchor")}} which will be fixed relative to the real world.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">createAnchor(pose, space)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>pose</code></dt>
  <dd>An {{domxref("XRRigidTransform")}} object with the initial pose where the anchor should be created. The system will make sure that the relationship with the physical world made at this moment in time is maintained as the tracking system's understanding of the world evolves.</dd>
  <dt><code>space</code></dt>
  <dd>An {{domxref("XRSpace")}} object the pose is relative to.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} resolving to an {{domxref("XRAnchor")}} object.</p>

<h2>Examples</h2>

<h3>Creating an anchor</h3>

<pre class="brush: js">
frame.createAnchor(anchorPose, referenceSpace).then((anchor) => {

  // Do stuff with the anchor (assign objects that will be relative to this anchor)

}, (error) => {
  console.error("Could not create anchor: "" + error);
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
