---
title: DeviceOrientationEvent.gamma
slug: Web/API/DeviceOrientationEvent/gamma
tags:
  - API
  - Device Orientation API
  - DeviceOrientationEvent
  - NeedsBetterSpecLink
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.DeviceOrientationEvent.gamma
---
<p>{{ apiref("Device Orientation Events") }}</p>

<p>Returns the rotation of the device around the Y axis; that is, the number of degrees,
  ranged between <code>-90</code> and <code>90</code>, by which the device is tilted left
  or right. See <a href="/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained"
    title="Orientation and motion data explained">Orientation and motion data
    explained</a> for details.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var gamma = <em>orientationEvent</em>.gamma;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{ domxref("DeviceOrientationEvent") }}</li>
  <li><a href="/en-US/docs/Web/API/Detecting_device_orientation"
      title="Detecting device orientation">Detecting device orientation</a></li>
  <li><a href="/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained"
      title="Orientation and motion data explained">Orientation and motion data
      explained</a></li>
  <li>{{ domxref("window.ondeviceorientation") }}</li>
  <li>{{ event("deviceorientation") }}</li>
</ul>
