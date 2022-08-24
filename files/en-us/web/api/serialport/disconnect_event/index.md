---
title: 'SerialPort: disconnect'
slug: Web/API/SerialPort/disconnect_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - SerialPort
  - Experimental
browser-compat: api.SerialPort.disconnect_event
---
{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

The **`disconnect`** event of the {{domxref("SerialPort")}} interface is fired when the port has disconnected from the device. This event is only fired for ports associated with removable devices such as those connected via USB.

This event bubbles to the instance of {{domxref("Serial")}} that returned this interface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('disconnect', (event) => { });

ondisconnect = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Bubbling

This event bubbles to {{domxref("Serial")}}. The `event.target` property refers to the {{domxref('SerialPort')}} object that bubbles up.

For more information, see [Event bubbling and capture](/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture).

## Examples

### Notify when a specific port disconnects

Here the event listener is installed on a specific {{domxref("SerialPort")}} object.

```js
port.addEventListener('disconnect', (event) => {
  // notify that the port has become unavailable
});
```

### Listening for any ports that become unavailable

The `disconnect` event bubbles up to the {{domxref("Serial")}} object where you can listen for any ports that become unavailable.

```js
navigator.serial.addEventListener('disconnect', (event) => {
  // notify that a port has become unavailable
  // use `event.target` to refer to the unavailable port
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SerialPort.connect_event", "connect")}} event
