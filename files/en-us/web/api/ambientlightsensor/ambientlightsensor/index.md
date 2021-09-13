---
title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
tags:
  - API
  - Ambient Light Sensor API
  - AmbientLightSensor
  - Constructor
  - Reference
browser-compat: api.AmbientLightSensor.AmbientLightSensor
---
<p>{{APIRef("Sensor API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>AmbientLightSensor()</code></strong> constructor creates a new {{domxref("AmbientLightSensor")}} object, which returns the current light level or illuminance of the ambient light around the hosting device.</p>

<p>If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var ambientLightSensor = new AmbientLightSensor(options)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>options</em> {{optional_inline}}</dt>
 <dd>Currently only one option is supported:
 <ul>
  <li><code>frequency</code>: The desired number of times per second a sample should be taken, meaning the number of times per second that {{domxref('sensor.onreading')}} will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.</li>
 </ul>
 </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
