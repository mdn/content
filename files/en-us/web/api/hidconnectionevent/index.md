---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.HIDConnectionEvent
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

The **`HIDConnectionEvent`** interface of the [WebHID API](/en-US/docs/Web/API/WebHID_API) represents HID connection events, and is the event type passed to {{domxref("HID/connect_event", "connect")}} and {{domxref("HID/disconnect_event", "disconnect")}} event handlers when a device's connection state changes.

{{InheritanceDiagram}}

## Constructor

- {{domxref("HIDConnectionEvent.HIDConnectionEvent", "HIDConnectionEvent()")}} {{Experimental_Inline}}
  - : Returns a new `HIDConnectionEvent` object. Typically this constructor is not used as events are created when a device's connection state changes.

## Instance properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("HIDConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("HIDDevice")}} instance representing the device associated with the connection event.

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
