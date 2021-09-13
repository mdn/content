---
title: GravitySensor
slug: Web/API/GravitySensor
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Generic Sensor API
  - GravitySensor
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.GravitySensor
---
<div>{{APIRef("Sensor API")}}</div>

<p>The <strong><code>GravitySensor</code></strong> interface of the <a href="/en-US/docs/Web/API/Sensor_APIs">Sensor APIs</a> provides on each reading the gravity applied to the device along all three axes.</p>

<p>To use this sensor, the user must grant permission to the <code>'accelerometer'</code> device sensor through the <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a>.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
	<dt>{{domxref("GravitySensor.GravitySensor", "GravitySensor()")}}</dt>
	<dd>Creates a new <code>GravitySensor</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its ancestor, {{domxref('Accelerometer')}}.</em></p>

<h2 id="Example">Example</h2>

<p>Gravity is typically read in the {{domxref('Sensor.onreading')}} event callback. In the example below this occurs sixty times a second.</p>

<pre class="brush: js">let gravitySensor = new GravitySensor({frequency: 60});

gravitySensor.addEventListener("reading", e =&gt; {
  console.log(`Gravity along the X-axis ${gravitySensor.x}`);
  console.log(`Gravity along the Y-axis ${gravitySensor.y}`);
  console.log(`Gravity along the Z-axis ${gravitySensor.z}`);
});

gravitySensor.start();</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
