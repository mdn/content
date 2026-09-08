---
title: "SerialPort: getSignals() method"
short-title: getSignals()
slug: Web/API/SerialPort/getSignals
page-type: web-api-instance-method
browser-compat: api.SerialPort.getSignals
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`getSignals()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves with an object containing the current state of the port's control signals.

## Syntax

```js-nolint
getSignals()
```

### Parameters

None.

### Return value

Returns a {{jsxref("Promise")}} that resolves with an object containing the following members:

- `clearToSend`
  - : A boolean indicating to the other end of a serial connection that is clear to send data.
- `dataCarrierDetect`
  - : A boolean that toggles the control signal needed to communicate over a serial connection.
- `dataSetReady`
  - : A boolean indicating whether the device is ready to send and receive data.
- `ringIndicator`
  - : A boolean indicating whether a ring signal should be sent down the serial connection.

### Exceptions

The returned `Promise` rejects with one of the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}
  - : If `getSignals()` is called when the port is not open. Call {{domxref("SerialPort.open()")}} to open the port first.
- `NetworkError` {{domxref("DOMException")}}
  - : If the signals on the device could not be read.

## Examples

### Check whether the device is ready to send and receive data

The following example reads the control signals from an open port and checks the `dataSetReady` property to determine whether the connected device is ready to communicate.

```js
const signals = await port.getSignals();
console.log(`Device ready: ${signals.dataSetReady}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
