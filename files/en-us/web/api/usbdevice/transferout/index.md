---
title: "USBDevice: transferOut() method"
short-title: transferOut()
slug: Web/API/USBDevice/transferOut
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.transferOut
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`transferOut()`** method of the {{domxref("USBDevice")}}
interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBOutTransferResult")}} when bulk or interrupt data is sent to the USB
device.

## Syntax

```js-nolint
transferOut(endpointNumber, data)
```

### Parameters

- `endpointNumber`
  - : The number of a device-specific endpoint (buffer).
- `data`
  - : A {{jsxref("TypedArray")}} containing the data to send to the device.

### Return value

A {{jsxref("promise")}} that resolves with a {{domxref("USBOutTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
