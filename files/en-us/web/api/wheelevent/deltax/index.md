---
title: WheelEvent.deltaX
slug: Web/API/WheelEvent/deltaX
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
  - WheelEvent
browser-compat: api.WheelEvent.deltaX
---
<p>{{APIRef("DOM Events")}}</p>

<p>The <code><strong>WheelEvent.deltaX</strong></code> read-only property is a
  <code>double</code> representing the horizontal scroll amount in the
  {{domxref("WheelEvent.deltaMode")}} unit.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var dX = event.deltaX;</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaX": 4, "deltaMode": 0});

console.log(syntheticEvent.deltaX);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{ event("wheel") }}</li>
  <li>{{domxref("WheelEvent")}}</li>
</ul>
