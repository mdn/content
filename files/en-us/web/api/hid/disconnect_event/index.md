---
title: "HID: disconnect event"
short-title: disconnect
slug: Web/API/HID/disconnect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HID.disconnect_event
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

The **`disconnect`** event of the {{domxref("HID")}} interface fires when the user agent disconnects a HID device.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Event type

A {{domxref("HIDConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("HIDConnectionEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("HIDConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : The {{domxref("HIDDevice")}} the event is fired for.

## Examples

In the following example an event listener is registered to listen for the disconnection of a device. The name of the device is then printed to the console using {{domxref("HIDDevice.productName")}}.

```js
navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
