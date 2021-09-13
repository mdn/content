---
title: SerialPort
slug: Web/API/SerialPort
tags:
  - API
  - Interface
  - Reference
  - SerialPort
browser-compat: api.SerialPort
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

## Description

The `SerialPort` interface of the {{domxref("Web_Serial_API", "Web Serial API")}} provides access to a serial port on the host device.

## Constructor

Instances of this interface may be obtained by calling methods of the {{domxref("Serial")}} interface, therefore it has no constructor of its own.

## Properties

- {{domxref("SerialPort.readable")}}{{readonlyInline}}
  - : Returns a {{domxref("ReadableStream")}} for receiving data from the device connected to the port.
- {{domxref("SerialPort.writable")}}{{readonlyInline}}
  - : Returns a {{domxref("WritableStream")}} for sending data to the device connected to the port.

### Event handlers

- {{domxref("SerialPort.onconnect")}}
  - : An event handler called when the port has connected to the device.
- {{domxref("SerialPort.ondisconnect")}}
  - : An event handler called when the port has disconnected from the device.

## Methods

- {{domxref("SerialPort.getInfo()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an object containing properties of the port.
- {{domxref("SerialPort.open()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the port is opened. By default the port is opened with 8 data bits, 1 stop bit and no parity checking.
- {{domxref("SerialPort.setSignals()")}}
  - : Sets control signals on the port and returns a {{jsxref("Promise")}} that resolves when they are set.
- {{domxref("SerialPort.getSignals()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an object containing the current state of the port's control signals.
- {{domxref("SerialPort.close()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the port closes.

## Examples

### Opening a port

Before communicating on a serial port it must be opened. Opening the port allows the site to specify the necessary parameters that control how data is transmitted and received. Developers should check the documentation for the device they are connecting to for the appropriate parameters.

```js
await port.open({ baudRate: /* pick your baud rate */ });
```

Once the `Promise` returned by `open()` resolves the `readable` and `writable` attributes can be accessed to get the {{domxref("ReadableStream")}} and {{domxref("WritableStream")}} instances for receiving data from and sending data to the connected device.

### Reading data from a port

The following example shows how to read data from a port. The outer loop handles non-fatal errors, creating a new reader until a fatal error is encountered and `readable` becomes `null`.

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

### Writing data to a port

The following example shows how to write a string to a port. A {{domxref("TextEncoder")}} converts the string to a `Uint8Array` before transmission.

```js
const encoder = new TextEncoder();
const writer = port.writable.getWriter();
await writer.write(encoder.encode("PING"));
writer.releaseLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
