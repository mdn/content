---
title: HIDDevice.vendorId
slug: Web/API/HIDDevice/vendorId
tags:
  - API
  - Property
  - Reference
  - vendorId
  - HIDDevice
browser-compat: api.HIDDevice.vendorId
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`vendorId`** read-only property of the {{domxref("HIDDevice")}} interface returns the vendor ID of the connected HID device. This identifies the vendor of the device.

## Syntax

```js
let vendorId = HIDDevice.vendorId;
```

### Value

An integer. If the device has no vendor ID, or the vendor ID cannot be accessed this will return `0`.

## Examples

The following example rerieves devices with {{domxref("HID.getDevices()")}} and logs the value of `vendorId` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach(device => {
    console.log(`HID: ${device.vendorId}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
