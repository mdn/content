---
title: SerialPort.open()
slug: Web/API/SerialPort/open
tags:
  - API
  - Method
  - Reference
  - open
  - SerialPort
browser-compat: api.SerialPort.open
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`open()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when the port is opened. By default the port is opened with 8 data bits, 1 stop bit and no parity checking. The `baudRate` parameter is required.

## Syntax

    var promise = SerialPort.open(options);

### Parameters

- _`options`_

  - : An object with any of the following values:

    - `baudRate`
      - : A positive, non-zero value indicating the baud rate at which serial communication should be established.
    - `bufferSize`{{optional_inline}}
      - : An unsigned long integer indicating the size of the read and write buffers that are to be established. If not passed, defaults to 255.
    - `dataBits`{{optional_inline}}
      - : An integer value of 7 or 8 indicating the number of data bits per frame. If not passed, defaults to 8.
    - `flowControl`{{optional_inline}}
      - : The flow control type, either `"none"` or `"hardware"`. The default value is `"none:`.
    - `parity`{{optional_inline}}
      - : The parity mode, either `"none"`, `"even"`, or `"odd"`. The default value is `"none"`.
    - `stopBits`{{optional_inline}}
      - : An integer value of 1 or 2 indicating the number of stop bits at the end of the frame. If not passed, defaults to 1.

### Return value

A {{jsxref("Promise")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the port is already open.
- `NetworkError` {{domxref("DOMException")}}
  - : Returned if the attempt to open the port failed.

## Examples

Before communicating on a serial port it must be opened. Opening the port allows the site to specify the necessary parameters that control how data is transmitted and received. Developers should check the documentation for the device they are connecting to for the appropriate parameters.

```js
await port.open({ baudRate: /* pick your baud rate */ });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
