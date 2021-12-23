---
title: SerialPort.onconnect
slug: Web/API/SerialPort/onconnect
tags:
  - API
  - Property
  - Reference
  - onconnect
  - SerialPort
browser-compat: api.SerialPort.onconnect
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`onconnect`** event handler of the {{domxref("SerialPort")}} interface is called when the port has disconnected from the device. This method receives an {{domxref("Event")}} object. This event is only fired for ports associated with removable devices such as those connected via USB. This event bubbles to the instance of {{domxref("Serial")}} that returned this interface..

## Syntax

```js
SerialPort.onconnect = function(event);
SerialPort.addEventListener('connect', function(event));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
