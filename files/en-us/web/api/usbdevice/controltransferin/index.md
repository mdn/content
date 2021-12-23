---
title: USBDevice.controlTransferIn()
slug: Web/API/USBDevice/controlTransferIn
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - controlTransferIn
browser-compat: api.USBDevice.controlTransferIn
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`controlTransferIn()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBInTransferResult")}} when the result of a command or status request has
been received from the USB device.

## Syntax

```js
var promise = USBDevice.controlTransferIn(setup, length)
```

### Parameters

- setup

  - : An object that sets options for . The available options are:

    - `requestType`: Must be one of three values specifying whether the
      tranfer is `"standard"` (common to all USB devices)
      `"class"` (common to an industry-standard class of devices) or
      `"vendor"`.
    - `recipient`: Specifices the target of the transfer on the device, one
      of `"device"`, `"interface"`, `"endpoint"`, or
      `"other"`.
    - `request`: A vendor-specific command.
    - `value`: Vender-specific request parameters.
    - `index`: The interface number of the recipient.

- length
  - : The maximum number of bytes to read from the device. The actual data is in
    the {{domxref("USBInTransferResult")}} in the resolved Promise.

### Return value

{{jsxref("promise")}} that resolves with a {{domxref("USBInTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
