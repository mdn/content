---
title: "SerialPort: getInfo() method"
short-title: getInfo()
slug: Web/API/SerialPort/getInfo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SerialPort.getInfo
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`getInfo()`** method of the {{domxref("SerialPort")}} interface returns an object whose properties are the vendor ID and product ID of the device.

## Syntax

```js-nolint
getInfo()
```

### Parameters

None.

### Return value

An object containing the following values.

- `usbVendorId`
  - : If the port is part of a USB device, an unsigned short integer that identifies a USB device vendor, otherwise `undefined`.
- `usbProductId`
  - : If the port is part of a USB device, an unsigned short integer that identifies a USB device, otherwise `undefined`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
