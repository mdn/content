---
title: "USBDevice: isochronousTransferOut() method"
short-title: isochronousTransferOut()
slug: Web/API/USBDevice/isochronousTransferOut
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.isochronousTransferOut
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`isochronousTransferOut()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousOutTransferResult")}} when time sensitive information has been transmitted from the USB device.

## Syntax

```js-nolint
isochronousTransferOut(endpointNumber, data, packetLengths)
```

### Parameters

- `endpointNumber`
  - : The number of a device-specific endpoint (buffer).
- `data`
  - : A {{jsxref("TypedArray")}} containing the data to send to the device.
- `packetLengths`
  - : An array of lengths for the packets being transferred.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousOutTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
