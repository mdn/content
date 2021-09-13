---
title: DeviceOrientationEvent()
slug: Web/API/DeviceOrientationEvent/DeviceOrientationEvent
tags:
- API
- Constructor
- Device Orientation API
- DeviceOrientationEvent
- Experimental
- Reference
browser-compat: api.DeviceOrientationEvent.DeviceOrientationEvent
---
<p>{{APIRef("Device Orientation Events")}}{{Non-standard_header}}</p>

<p>The <strong><code>DeviceOrientationEvent()</code></strong> constructor creates a new
  {{domxref("DeviceOrientationEvent")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var deviceOrientationEvent = new DeviceOrientationEvent(type[, options])</pre>

<h3 id="Parameters">Parameters</h3>


<dl>
  <dt><em>type</em></dt>
  <dd>Either <code>"deviceorientation"</code> or <code>"deviceorientationabsolute"</code>.
    If the later, then <code>options.absolute</code> should be true.</dd>
  <dt><em>options</em> {{optional_inline}}</dt>
  <dd>Options are as follows:
    <ul>
      <li><code>alpha</code>: A number representing the motion of the device around the z
        axis, express in degrees with values ranging from 0 to 360.</li>
      <li><code>beta</code>: A number representing the motion of the device around the x
        axis, express in degrees with values ranging from -180 to 180. This represents a
        front to back motion of the device.</li>
      <li><code>gamma</code>: A number representing the motion of the device around the y
        axis, express in degrees with values ranging from -90 to 90. This represents a
        left to right motion of the device.</li>
      <li><code>absolute</code>: A boolean that indicates whether or not the device is
        providing orientation data absolutely.</li>
    </ul>
  </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
