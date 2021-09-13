---
title: USBDevice.claimInterface()
slug: Web/API/USBDevice/claimInterface
tags:
- API
- Method
- Reference
- USB
- USBDevice
- WebUSB
- WebUSB API
- claimInterface
browser-compat: api.USBDevice.claimInterface
---
<p>{{APIRef("WebUSB API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>claimInterface()</code></strong> method of the
  {{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when
  the requested interface is claimed for exclusive access.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var promise = USBDevice.claimInterface(<em>interfaceNumber</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>interfaceNumber</dt>
  <dd>The index of one of the interfaces supported by the device. Interfaces are
    device-specific.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("promise")}}.</p>

<h2 id="Example">Example</h2>

<p>The following example shows <code>claimInterface()</code> in the context of connecting
  to a USB device.</p>

<pre>async function connectDevice(usbDevice) {
  await usbDevice.open();
  if (usbDevice.configuration === null)
    await usbDevice.selectConfiguration(1);
  await usbDevice.claimInterface(0);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
