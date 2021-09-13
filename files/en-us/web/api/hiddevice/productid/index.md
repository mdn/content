---
title: HIDDevice.productId
slug: Web/API/HIDDevice/productId
tags:
  - API
  - Property
  - Reference
  - productId
  - HIDDevice
browser-compat: api.HIDDevice.productId
---
<div>{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}</div>

<p>The <strong><code>productId</code></strong> read-only property of the {{domxref("HIDDevice")}} interface returns the product ID of the connected HID device.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let productId = HIDDevice.productId;</pre>

<h3>Value</h3>
<p>An integer. If the device has no product ID, or the product ID cannot be accessed this will return <code>0</code>.</p>

<h2 id="Examples">Examples</h2>

<p>The following example rerieves devices with {{domxref("HID.getDevices()")}} and logs the value of <code>productId</code> to the console.</p>

<pre class="brush: js">document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach(device => {
    console.log(`HID: ${device.productId}`);
  });
});</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>


