---
title: Web Serial API
slug: Web/API/Web_Serial_API
page-type: web-api-overview
tags:
  - API
  - Web Serial
  - Overview
  - Reference
  - Experimental
browser-compat: api.Serial
---
{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **Web Serial API** provides a way for websites to read from and write to serial devices. These devices may be connected via a serial port, or be USB or Bluetooth devices that emulate a serial port.

## Concepts and Usage

The Web Serial API is one of a set of APIs that allow websites to communicate with peripherals connected to a user's computer. It provides the ability to connect to devices that are required by the operating system to communicate via the serial API, rather than USB which can be accessed via the {{domxref("WebUSB API")}}, or input devices that can be accessed via {{domxref("WebHID API")}}.

Examples of serial devices include 3D printers, and microcontrollers such as the [BBC micro:bit board](https://microbit.org/).

## Interfaces

- {{domxref("Serial")}}
  - : Provides attributes and methods for finding and connecting to serial ports from a web page.
- {{domxref("SerialPort")}}
  - : Provides access to a serial port on the host device.

## Examples

The following examples demonstrate some of the functionality provided by the Web Serial API.

### Checking for available ports

The following example shows how to check for available ports and allows the user to grant it permission to access additional ports.

The `connect` and `disconnect` events let sites react when a device is connected or disconnected from the system. The {{domxref("Serial.getPorts()","getPorts()")}} method is then called to see connected ports that the site already has access to.

If the site doesn't have access to any connected ports it has to wait until it has user activation to proceed. In this example we use a {{domxref("Element.click_event", "click")}} event handler on a button for this task. A filter is passed to {{domxref("Serial.requestPort()","requestPort()")}} with a USB vendor ID in order to limit the set of devices shown to the user to only USB devices built by a particular manufacturer.

```js
navigator.serial.addEventListener('connect', (e) => {
  // Connect to `e.target` or add it to a list of available ports.
});

navigator.serial.addEventListener('disconnect', (e) => {
  // Remove `e.target` from the list of available ports.
});

navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});

button.addEventListener('click', () => {
  const usbVendorId = 0xABCD;
  navigator.serial.requestPort({ filters: [{ usbVendorId }]}).then((port) => {
    // Connect to `port` or add it to the list of available ports.
  }).catch((e) => {
    // The user didn't select a port.
  });
});
```

### Reading data from a port

The following example shows how to read data from a port. The outer loop handles non-fatal errors,
creating a new reader until a fatal error is encountered and {{domxref("SerialPort.readable")}} becomes `null`.

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| has been canceled.
        break;
      }
      // Do something with |value|...
    }
  } catch (error) {
    // Handle |error|...
  } finally {
    reader.releaseLock();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Read from and write to a serial port](https://web.dev/serial/)
- [Getting started with the Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
