---
title: SerialPort.readable
slug: Web/API/SerialPort/readable
tags:
  - API
  - Property
  - Reference
  - readable
  - SerialPort
browser-compat: api.SerialPort.readable
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`readable`** read-only property of the {{domxref("SerialPort")}} interface returns a {{domxref("ReadableStream")}} for receiving data from the device connected to the port. Chunks read from this stream are instances of {{jsxref("Uint8Array")}}. This property is non-null as long as the port is open and has not encountered a fatal error.

## Syntax

```js
var readableStream = SerialPort.readable;
```

### Value

A {{domxref("ReadableStream")}}.

## Examples

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
