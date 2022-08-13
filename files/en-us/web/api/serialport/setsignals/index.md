---
title: SerialPort.setSignals()
slug: Web/API/SerialPort/setSignals
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - setSignals
  - SerialPort
browser-compat: api.SerialPort.setSignals
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`setSignals()`** method of the {{domxref("SerialPort")}} interface sets control signals on the port and returns a {{jsxref("Promise")}} that resolves when they are set.

## Syntax

```js
setSignals()
setSignals(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with any of the following values:

    - `dataTerminalReady`
      - : A boolean indicating whether to invoke the operating system to either assert (if true) or de-assert (if false) the "data terminal ready" or "DTR" signal on the serial port.
    - `requestToSend`
      - : A boolean indicating whether to invoke the operating system to either assert (if true) or de-assert (if false) the "request to send" or "RTS" signal on the serial port.
    - `break`
      - : A boolean indicating whether to invoke the operating system to either assert (if true) or de-assert (if false) the "break" signal on the serial port.

### Return value

A {{jsxref("Promise")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the port is not open. Call {{domxref("SerialPort.open()")}} to avoid this error.
- `NetworkError` {{domxref("DOMException")}}
  - : Returned if the signals on the device could not be set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
