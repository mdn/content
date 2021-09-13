---
title: PositionOptions.timeout
slug: Web/API/PositionOptions/timeout
tags:
  - API
  - Geolocation API
  - NeedsExample
  - PositionOptions
  - Property
  - Reference
  - Secure context
browser-compat: api.PositionOptions.timeout
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>The <code><strong>PositionOptions.timeout</strong></code> property is a positive
	<code>long</code> value representing the maximum length of time (in milliseconds) the
	device is allowed to take in order to return a position. The default value is
	<code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code>,
	meaning that <code>getCurrentPosition()</code> won't return until the position is
	available.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>positionOptions</var>.timeout = <var>timeLength</var>
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/API/Geolocation_API">Using geolocation</a></li>
	<li>The {{domxref("PositionOptions")}} interface it belongs to.</li>
</ul>
