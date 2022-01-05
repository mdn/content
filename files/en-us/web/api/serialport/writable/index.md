---
title: SerialPort.writable
slug: Web/API/SerialPort/writable
tags:
  - API
  - Property
  - Reference
  - writable
  - SerialPort
browser-compat: api.SerialPort.writable
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`writable`** read-only property of the {{domxref("SerialPort")}} interface returns a {{domxref("WritableStream")}} for sending data to the device connected to the port. Chunks written to this stream must be instances of {{domxref("BufferSource")}} (for example, an {{jsxref("ArrayBuffer")}} or {{domxref("ArrayBufferView")}} such as {{jsxref("Uint8Array")}}). This property is non-null as long as the port is open and has not encountered a fatal error.

## Syntax

```js
var writableStream = SerialPort.writable;
```

### Value

A {{domxref("WritableStream")}}

## Examples

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
