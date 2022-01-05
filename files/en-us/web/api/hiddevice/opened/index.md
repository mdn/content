---
title: HIDDevice.opened
slug: Web/API/HIDDevice/opened
tags:
  - API
  - Property
  - Reference
  - opened
  - HIDDevice
browser-compat: api.HIDDevice.opened
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`opened`** read-only property of the {{domxref("HIDDevice")}} interface returns true if the connection to the {{domxref("HIDDevice")}} is open and ready to transfer data.

## Syntax

```js
let opened = HIDDevice.opened;
```

### Value

A boolean value, true if the connection is open.

## Examples

The following example rerieves devices with {{domxref("HID.getDevices()")}} and logs the value of `opened` to the console.

```js
document.addEventListener('DOMContentLoaded', async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach(device => {
    console.log(`HID: ${device.opened}`);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
