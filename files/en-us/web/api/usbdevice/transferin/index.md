---
title: USBDevice.transferIn()
slug: Web/API/USBDevice/transferIn
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - transferIn
  - Experimental
browser-compat: api.USBDevice.transferIn
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`transferIn()`** method of the {{domxref("USBDevice")}}
interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBInTransferResult")}} when bulk or interrupt data is received from the USB
device.

## Syntax

```js
transferIn(endpointNumber, length)
```

### Parameters

- `endpointNumber`
  - : The number of a device-specific endpoint (buffer).
- `length`
  - : The maximum number of bytes that will be read back from the device. The actual data
    is in the {{domxref("USBInTransferResult")}} in the resolved Promise.

### Return value

A {{jsxref("promise")}} that resolves with a {{domxref("USBInTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
