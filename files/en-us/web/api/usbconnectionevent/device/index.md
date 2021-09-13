---
title: USBConnectionEvent.device
slug: Web/API/USBConnectionEvent/device
tags:
  - API
  - Property
  - Reference
  - device
  - USBConnectionEvent
browser-compat: api.USBConnectionEvent.device
---
{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}

The **`device`** read-only property of the {{domxref("USBConnectionEvent")}} interface returns a {{domxref("USBDevice")}} object representing the device being connected or disconnected.

## Syntax

```js
let device = USBConnectionEvent.device;
```

### Value

A {{domxref("USBDevice")}} object.

## Examples

Connecting a USB device fires the `connect` event. The current {{domxref("USBDevice")}} is returned by calling `event.device`.

```js
navigator.usb.addEventListener('connect', event => {
  console.log(event.device);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
