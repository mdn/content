---
title: "USBDevice: transferIn() method"
short-title: transferIn()
slug: Web/API/USBDevice/transferIn
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.transferIn
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`transferIn()`** method of the {{domxref("USBDevice")}}
interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBInTransferResult")}} when bulk or interrupt data is received from the USB
device.

## Syntax

```js-nolint
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
