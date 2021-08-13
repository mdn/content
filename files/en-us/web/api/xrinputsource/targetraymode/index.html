---
title: XRInputSource.targetRayMode
slug: Web/API/XRInputSource/targetRayMode
tags:
- API
- AR
- Pointing
- Property
- Ray
- Read-only
- Reference
- VR
- WebXR
- WebXR API
- WebXR Device API
- XR
- XRInputSource
- direction
- pointer
- target
- targetRayMode
browser-compat: api.XRInputSource.targetRayMode
---
<p>{{APIRef("WebXR Device API")}}</p>

<p>The read-only {{domxref("XRInputSource")}}
  property <strong><code>targetRayMode</code></strong> indicates the method by which the
  target ray for the input source should be generated and how it should be presented to
  the user.</p>

<p>Typically a target ray is drawn from the source of the targeting system along the target ray in the direction in which the user is looking or pointing. The style of the ray is generally up to you, as is the method for indicating the endpoint of the ray. The targeted point or object might be indicated by drawing a shape or highlighting the targeted surface or object.</p>

<p>A target ray emitted by a hand controller:</p>

<p><img alt="A screenshot showing a target ray being emitted by a hand controller" src="example-target-ray.gif"></p>

<p>The target ray can be anything from a simple line (ideally fading over distance) to an animated effect, such as the science-fiction "phaser" style shown in the screenshot above.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">let <em>rayMode</em> = <em>xrInputSource</em>.targetRayMode;</pre>

<h3 id="Value">Value</h3>

<p>A string indicating which method to use when generating and presenting the target ray to
  the user. The possible values are:</p>

<dl>
  <dt><code>gaze</code></dt>
  <dd>The user is using a gaze-tracking system (or <strong>gaze input</strong>) which detects the direction in which the user is looking. The target ray will be drawn originating at the viewer's eyes and will follow the direction in which they're looking.</dd>
  <dt><code>screen</code></dt>
  <dd>The direction of the target ray is indicated using a tap on a touch screen, mouse, or other tactile input device.</dd>
  <dt><code>tracked-pointer</code></dt>
  <dd>Targeting is being performed using a handheld device or hand-tracking system which the user points in the direction of the target. The target ray extends from the hand (or the object in the hand) in the targeted direction. The direction is determined using platform-specific rules, though if no such rules exist, the direction is chosen by assuming the user is pointing their index finger straight out from their hand.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p>The input source's {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}}
  indicates the position and orientation of the target ray, and can be used to determine
  where to render the ray.</p>

<h2 id="Example">Example</h2>

<p>This fragment of code shows part of a function to be called once every frame. It looks for inputs which have a non-<code>null</code> {{domxref("XRInputSource.targetRaySpace", "targetRaySpace")}}. Inputs which have a value for this property represent inputs that project a target ray outward from the user.</p>

<p>For each such input, this example looks for inputs whose {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} is <code>tracked-pointer</code>, indicating that the input is in fact intended to represent a targeting device rather than a gazing device, screen tap, or mouse click. For tracked pointers, a function <code>myRenderTargetRayAsBeam()</code> is called to render a beam from the input controller's virtual position outward in the direction it's pointing.</p>

<p>The code should continue to perform tasks such as drawing controllers or any objects representative of the user's hands' positions in the virtual space, as well as any other input-related tasks.</p>

<pre class="brush: js">function updateInputSources(session, frame, refSpace) {
  for (let source of session.getInputSources()) {
    let targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);

    if (targetRayPose) {
      if (source.targetRayMode == "tracked-pointer") {
        myRenderTargetRayAsBeam(targetRayPose);
      }
    }

    /* ... */
  }
}
</pre>

<p>See the article <a href="/en-US/docs/Web/API/WebXR_Device_API/Inputs">Inputs and input sources</a> for more details and a more complete example.</p>

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
