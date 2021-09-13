---
title: USBDevice.controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
tags:
- API
- Method
- Reference
- USB
- USBDevice
- WebUSB
- WebUSB API
- controlTransferOut
browser-compat: api.USBDevice.controlTransferOut
---
<p>{{APIRef("WebUSB API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>controlTransferOut()</code></strong> method of the
  {{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves with a
  {{domxref("USBOutTransferResult")}} when a command or status operation has been
  transmitted to the USB device.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var promise = USBDevice.controlTransferOut(<em>setup</em>, <em>data</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>setup</dt>
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
  <dt>data</dt>
  <dd>A {{domxref("TypedArray")}} containing the data that will be transfered to the
    device. Not all commands require data; some commands can send data just through the
    value parameter. Check with your device to see what the specific request requires.
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("promise")}} that resolves with a {{domxref("USBOutTransferResult")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
