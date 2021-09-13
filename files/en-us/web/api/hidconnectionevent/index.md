---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
tags:
  - API
  - Interface
  - Reference
  - HIDConnectionEvent
browser-compat: api.HIDConnectionEvent
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`HIDConnectionEvent`** interface of the {{domxref('WebHID API')}} represents HID connection events, and is the event type passed to {{domxref("HID.onconnect")}} and {{domxref("HID.ondisconnect")}} when an input report is received.

## Constructor

- {{domxref("HIDConnectionEvent.HIDConnectionEvent()")}}
  - : Returns a new `HIDConnectionEvent` object. Typically this constructor is not used as events are created when an input report is received.

## Properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("HIDConnectionEvent.device")}}{{ReadOnlyInline}}
  - : Returns the {{domxref("HIDDevice")}} instance representing the device associated with the connection event.

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
