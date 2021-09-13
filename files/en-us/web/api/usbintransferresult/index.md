---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBInTransferResult
  - WebUSB
  - WebUSB API
browser-compat: api.USBInTransferResult
---
<p>{{draft}}{{securecontext_header}}{{APIRef("WebUSB API")}}</p>

<p>The <code>USBInTransferResult</code> interface of the <a href="/en-US/docs/Web/API/WebUSB_API" rel="nofollow">WebUSB API</a> provides the result from a call to the <code>transferIn()</code> and <code>controlTransferIn()</code> methods of the <code>USBDevice</code> interface. It represents the result from requesting a transfer of data from the USB device to the USB host.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("USBInTransferResult.USBInTransferResult()")}}</dt>
 <dd>Creates a new <code>USBInTransferResult</code> object with the provided <code>status</code> and <code>data</code> fields.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("USBInTransferResult.data")}}{{readonlyInline}}</dt>
 <dd>Returns a <code>DataView</code> object containing the data received from the USB device, if any.</dd>
 <dt>{{domxref("USBInTransferResult.status")}}{{readonlyInline}}</dt>
 <dd>Returns the status of the transfer request, one of:
 <ul>
  <li><code>"ok"</code> - The transfer was successful.</li>
  <li><code>"stall"</code> - The device indicated an error by generating a stall condition on the endpoint. A stall on the control endpoint does not need to be cleared. A stall on a bulk or interrupt endpoint must be cleared by calling <code>clearHalt()</code> before <code>transferIn()</code> can be called again.</li>
  <li><code>"babble"</code> - The device responded with more data than was expected.</li>
 </ul>
 </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
