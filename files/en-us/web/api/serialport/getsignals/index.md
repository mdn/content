---
title: SerialPort.getSignals()
slug: Web/API/SerialPort/getSignals
tags:
  - API
  - Method
  - Reference
  - getSignals()
  - SerialPort
browser-compat: api.SerialPort.getSignals
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`SerialPort.getSignals()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves with an object containing the current state of the port's control signals.

## Syntax

```js
var promise = SerialPort.getSignals();
```

### Parameters

None.

### Return value

Returns a {{jsxref("Promise")}} that resolves with an object containing the following members:

- `clearToSend`
  - : A boolean indicating to the other end of a serial connection that is is clear to send data.
- `dataCarrierDetect`
  - : A boolean that toggles the control signal needed to communicate over a serial connection.
- `dataSetReady`
  - : A boolean indicating whether the device is ready to send and receive data.
- `ringIndicator`
  - : A boolean indicating whether a ring signal should be sent down the serial connection.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the port is not open. Call {{domxref("SerialPort.open()")}} to avoid this error.
- `NetworkError` {{domxref("DOMException")}}
  - : Returned if the signals on the device could not be set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
