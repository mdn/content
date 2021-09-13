---
title: USB.getDevices()
slug: Web/API/USB/getDevices
tags:
- API
- Method
- Reference
- USB
- WebUSB
- WebUSB API
- getDevices()
browser-compat: api.USB.getDevices
---
<p>{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}</p>

<p>The <strong><code>getDevices</code></strong> method of the {{DOMxRef("USB")}} interface
  returns a {{JSxRef("Promise")}} that resolves with an array of {{DOMxRef("USBDevice")}}
  objects for paired attached devices. For information on pairing devices, see
  {{DOMxRef("USB.requestDevice()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>USB</em>.getDevices()</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A {{JSxRef("Promise")}} that resolves with an array of {{DOMxRef("USBDevice")}}
  objects.</p>

<h2 id="Example">Example</h2>

<p>The following example logs the product name and serial number of paired devices to the
  console. For information on pairing devices, see
  {{DOMxRef("USB.requestDevice","USB.requestDevice()")}}.</p>

<pre class="brush: js">navigator.usb.getDevices()
.then(devices =&gt; {
  console.log("Total devices: " + devices.length);
  devices.forEach(device =&gt; {
    console.log("Product name: " + device.productName + ", serial number " + device.serialNumber);
  });
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
