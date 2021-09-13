---
title: HIDDevice.close()
slug: Web/API/HIDDevice/close
tags:
  - API
  - Method
  - Reference
  - close
  - HIDDevice
browser-compat: api.HIDDevice.close
---
<div>{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}</div>

<p>The <strong><code>close()</code></strong> method of the {{domxref("HIDDevice")}} interface closes the connection to the HID device.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">HIDDevice.close();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None</p>

<h3 id="Returns">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with <code>undefined</code> once the connection is closed.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example we close the HID device, once all data has been sent and received.</p>

<pre class="brush: js">await device.close();</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>


