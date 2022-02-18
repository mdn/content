---
title: USBDevice.transferOut()
slug: Web/API/USBDevice/transferOut
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - transferOut
browser-compat: api.USBDevice.transferOut
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`transferOut()`** method of the {{domxref("USBDevice")}}
interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBOutTransferResult")}} when bulk or interrupt data is sent to the USB
device.

## Syntax

```js
var promise = USBDevice.transferOut(endpointNumber, data)
```

### Parameters

- endpointNumber
  - : The number of a device-specific endpoint (buffer).
- data
  - : A {{domxref("TypedArray")}} containing the data to send to the device.

### Return value

A {{jsxref("promise")}} that resolves with a {{domxref("USBOutTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
