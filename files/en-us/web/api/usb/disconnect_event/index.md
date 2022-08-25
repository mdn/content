---
title: 'USB: disconnect event'
slug: Web/API/USB/disconnect_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - USB
  - WebUSB
  - Experimental
browser-compat: api.USB.disconnect_event
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`connect`** event of the {{DOMxRef("USB")}} interface is fired whenever a paired device is disconnected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('disconnect', (event) => { })

ondisconnect = (event) => { }
```

## Event type

A {{domxref("USBConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("USBConnectionEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("USBConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : The {{domxref("USBDevice")}} the event is fired for.

## Examples

Once a USB device is disconnected, you might want to update the UI.

```js
navigator.usb.addEventListener('disconnect', (event) => {
  // Remove event.device from the UI.
});
```

Alternatively, you can use the `USB.ondiscconnect` event handler property to establish a handler for the `disconnect` event:

```js
navigator.usb.ondisconnect = (event) => {
  // Remove event.device from the UI.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
