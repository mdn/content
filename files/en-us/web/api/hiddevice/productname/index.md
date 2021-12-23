---
title: HIDDevice.productName
slug: Web/API/HIDDevice/productName
tags:
  - API
  - Property
  - Reference
  - productName
  - HIDDevice
browser-compat: api.HIDDevice.productName
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`productName`** read-only property of the {{domxref("HIDDevice")}} interface returns the product name of the connected HID device.

## Syntax

```js
let productName = HIDDevice.productName;
```

### Value

A {{domxref("DOMString","string")}}.

## Examples

The following example rerieves devices with {{domxref("HID.getDevices()")}} and logs the value of `productName` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach(device => {
    console.log(`HID: ${device.productName}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
