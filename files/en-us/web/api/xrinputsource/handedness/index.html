---
title: XRInputSource.handedness
slug: Web/API/XRInputSource/handedness
tags:
- API
- AR
- Controller
- Handedness
- Input
- Property
- Read-only
- Reference
- VR
- WebXR
- WebXR API
- WebXR Device API
- XR
- XRInputSource
- hand
- left
- right
browser-compat: api.XRInputSource.handedness
---
<p>{{APIRef("WebXR Device API")}}</p>

<p>The read-only {{domxref("XRInputSource")}} property
  <code><strong>handedness</strong></code> indicates which of the user's hands the WebXR
  input source is associated with, or if it's not associated with a hand at all.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>xrInputSource</em>.handedness;</pre>

<h3 id="Value">Value</h3>

<p>A string indicating whether the input controller is held in one of
  the user's hands, and if it is, which hand. The value is one of the following:</p>

<dl>
  <dt><code>none</code></dt>
  <dd>The input controller is not associated with one of the user's hands.</dd>
  <dt><code>left</code></dt>
  <dd>The input controller is being held in, worn on, or is attached to the user's left hand.</dd>
  <dt><code>right</code></dt>
  <dd>The input controller is being held in, worn on, or is attached to the user's right hand.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p>If the input source is not a device associated with a user's hand (whether by being
  held, attached, or worn), the value of <code>handedness</code> is <code>none</code>.
  This may indicate, for example, an  input source which isn't hand-held, such as controls
  built into a headset or an input device attached to the head or body.</p>

<h2 id="Examples">Examples</h2>

<p>One important usage scenario for <code>handedness</code> is to determine which hand a controller is in so you can draw a representation of that hand (or the device that hand is controlling) in virtual space.</p>

<pre class="brush: js">function updateInputSources(session, frame, refSpace) {
  for (let source of session.inputSources) {
    if (source.gripSpace) {
      let gripPose = frame.getPose(source.gripSpace, refSpace);

      if (gripPose) {
        myRenderHandObject(gripPose, inputSource.handedness);
      }
    }
  }
}
</pre>

<p>This function, which would be called every animation frame (or possibly just periodically, depending on the degree of smoothness required and any performance constraints), scans the list of input sources looking for any which have a {{domxref("XRInputSource.gripSpace", "gripSpace")}} which isn't <code>null</code>. If a <code>gripSpace</code> is present, that means the input source is a hand-held device of some sort, so it should be rendered visibly if possible.</p>

<p>If <code>gripSpace</code> is non-<code>null</code>, the function proceeds to get the pose for the <code>gripSpace</code> transformed into the current reference space. Assuming that's then valid, a function called <code>myRenderHandObject()</code> is called with the grip's pose and the value of <code>handedness</code>. It then draws the appropriate model positioned and formed for the correct hand.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR Device API</a></li>
  <li><a href="/en-US/docs/Web/API/WebXR_Device_API/Inputs">Inputs and input sources</a>
  </li>
  <li><a href="/en-US/docs/Web/WebXR%20Device%20API/Gamepads">Using gamepads in WebXR
      applications</a></li>
</ul>
