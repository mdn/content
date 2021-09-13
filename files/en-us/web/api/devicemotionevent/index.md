---
title: DeviceMotionEvent
slug: Web/API/DeviceMotionEvent
tags:
  - API
  - Device Orientation
  - DeviceMotionEvent
  - Experimental
  - Interface
  - Mobile
  - Motion
  - Orientation
  - Reference
browser-compat: api.DeviceMotionEvent
---
<p>{{APIRef("Device Orientation Events")}}{{SeeCompatTable}}</p>

<p>The <code>DeviceMotionEvent</code> provides web developers with information about the speed of changes for the device's position and orientation.</p>

<div class="warning">
<p><strong>Warning:</strong> Currently, Firefox and Chrome do not handle the coordinates the same way. Take care about this while using them.</p>
</div>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{DOMxRef("DeviceMotionEvent.DeviceMotionEvent()")}} {{Non-standard_Inline}}</dt>
 <dd>Creates a new <code>DeviceMotionEvent</code>.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{DOMxRef("DeviceMotionEvent.acceleration")}}{{ReadOnlyInline}}</dt>
 <dd>An object giving the acceleration of the device on the three axis X, Y and Z. Acceleration is expressed in <a href="https://en.wikipedia.org/wiki/Meter_per_second_squared">m/s²</a>.</dd>
 <dt>{{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}}{{ReadOnlyInline}}</dt>
 <dd>An object giving the acceleration of the device on the three axis X, Y and Z with the effect of gravity. Acceleration is expressed in <a href="https://en.wikipedia.org/wiki/Meter_per_second_squared">m/s²</a>.</dd>
 <dt>{{DOMxRef("DeviceMotionEvent.rotationRate")}}{{ReadOnlyInline}}</dt>
 <dd>An object giving the rate of change of the device's orientation on the three orientation axis alpha, beta and gamma. Rotation rate is expressed in degrees per seconds.</dd>
 <dt>{{DOMxRef("DeviceMotionEvent.interval")}}{{ReadOnlyInline}}</dt>
 <dd>A number representing the interval of time, in milliseconds, at which data is obtained from the device.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Event("deviceorientation")}}</li>
 <li>{{DOMxRef("DeviceOrientationEvent")}}</li>
 <li>{{Event("devicemotion")}}</li>
 <li>{{DOMxRef("Accelerometer")}}</li>
 <li>{{DOMxRef("LinearAccelerationSensor")}}</li>
 <li><a href="/en-US/docs/Web/Events/Detecting_device_orientation">Detecting device orientation</a></li>
 <li><a href="/en-US/docs/Web/Events/Orientation_and_motion_data_explained" title="Orientation and motion data explained">Orientation and motion data explained</a></li>
</ul>
