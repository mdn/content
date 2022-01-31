---
title: 'SerialPort: disconnect'
slug: Web/API/SerialPort/disconnect_event
tags:
  - API
  - Event
  - Reference
  - SerialPort
browser-compat: api.SerialPort.disconnect_event
---
{{securecontext_header}}{{APIRef("Serial API")}}

The **`disconnect`** event of the {{domxref("SerialPort")}} interface is fired when the port has disconnected from the device. This event is only fired for ports associated with removable devices such as those connected via USB. 

This event bubbles to the instance of {{domxref("Serial")}} that returned this interface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('disconnect', event => { });

ondisconnect = event => { };
```

## Event type

A generic {{domxref("Event")}}. 

Bubbles to {{domxref("Serial")}} (`event.port` is available representing the {{domxref("SerialPort")}}).

## Examples

```js
navigator.serial.addEventListener('disconnect', event => {
  // remove `event.port` from the UI
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also 

- {{domxref("SerialPort.connect_event", "connect")}} event
