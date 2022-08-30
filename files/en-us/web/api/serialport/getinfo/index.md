---
title: SerialPort.getInfo()
slug: Web/API/SerialPort/getInfo
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getInfo()
  - SerialPort
  - Experimental
browser-compat: api.SerialPort.getInfo
---
{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

The **`getInfo()`** method of the {{domxref("SerialPort")}} interface returns an object whose properties are the vendor ID and product ID of the device.

## Syntax

```js
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
