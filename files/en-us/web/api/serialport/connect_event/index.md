---
title: "SerialPort: connect event"
short-title: connect
slug: Web/API/SerialPort/connect_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.SerialPort.connect_event
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`connect`** event of the {{domxref("SerialPort")}} interface is fired when the port connects to the device.

## Description

More specifically, the `connect` event fires when the port becomes **logically connected** to the device after a user grants permission for a site to access the port following a {{domxref("Serial.requestPort()")}} call:

- In the case of a wired serial port, this occurs when the port is physically connected to the device, for example via USB.
- In the case of a wireless serial port (for example, Bluetooth RFCOMM), this occurs when the port makes one or more active connections to the device (for example via Bluetooth L2CAP channels).

### Bubbling

This event bubbles to the instance of {{domxref("Serial")}} that returned this interface. The `event.target` property refers to the {{domxref('SerialPort')}} object that bubbles up.

For more information, see [Event bubbling](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Notify when a specific port connects

The {{domxref("Serial.requestPort()")}} method returns a {{jsxref("Promise")}} that resolves with a {{domxref("SerialPort")}} chosen by the user.

```js
// Prompt user to choose a serial port
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // notify that the chosen port is connected
});
```

### Listening for any newly-connected ports

The `connect` event bubbles up to the {{domxref("Serial")}} object where you can listen for any newly-connected ports.

```js
navigator.serial.addEventListener("connect", (event) => {
  // notify that a new port is available
  // use `event.target` to refer to the newly-added port
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SerialPort.disconnect_event", "disconnect")}} event
