---
title: "HIDConnectionEvent: device property"
short-title: device
slug: Web/API/HIDConnectionEvent/device
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HIDConnectionEvent.device
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`device`** read-only property of the {{domxref("HIDConnectionEvent")}} interface returns the {{domxref("HIDDevice")}} associated with this connection event.

## Value

A {{domxref("HIDDevice")}}.

## Examples

The following example registers event listeners for `connect` and `disconnect` events, then prints the {{domxref("HIDDevice.productName")}} to the console.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});

navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
