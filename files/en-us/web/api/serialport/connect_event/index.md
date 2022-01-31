---
title: 'SerialPort: connect event'
slug: Web/API/SerialPort/connect_event
tags:
  - API
  - Event
  - Reference
  - SerialPort
browser-compat: api.SerialPort.connect_event
---
{{securecontext_header}}{{APIRef("Serial API")}}

The **`connect`** event of the {{domxref("SerialPort")}} interface is fired when a port has connected to the device. This event is only fired for ports associated with removable devices such as those connected via USB. 

This event bubbles to the instance of {{domxref("Serial")}} that returned this interface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('connect', event => { });

onconnect = event => { };
```

## Event type

A generic {{domxref("Event")}}. 

Bubbles to {{domxref("Serial")}} (`event.port` is available representing the {{domxref("SerialPort")}}).

## Examples

```js
navigator.serial.addEventListener('connect', event => {
  // add `event.port` to the UI
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also 

- {{domxref("SerialPort.disconnect_event", "disconnect")}} event
