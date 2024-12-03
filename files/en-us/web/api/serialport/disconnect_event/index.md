---
title: "SerialPort: disconnect event"
short-title: disconnect
slug: Web/API/SerialPort/disconnect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.SerialPort.disconnect_event
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`disconnect`** event of the {{domxref("SerialPort")}} interface is fired when the port disconnects from the device.

## Description

More specifically, the `disconnect` event fires when a port that was previously [logically connected](/en-US/docs/Web/API/SerialPort/connect_event#description) after a user granted permission for a site to access it (following a {{domxref("Serial.requestPort()")}} call) is no longer connected.

### Bubbling

This event bubbles to the instance of {{domxref("Serial")}} that returned this interface. The `event.target` property refers to the {{domxref('SerialPort')}} object that bubbles up.

For more information, see [Event bubbling](/en-US/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

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
