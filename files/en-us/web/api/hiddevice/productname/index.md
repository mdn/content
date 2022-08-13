---
title: HIDDevice.productName
slug: Web/API/HIDDevice/productName
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - productName
  - HIDDevice
  - Experimental
browser-compat: api.HIDDevice.productName
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`productName`** read-only property of the {{domxref("HIDDevice")}} interface returns the product name of the connected HID device.

## Value

A string.

## Examples

The following example retrieves devices with {{domxref("HID.getDevices()")}} and logs the value of `productName` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productName}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
