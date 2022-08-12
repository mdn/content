---
title: HIDDevice.opened
slug: Web/API/HIDDevice/opened
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - opened
  - HIDDevice
  - Experimental
browser-compat: api.HIDDevice.opened
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`opened`** read-only property of the {{domxref("HIDDevice")}} interface returns true if the connection to the {{domxref("HIDDevice")}} is open and ready to transfer data.

## Value

A boolean value, true if the connection is open.

## Examples

The following example retrieves devices with {{domxref("HID.getDevices()")}} and logs the value of `opened` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.opened}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
