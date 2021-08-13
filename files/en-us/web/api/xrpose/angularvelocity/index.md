---
title: XRPose.angularVelocity
slug: Web/API/XRPose/angularVelocity
tags:
- API
- Property
- Read-only
- Reference
- WebXR
- XRPose
browser-compat: api.XRPose.angularVelocity
---
<div>{{APIRef}}</div>

<p>The <code>angularVelocity</code> read-only property of the
{{DOMxRef("XRPose")}} interface is a {{DOMxRef("DOMPointReadOnly")}} describing
the angular velocity in radians per second relative to the base
{{DOMxRef("XRSpace")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let radiansPerSecond = xrPose.angularVelocity;</pre>

<h3 id="Value">Value</h3>

<p>A {{DOMxRef("DOMPointReadOnly")}} describing the angular velocity in radians
per second relative to the base {{DOMxRef("XRSpace")}}. Returns {{jsxref("null")}}
if the user agent can’t populate this value.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>


<h2>See also</h2>

<ul>
  <li>{{domxref("XRPose.linearVelocity")}}</li>
</ul>
