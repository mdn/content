---
title: USBDevice.transferIn()
slug: Web/API/USBDevice/transferIn
tags:
- API
- Method
- Reference
- USB
- USBDevice
- WebUSB
- WebUSB API
- transferIn
browser-compat: api.USBDevice.transferIn
---
<p>{{APIRef("WebUSB API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>transferIn()</code></strong> method of the {{domxref("USBDevice")}}
  interface returns a {{jsxref("promise")}} that resolves with a
  {{domxref("USBTransferInResult")}} when bulk or interrupt data is received from the USB
  device.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var promise = USBDevice.transferIn(<em>endpointNumber</em>, <em>length</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>endpointNumber</dt>
  <dd>The number of a device-specific endpoint (buffer).</dd>
  <dt>length</dt>
  <dd>The maximum number of bytes that will be read back from the device. The actual data
    is in the {{domxref("USBInTransferResult")}} in the resolved Promise.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("promise")}} that resolves with a {{domxref("USBTransferInResult")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
