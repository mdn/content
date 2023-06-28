---
title: "HID: getDevices() method"
short-title: getDevices()
slug: Web/API/HID/getDevices
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HID.getDevices
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`getDevices()`** method of the {{domxref("HID")}} interface gets a list of the connected HID devices that the user has previously been granted access to in response to a {{domxref("HID.requestDevice","requestDevice()")}} call.

## Syntax

```js-nolint
getDevices()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a list of {{domxref("HIDDevice")}} objects.

## Examples

The following example gets a list of devices and logs the device names to the console.

```js
document.addEventListener("DOMContentLoaded", async () => {
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
