---
title: Sensor.onreading
slug: Web/API/Sensor/onreading
tags:
- API
- EventHandler
- Generic Sensor API
- Property
- Reference
- Sensor
- Sensor APIs
- Sensors
- onreading
- reading
browser-compat: api.Sensor.onreading
---
<div>{{APIRef("Sensor API")}}</div>

<p>The <strong><code>onreading</code></strong>
    <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> is called when a reading is taken on one of the child
    interfaces of the {{domxref("Sensor")}} interface.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">sensorInstance.onreading = function
  sensorInstance.addEventListener('reading', function() { ... })</pre>

<p>Because {{domxref('Sensor')}} is a base class, <code>onreading</code> may only be used
  on one of its derived classes.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
