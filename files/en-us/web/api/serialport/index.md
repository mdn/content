---
title: SerialPort
slug: Web/API/SerialPort
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SerialPort
---

{{securecontext_header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

The `SerialPort` interface of the {{domxref("Web_Serial_API", "Web Serial API")}} provides access to a serial port on the host device.

{{InheritanceDiagram}}

## Constructor

Instances of this interface may be obtained by calling methods of the {{domxref("Serial")}} interface, therefore it has no constructor of its own.

## Instance properties

- {{domxref("SerialPort.readable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("ReadableStream")}} for receiving data from the device connected to the port.
- {{domxref("SerialPort.writable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("WritableStream")}} for sending data to the device connected to the port.

## Instance methods

- {{domxref("SerialPort.forget()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the port closes and is forgotten.
- {{domxref("SerialPort.getInfo()")}} {{Experimental_Inline}}
  - : Returns an object containing properties of the port.
- {{domxref("SerialPort.open()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the port is opened. By default the port is opened with 8 data bits, 1 stop bit and no parity checking.
- {{domxref("SerialPort.setSignals()")}} {{Experimental_Inline}}
  - : Sets control signals on the port and returns a {{jsxref("Promise")}} that resolves when they are set.
- {{domxref("SerialPort.getSignals()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with an object containing the current state of the port's control signals.
- {{domxref("SerialPort.close()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves when the port closes.

## Events

- {{domxref("SerialPort.connect_event", "connect")}} {{Experimental_Inline}}
  - : An event fired when the port has connected to the device.
- {{domxref("SerialPort.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : An event fired when the port has disconnected from the device.

## Examples

### Opening a port

Before communicating on a serial port it must be opened. Opening the port allows the site to specify the necessary parameters that control how data is transmitted and received. Developers should check the documentation for the device they are connecting to for the appropriate parameters.

```js
await port.open({ baudRate: 9600 /* pick your baud rate */ });
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
      // Do something with |value|…
    }
  } catch (error) {
    // Handle |error|…
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
