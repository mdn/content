---
title: USBDevice.controlTransferIn()
slug: Web/API/USBDevice/controlTransferIn
tags:
- API
- Method
- Reference
- USB
- USBDevice
- WebUSB
- WebUSB API
- controlTransferIn
browser-compat: api.USBDevice.controlTransferIn
---
<p>{{APIRef("WebUSB API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>controlTransferIn()</code></strong> method of the
  {{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves with a
  {{domxref("USBInTransferResult")}} when the result of a command or status request has
  been received from the USB device.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var promise = USBDevice.controlTransferIn(<em>setup</em>, <em>length</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>setup </dt>
  <dd>An object that sets options for . The available options are:
    <ul>
      <li><code>requestType</code>: Must be one of three values specifying whether the
        tranfer is <code>"standard"</code> (common to all USB devices)
        <code>"class"</code> (common to an industry-standard class of devices) or
        <code>"vendor"</code>.</li>
      <li><code>recipient</code>: Specifices the target of the transfer on the device, one
        of <code>"device"</code>, <code>"interface"</code>, <code>"endpoint"</code>, or
        <code>"other"</code>.</li>
      <li><code>request</code>: A vendor-specific command.</li>
      <li><code>value</code>: Vender-specific request parameters.</li>
      <li><code>index</code>: The interface number of the recipient.</li>
    </ul>
  </dd>
  <dt>length</dt>
  <dd>The maximum number of bytes to read from the device. The actual data is in
    the {{domxref("USBInTransferResult")}} in the resolved Promise.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref("promise")}} that resolves with a {{domxref("USBInTransferResult")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
