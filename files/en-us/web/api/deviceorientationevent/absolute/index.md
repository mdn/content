---
title: DeviceOrientationEvent.absolute
slug: Web/API/DeviceOrientationEvent/absolute
tags:
  - API
  - Device Orientation API
  - DeviceOrientationEvent
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.DeviceOrientationEvent.absolute
---
<p>{{ apiref("Device Orientation Events") }}</p>

<p>Indicates whether or not the device is providing orientation data absolutely (that is,
  in reference to the Earth's coordinate frame) or using some arbitrary frame determined
  by the device. See <a href="/en-US/docs/Web/Guide/Events/Orientation_and_motion_data_explained"
    title="Orientation and motion data explained">Orientation and motion data
    explained</a> for details.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var absolute = <em>instanceOfDeviceOrientationEvent</em>.absolute;
</pre>

<p>On return, <em><code>absolute</code></em> is <code>true</code> if the orientation data
  in <code>instanceOfDeviceOrientationEvent</code> is provided as the difference between
  the Earth's coordinate frame and the device's coordinate frame, or <code>false</code> if
  the orientation data is being provided in reference to some arbitrary, device-determined
  coordinate frame.</p>

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
