---
title: "USB: connect event"
short-title: connect
slug: Web/API/USB/connect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.USB.connect_event
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`connect`** event of the {{DOMxRef("USB")}} interface is fired whenever a paired device is connected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Event type

A {{domxref("USBConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("USBConnectionEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("USBConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : The {{domxref("USBDevice")}} the event is fired for.

## Examples

Once a USB device is connected, you might want to update the UI.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});
```

Alternatively, you can use the `USB.onconnect` event handler property to establish a handler for the `connect` event:

```js
navigator.usb.onconnect = (event) => {
  // Add event.device to the UI.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
