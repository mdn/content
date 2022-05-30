---
title: USBConnectionEvent
slug: Web/API/USBConnectionEvent
tags:
  - API
  - Interface
  - Reference
  - USBConnectionEvent
browser-compat: api.USBConnectionEvent
---
{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}

The **`USBConnectionEvent`** interface of the {{domxref('WebUSB API','','',' ')}} is the event type passed to {{domxref("USB.onconnect")}} and {{domxref("USB.ondisconnect")}} when the user agent detects that a new USB device has been connected or disconnected.

{{InheritanceDiagram}}

## Constructor

- {{domxref("USBConnectionEvent.USBConnectionEvent", "USBConnectionEvent()")}}
  - : Returns a `USBConnectionEvent` object.

## Properties

- {{domxref("USBConnectionEvent.device")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("USBDevice")}} object representing the current device.

## Examples

In the following example listening for connect and disconnect events is used to add and remove the devices from the user interface of an application.

```js
navigator.usb.addEventListener('connect', event => {
  // Add event.device to the UI.
});

navigator.usb.addEventListener('disconnect', event => {
  // Remove event.device from the UI.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
