---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
tags:
  - API
  - Battery API
  - Device API
  - Method
  - Navigator
  - Reference
  - getBattery
browser-compat: api.Navigator.getBattery
---
<div>{{ ApiRef("Battery API") }}</div>

<p>The <strong><code>getBattery()</code></strong> method provides information about the
  system's battery. It returns a battery promise, which is resolved in a
  {{domxref("BatteryManager")}} object providing also some new events you can handle to
  monitor the battery status. This implements the <a
    href="/en-US/docs/Web/API/Battery_Status_API">Battery Status API</a>; see that
  documentation for additional details, a guide to using the API, and sample code.</p>

<div class="notecard note">
  <p><strong>Note:</strong> In some browsers access to this feature is controlled by
    {{HTTPHeader("Feature-Policy")}} directive
    {{HTTPHeader("Feature-Policy/battery","battery")}}.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>batteryPromise</em> = navigator.getBattery();</pre>

<h3 id="Return_value">Return value</h3>

<p>A {{JSxRef("Promise")}} which, when resolved, calls its fulfillment handler with a
  single parameter: a {{DOMxRef("BatteryManager")}} object which you can use to get
  information about the battery's state.</p>

<h2 id="Exceptions">Exceptions</h2>

<p>This method doesn't throw true exceptions; instead, it rejects the returned promise,
  passing into it a {{domxref("DOMException")}} whose <code>name</code> is one of the
  following:</p>

<dl>
  <dt><code>SecurityError</code></dt>
  <dd>The User Agent does not expose battery information to insecure contexts and this
    method was called from insecure context.<br>
    <strong>Note:</strong> Old versions of some User Agents might allow use of this
    feature in insecure contexts.
  </dd>
  <dt><code>NotAllowedError</code></dt>
  <dd><strong>Note:</strong> No User Agent currently throws this exception, but the
    specification describes the following behaviors:<br>
    This document is not allowed to use this feature. For example, it might not be
    explicitly allowed or restricted via {{HTTPHeader("Feature-Policy")}}
    {{HTTPHeader("Feature-Policy/battery", "battery")}} feature.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example fetches the current charging state of the battery and establishes a
  handler for the {{Event("chargingchange")}} event, so that the charging state is
  recorded whenever it changes.</p>

<pre class="brush: js">let batteryIsCharging = false;

navigator.getBattery().then(function(battery) {
  batteryIsCharging = battery.charging;

  battery.addEventListener('chargingchange', function() {
    batteryIsCharging = battery.charging;
  });
});</pre>

<p>For more examples and details, see <a
    href="/en-US/docs/Web/API/Battery_Status_API">Battery Status API</a>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Battery_Status_API">Battery Status API</a></li>
  <li><code>Feature-Policy</code> {{HTTPHeader("Feature-Policy/battery", "battery")}}
    feature</li>
</ul>
