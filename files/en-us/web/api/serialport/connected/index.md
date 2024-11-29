---
title: "SerialPort: connected property"
short-title: connected
slug: Web/API/SerialPort/connected
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SerialPort.connected
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`connected`** read-only property of the {{domxref("SerialPort")}} interface returns a boolean value that indicates whether the port is [logically connected](/en-US/docs/Web/API/SerialPort/connect_event#description) to the device.

## Description

When a wireless device goes out of range of the host, any wireless serial port opened by a web app automatically closes, even though it stays logically connected. In such cases, the web app could attempt to reopen the port using {{domxref("SerialPort.open()")}}.

However, if the wireless device was intentionally disconnected (for example, if the user chose to disconnect it using the operating system control panel), the web app should refrain from reopening the port to prevent reconnecting to the wireless device.

The following snippet shows how the `connected` property can be used to distinguish between these two cases:

```js
const ports = await navigator.serial.getPorts();
for (const port of ports) {
  if (port.connected) {
    // The port is logically connected
    // automatically try to reopen the port
    await port.open({ baudRate: 9600 });
  } else {
    // The port is not logically connected; at this point you could
    // prompt the user to make sure the Bluetooth device is available, and
    // Show a "connect" button to allow them to try opening the port if desired
  }
}
```

## Value

A boolean — `true` if the port is logically connected, and `false` if not.

## Examples

### Logging when a port is connected

The following snippet invokes {{domxref("Serial.requestPort()")}} when the user presses a {{htmlelement("button")}}, prompting them to choose a serial port to connect to, then logs a message to the console reporting the connection status:

```js
requestPortButton.addEventListener("click", async () => {
  const port = await navigator.serial.requestPort();
  console.log(`Requested serial port. Connected: ${port.connected}`);
});
```

### Logging connection status on connect and disconnect

You can use the following snippet to log the connection status when the {{domxref("SerialPort.connect_event", "connect")}} and {{domxref("SerialPort.disconnect_event", "disconnect")}} events fire:

```js
navigator.serial.addEventListener("connect", ({ target: port }) => {
  console.log(`Connect event fired. Connected: ${port.connected}`);
});

navigator.serial.addEventListener("disconnect", ({ target: port }) => {
  console.log(`Disconnect event fired. Connected: ${port.connected}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
