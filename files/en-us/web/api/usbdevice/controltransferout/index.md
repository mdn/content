---
title: "USBDevice: controlTransferOut() method"
short-title: controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.controlTransferOut
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`controlTransferOut()`** method of the {{domxref("USBDevice")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBOutTransferResult")}} when a command or status operation has been transmitted from the USB device.

## Syntax

```js-nolint
controlTransferOut(setup, data)
```

### Parameters

- `setup`

  - : An object that sets options for. The available options are:

    - `requestType`
      - : Must be one of three values specifying whether the transfer is `"standard"` (common to all USB devices) `"class"` (common to an industry-standard class of devices) or `"vendor"`.
    - `recipient`
      - : Specifies the target of the transfer on the device, one of `"device"`, `"interface"`, `"endpoint"`, or `"other"`.
    - `request`
      - : A vendor-specific command.
    - `value`
      - : Vendor-specific request parameters.
    - `index`
      - : The interface number of the recipient.

- `data`
  - : A {{jsxref("TypedArray")}} containing the data that will be transferred to the device.
    Not all commands require data; some commands can send data just through the value parameter.
    Check with your device to see what the specific request requires.

### Return value

A {{jsxref("promise")}} that resolves with a {{domxref("USBOutTransferResult")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
