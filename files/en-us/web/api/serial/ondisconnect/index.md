---
title: Serial.ondisconnect
slug: Web/API/Serial/ondisconnect
tags:
  - API
  - Property
  - Reference
  - Serial.ondisconnect
  - Serial
browser-compat: api.Serial.ondisconnect
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`ondisconnect`** EventHandler of the {{domxref("Serial")}} interface is called when the port has been disconnected from the device. This method receives an {{domxref("Event")}} object. The target of this event is the {{domxref("SerialPort")}} interface that has been disconnected.

This event is only fired for ports associated with removable devices such as those connected via USB. The user must grant the origin permission to access this device during a call to {{domxref("Serial.requestPort()", "requestPort()")}} before this event will be fired.

## Syntax

```js
Serial.ondisconnect = function(event);
Serial.addEventListener('disconnect', function(event));
```

## Example

The following example shows an event listener for the `disconnect` event,. This allows the site to react when a port is disconnected.

```js
navigator.serial.addEventListener('disconnect', (e) => {
  // Remove `e.target` from the list of available ports.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
