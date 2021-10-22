---
title: SerialPort.setSignals()
slug: Web/API/SerialPort/setSignals
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

    var promise = SerialPort.setSignals(options);

### Parameters

- `options`{{optional_inline}}

  - : An object with any of the following values:

    - `clearToSend`
      - : A boolean indicating to the other end of a serial connection that is is clear to send data.
    - `dataCarrierDetect`
      - : A boolean that toggles the control signal needed to communicate over a serial connection.
    - `dataSetReady`
      - : A boolean indicating whether the device is ready to send and receive data.
    - `ringIndicator`
      - : A boolean indicating whether a ring signal should be sent down the serial connection.

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
