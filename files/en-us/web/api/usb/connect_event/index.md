---
title: "USB: connect event"
short-title: connect
slug: Web/API/USB/connect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.USB.connect_event
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`connect`** event of the {{DOMxRef("USB")}} interface is fired whenever a paired device is connected.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("connect", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onconnect = (event) => { }
```

## Event type

A {{domxref("USBConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("USBConnectionEvent")}}

## Examples

Once a USB device is connected, you might want to update the UI.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});
```

Alternatively, you can use the `USB.onconnect` event handler property to establish a handler for the `connect` event (but note that this replaces other event listeners added using `onconnect`, if any):

```js
navigator.usb.onconnect = (event) => {
  // Add event.device to the UI.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
