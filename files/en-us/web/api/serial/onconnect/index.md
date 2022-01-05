---
title: Serial.onconnect
slug: Web/API/Serial/onconnect
tags:
  - API
  - Property
  - Reference
  - Serial.onconnect
  - Serial
browser-compat: api.Serial.onconnect
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`onconnect`** [event handler](/en-US/docs/Web/Events/Event_handlers) of the {{domxref("Serial")}} interface is called when a port has been connected from a device. This method receives an {{domxref("Event")}} object. The target of this event is the {{domxref("SerialPort")}} interface that has been disconnected.

This event is only fired for ports associated with removable devices such as those connected via USB. The user must grant the origin permission to access this device during a call to {{domxref("Serial.requestPort()","requestPort()")}} before this event will be fired.

## Syntax

```js
Serial.onconnect = function(event);
Serial.addEventListener('connect', function(event));
```

## Example

The following example shows an event listener for the `connect` event,. This allows the site to react when a port is connected.

```js
navigator.serial.addEventListener('connect', (e) => {
  // Connect to `e.target` or add it to a list of available ports.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
