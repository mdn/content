---
title: Accelerometer()
slug: Web/API/Accelerometer/Accelerometer
tags:
  - API
  - Accelerometer
  - Accelerometer API
  - Constructor
  - Generic Sensor API
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Accelerometer.Accelerometer
---
<div>{{APIRef("Sensor API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>Accelerometer()</code></strong> constructor creates a new {{domxref("Accelerometer")}} object which returns the acceleration of the device along all three axes at the time it is read.</p>

<p>If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>accelerometer</var> = new Accelerometer([<em>options</em>])</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>options</em> {{optional_inline}}</dt>
 <dd>Options are as follows:
 <ul>
  <li><code>frequency</code>: The desired number of times per second a sample should be taken, meaning the number of times per second that {{domxref('sensor.onreading')}} will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.</li>
  <li><code>referenceFrame</code>: Either <code>'device'</code> or <code>'screen'</code>. The default is <code>'device'</code>.</li>
 </ul>
 </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
