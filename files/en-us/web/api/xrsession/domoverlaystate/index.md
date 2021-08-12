---
title: XRSession.domOverlayState
slug: Web/API/XRSession/domOverlayState
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
browser-compat: api.XRSession.domOverlayState
---
<div>{{APIRef("WebXR Device API")}}</div>

<p>The <em>read-only</em> <strong><code>domOverlayState</code></strong> property of an <code>immersive-ar</code>
    {{DOMxRef("XRSession")}} provides information about the DOM overlay, if the feature is enabled.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">session.domOverlayState;</pre>

<h3 id="Value">Value</h3>

<p>Returns {{jsxref("null")}} if the DOM overlay feature is not supported or not enabled or an object containing information about the dom overlay state with the following properties:</p>

<dl>
  <dt><code>type</code></dt>
  <dd>A string indicating how the DOM overlay is being displayed. Possible values:
    <ul>
      <li><code>screen</code>: the overlay is drawn on the entire screen-based device (for handheld AR devices).</li>
      <li><code>head-locked</code>: the overlay is drawn at a head-locked UI that fills the renderable viewport and follows the user’s head movement.</li>
      <li><code>floating</code>:  the overlay appears as a rectangle floating in space that's kept in front of the user.
      It doesn't necessarily fill up the entire space and/or is strictly head-locked.</li>
    </ul>

  </dd>
</dl>

<h2>Examples</h2>

<h3>Checking which DOM overlay got enabled</h3>

<pre class="brush: js">
if (session.domOverlayState) {
  console.log(session.domOverlayState.type);
} else {
  console.log("DOM overlay not supported or enabled!");
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>
