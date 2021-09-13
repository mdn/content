---
title: Magnetometer()
slug: Web/API/Magnetometer/Magnetometer
tags:
- API
- Constructor
- Generic Sensor API
- Magnetometer
- Reference
- Sensor
- Sensor APIs
- Sensors
browser-compat: api.Magnetometer.Magnetometer
---
<div>{{APIRef("Sensor API")}}</div>

<p>The <strong><code>Magnetometer()</code></strong> constructor
    creates a new {{domxref("Magnetometer")}} object which returns information about the
    magnetic field as detected by a device's primary magnetometer sensor.</p>

<p>If a feature policy blocks use of a feature it is because your code is inconsistent
  with the policies set on your server. This is not something that would ever be shown to
  a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation
  instructions.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>magnetometer</var> = new Magnetometer([<em>options</em>])</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>options</em> {{optional_inline}}</dt>
  <dd>Options are as follows:
    <ul>
      <li><code>frequency</code>: The desired number of times per second a sample should
        be taken, meaning the number of times per second that
        {{domxref('sensor.onreading')}} will be called. A whole number or decimal may be
        used, the latter for frequencies less than a second. The actual reading frequency
        depends on device hardware and consequently may be less than requested.</li>
      <li><code>referenceFrame</code>: Either <code>'device'</code> or
        <code>'screen'</code>. The default is <code>'device'</code>.</li>
    </ul>
  </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
