---
title: USBConnectionEvent
slug: Web/API/USBConnectionEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.USBConnectionEvent
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`USBConnectionEvent`** interface of the {{domxref('WebUSB API','','',' ')}} is the event type passed to `USB` {{domxref("USB.connect_event", "connect")}} and {{domxref("USB.disconnect_event", "disconnect")}} events when the user agent detects that a new USB device has been connected or disconnected.

{{InheritanceDiagram}}

## Constructor

- {{domxref("USBConnectionEvent.USBConnectionEvent", "USBConnectionEvent()")}} {{Experimental_Inline}}
  - : Returns a `USBConnectionEvent` object.

## Instance properties

- {{domxref("USBConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("USBDevice")}} object representing the current device.

## Examples

In the following example listening for connect and disconnect events is used to add and remove the devices from the user interface of an application.

```js
navigator.usb.addEventListener("connect", (event) => {
  // Add event.device to the UI.
});

navigator.usb.addEventListener("disconnect", (event) => {
  // Remove event.device from the UI.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
