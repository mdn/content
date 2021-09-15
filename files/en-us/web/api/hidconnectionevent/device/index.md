---
title: HIDConnectionEvent.device
slug: Web/API/HIDConnectionEvent/device
tags:
  - API
  - Property
  - Reference
  - device
  - HIDConnectionEvent
browser-compat: api.HIDConnectionEvent.device
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`device`** read-only property of the {{domxref("HIDConnectionEvent")}} interface returns the {{domxref("HIDDevice")}} associated with this connection event.

## Syntax

```js
let device = HIDConnectionEvent.device;
```

### Value

A {{domxref("HIDDevice")}}.

## Examples

The following example registers event listeners for `connect` and `disconnect` events, then prints the {{domxref("HIDDevice.productName")}} to the console.

```js
navigator.hid.addEventListener('connect', ({device}) => {
  console.log(`HID connected: ${device.productName}`);
});

navigator.hid.addEventListener('disconnect', ({device}) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
