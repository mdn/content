---
title: HIDDevice.productId
slug: Web/API/HIDDevice/productId
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - productId
  - HIDDevice
  - Experimental
browser-compat: api.HIDDevice.productId
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`productId`** read-only property of the {{domxref("HIDDevice")}} interface returns the product ID of the connected HID device.

## Value

An integer. If the device has no product ID, or the product ID cannot be accessed this will return `0`.

## Examples

The following example retrieves devices with {{domxref("HID.getDevices()")}} and logs the value of `productId` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productId}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
