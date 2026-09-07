---
title: "SerialPort: setSignals() method"
short-title: setSignals()
slug: Web/API/SerialPort/setSignals
page-type: web-api-instance-method
browser-compat: api.SerialPort.setSignals
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`setSignals()`** method of the {{domxref("SerialPort")}} interface sets control signals on the port and returns a {{jsxref("Promise")}} that resolves when they are set.

## Syntax

```js-nolint
setSignals()
setSignals(options)
```

### Parameters

- `options` {{Optional_Inline}}
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

The returned `Promise` rejects with one of the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}
  - : If `setSignals()` is called when the port is not open. Call {{domxref("SerialPort.open()")}} to open the port first.
- `NetworkError` {{domxref("DOMException")}}
  - : If the signals on the device could not be set.

## Examples

### Assert the data terminal ready signal

The following example asserts the DTR signal when a connection is established.

```js
await port.open({ baudRate: 9600 });
await port.setSignals({ dataTerminalReady: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
