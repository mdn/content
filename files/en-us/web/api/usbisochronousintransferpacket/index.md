---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBIsochronousInTransferPacket
  - WebUSB
  - WebUSB API
browser-compat: api.USBIsochronousInTransferPacket
---
<p>{{draft}}{{securecontext_header}}{{APIRef("WebUSB API")}}</p>

<p>The <code>USBIsochronousInTransferPacket</code> interface of the <a href="/en-US/docs/Web/API/WebUSB_API" rel="nofollow">WebUSB API</a> is part of the response from a call to the <code>isochronousTransferIn()</code> method of the <code>USBDevice</code> interface. It represents the status of an individual packet from a request to transfer data from the USB device to the USB host over an isochronous endpoint.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("USBIsochronousInTransferPacket.USBIsochronousInTransferPacket()")}}</dt>
 <dd>Creates a new <code>USBIsochronousInTransferPacket</code> object with the provided <code>status</code> and <code>data</code> fields.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("USBIsochronousInTransferPacket.data")}}{{readonlyInline}}{{readonlyInline}}</dt>
 <dd>Returns a <code>DataView</code> object containing the data received from the USB device in this packet, if any.</dd>
 <dt>{{domxref("USBIsochronousInTransferPacket.status")}}{{readonlyInline}}{{readonlyInline}}</dt>
 <dd>Returns the status of the transfer request, one of:
 <ul>
  <li><code>"ok"</code> - The transfer was successful.</li>
  <li><code>"stall"</code> - The device indicated an error by generating a stall condition on the endpoint. A stall on an isochronous endpoint does not need to be cleared.</li>
  <li><code>"babble"</code> - The device responded with more data than was expected.</li>
 </ul>
 </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
