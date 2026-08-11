---
title: "SerialPort: disconnect event"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
page-type: web-api-event
browser-compat: api.SerialPort.disconnect_event
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`disconnect`** event of the {{domxref("SerialPort")}} interface is fired when the port disconnects from the device.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Description

The `disconnect` event fires when a port that was previously [logically connected](/en-US/docs/Web/API/SerialPort/connect_event#description) to the device is no longer connected.

### Bubbling

This event bubbles up to the {{domxref("Serial")}} instance that returned this interface.
The `event.target` property refers to the {{domxref("SerialPort")}} object that bubbles up.

For more information, see [Event bubbling](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Examples

### Notify when a specific port disconnects

Here the event listener is installed on a specific {{domxref("SerialPort")}} object.

```js
port.addEventListener("disconnect", (event) => {
  // notify that the port has become unavailable
});
```

### Listening for any ports that become unavailable

The `disconnect` event bubbles up to the {{domxref("Serial")}} object where you can listen for any ports that become unavailable.

```js
navigator.serial.addEventListener("disconnect", (event) => {
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
