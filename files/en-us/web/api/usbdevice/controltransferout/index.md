---
title: USBDevice.controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - controlTransferOut
browser-compat: api.USBDevice.controlTransferOut
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`controlTransferOut()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves with a
{{domxref("USBOutTransferResult")}} when a command or status operation has been
transmitted to the USB device.

## Syntax

```js
var promise = USBDevice.controlTransferOut(setup, data)
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

- data
  - : A {{domxref("TypedArray")}} containing the data that will be transfered to the
    device. Not all commands require data; some commands can send data just through the
    value parameter. Check with your device to see what the specific request requires.

### Return value

A {{jsxref("promise")}} that resolves with a {{domxref("USBOutTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
