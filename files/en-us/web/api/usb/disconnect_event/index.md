---
title: "USB: disconnect event"
short-title: disconnect
slug: Web/API/USB/disconnect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.USB.disconnect_event
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`disconnect`** event of the {{DOMxRef("USB")}} interface is fired whenever a paired device is disconnected.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("disconnect", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ondisconnect = (event) => { }
```

## Event type

A {{domxref("USBConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("USBConnectionEvent")}}

## Examples

Once a USB device is disconnected, you might want to update the UI.

```js
navigator.usb.addEventListener("disconnect", (event) => {
  // Remove event.device from the UI.
});
```

Alternatively, you can use the `USB.ondisconnect` event handler property to establish a handler for the `disconnect` event (but note that this replaces other event listeners added using `ondisconnect`, if any):

```js
navigator.usb.ondisconnect = (event) => {
  // Remove event.device from the UI.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
