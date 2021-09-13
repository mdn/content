---
title: GeolocationCoordinates.accuracy
slug: Web/API/GeolocationCoordinates/accuracy
tags:
  - API
  - Geolocation API
  - GeolocationCoordinates
  - Property
  - Secure context
  - accuracy
browser-compat: api.GeolocationCoordinates.accuracy
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>The <code><strong>GeolocationCoordinates.accuracy</strong></code> read-only property is
  a strictly positive <code>double</code> representing the accuracy, with a 95% confidence
  level, of the {{domxref("GeolocationCoordinates.latitude")}} and
  {{domxref("GeolocationCoordinates.longitude")}} properties expressed in meters.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>let acc</var> = <var>geolocationCoordinatesInstance</var>.accuracy
</pre>

<h3 id="Value">Value</h3>

<p>A positive <code>double</code> representing the accuracy, with a 95% confidence level,
  of the {{domxref("GeolocationCoordinates.latitude")}} and
  {{domxref("GeolocationCoordinates.longitude")}} properties expressed in meters.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API">Using the Geolocation API</a>
  </li>
  <li>{{domxref("GeolocationCoordinates")}}</li>
</ul>
