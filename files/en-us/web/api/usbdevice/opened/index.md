---
title: USBDevice.opened
slug: Web/API/USBDevice/opened
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - opened
  - Experimental
browser-compat: api.USBDevice.opened
---
{{SeeCompatTable}}{{APIRef("WebUSB API")}}

The **`opened`** read only property of the
{{domxref("USBDevice")}} interface indicates whether a session has been started with a
paired USB device. A device must be opened before it can be controlled by a web page.

## Value

A {{jsxref("boolean")}}.

## Examples

This example is for a hypothetical USB device with a multi-colored LED. It shows how to
test that a device is open before calling {{domxref("USBDevice.controlTransferOut")}} to
set a specified LED color.

> **Note:** What data can be passed to a USB device and how it is passed is particular and unique
> to each device.

```js
async function setDeviceColor(usbDevice, r, g, b) {
  if (device.opened) {
    // This hypothetical USB device requires that the data passed to
    // it be in a Uint8Array.
    const payload = new Uint8Array([r, g, b]);

    await usbDevice.controlTransferOut({
      requestType: 'vendor',
      recipient: 'device',
      request: 1,
      value: 0,
      index: 0,
    }, payload);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
