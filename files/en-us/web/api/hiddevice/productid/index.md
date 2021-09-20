---
title: HIDDevice.productId
slug: Web/API/HIDDevice/productId
tags:
  - API
  - Property
  - Reference
  - productId
  - HIDDevice
browser-compat: api.HIDDevice.productId
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`productId`** read-only property of the {{domxref("HIDDevice")}} interface returns the product ID of the connected HID device.

## Syntax

```js
let productId = HIDDevice.productId;
```

### Value

An integer. If the device has no product ID, or the product ID cannot be accessed this will return `0`.

## Examples

The following example rerieves devices with {{domxref("HID.getDevices()")}} and logs the value of `productId` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach(device => {
    console.log(`HID: ${device.productId}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
