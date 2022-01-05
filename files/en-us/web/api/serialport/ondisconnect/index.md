---
title: SerialPort.ondisconnect
slug: Web/API/SerialPort/ondisconnect
tags:
  - API
  - Property
  - Reference
  - ondisconnect
  - SerialPort
browser-compat: api.SerialPort.ondisconnect
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`ondisconnect`** event handler of the {{domxref("SerialPort")}} interface is called when the port has disconnected from the device. This method receives an {{domxref("Event")}} object. This event is only fired for ports associated with removable devices such as those connected via USB. This event bubbles to the instance of {{domxref("Serial")}} that returned this interface.

## Syntax

```js
SerialPort.ondisconnect = function(event);
SerialPort.addEventListener('disconnect', function(event));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
