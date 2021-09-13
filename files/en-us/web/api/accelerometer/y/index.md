---
title: Accelerometer.y
slug: Web/API/Accelerometer/y
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - Property
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
  - 'y'
browser-compat: api.Accelerometer.y
---
<div>{{APIRef("Sensor API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>y</code></strong> read-only property of the {{domxref("Accelerometer")}} interface returns a double precision integer containing the acceleration of the device along the its y axis.</p>

<p>If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>yAcceleration</var> = <var>accelerometer</var>.y</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref('Number')}}.</p>

<h2 id="Example">Example</h2>

<p>Acceleration is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.</p>

<pre class="brush: js">let accelerometer = new Accelerometer({frequency: 60});

accelerometer.addEventListener('reading', e =&gt; {
 console.log("Acceleration along the X-axis " + accelerometer.x);
 console.log("Acceleration along the Y-axis " + accelerometer.y);
 console.log("Acceleration along the Z-axis " + accelerometer.z);
});
accelerometer.start();</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
