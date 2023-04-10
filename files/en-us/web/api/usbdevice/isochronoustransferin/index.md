---
title: "USBDevice: isochronousTransferIn() method"
short-title: isochronousTransferIn()
slug: Web/API/USBDevice/isochronousTransferIn
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.isochronousTransferIn
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`isochronousTransferIn()`** method of the {{domxref("USBDevice")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousInTransferResult")}} when time sensitive information has been transmitted to (received by) the USB device.

## Syntax

```js-nolint
isochronousTransferIn(endpointNumber, packetLengths)
```

### Parameters

- `endpointNumber`
  - : The number of a device-specific endpoint (buffer).
- `packetLengths`
  - : An array of lengths for the packets being received.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousInTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
