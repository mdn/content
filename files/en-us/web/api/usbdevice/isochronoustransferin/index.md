---
title: USBDevice.isochronousTransferIn()
slug: Web/API/USBDevice/isochronousTransferIn
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - isochronousTransferIn
browser-compat: api.USBDevice.isochronousTransferIn
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`isochronousTransferIn()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBIsochronousInTransferResult")}} when time sensitive information has been
transmitted received from the USB device.

## Syntax

```js
var promise = USBDevice.isochronousTransferIn(endpointNumber, packetLengths)
```

### Parameters

- endpointNumber
  - : The number of a device-specific endpoint (buffer).
- packetLengths
  - : An array of lengths for the packets being received.

### Return value

A {{jsxref("promise")}} that resolves with a
{{domxref("USBIsochronousInTransferResult")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
