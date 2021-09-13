---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
tags:
  - API
  - Ambient Light Sensor API
  - AmbientLightSensor
  - Generic Sensor API
  - Interface
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.AmbientLightSensor
---
<p>{{APIRef("Sensor API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>AmbientLightSensor</code></strong> interface of the <a href="/en-US/docs/Web/API/Sensor_APIs">Sensor APIs</a> returns the current light level or illuminance of the ambient light around the hosting device.</p>

<p>To use this sensor, the user must grant permission to the <code>'ambient-light-sensor'</code> device sensor through the <a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a>.</p>

<p>If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("AmbientLightSensor.AmbientLightSensor()", "AmbientLightSensor()")}}</dt>
 <dd>Creates a new <code>AmbientLightSensor</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref('AmbientLightSensor.illuminance')}}</dt>
 <dd>Returns the current light level in <a href="https://en.wikipedia.org/wiki/Lux">lux</a> of the ambient light level around the hosting device.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">if ( 'AmbientLightSensor' in window ) {
  const sensor = new AmbientLightSensor();
  sensor.onreading = () =&gt; {
    console.log('Current light level:', sensor.illuminance);
  };
  sensor.onerror = (event) =&gt; {
    console.log(event.error.name, event.error.message);
  };
  sensor.start();
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
