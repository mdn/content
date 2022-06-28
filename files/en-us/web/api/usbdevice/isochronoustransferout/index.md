---
title: USBDevice.isochronousTransferOut()
slug: Web/API/USBDevice/isochronousTransferOut
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - isochronousTransferOut
  - Experimental
browser-compat: api.USBDevice.isochronousTransferOut
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`isochronousTransferOut()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBIsochronousOutTransferResult")}} when time sensitive information has been
transmitted to the USB device.

## Syntax

```js
isochronousTransferOut(endpointNumber, data, packetLengths)
```

### Parameters

- `endpointNumber`
  - : The number of a device-specific endpoint (buffer).
- `data`
  - : A {{domxref("TypedArray")}} containing the data to send to the device.
- `packetLengths`
  - : An array of lengths for the packets being transferred.

### Return value

A {{jsxref("promise")}} that resolves with a
{{domxref("USBIsochronousOutTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
