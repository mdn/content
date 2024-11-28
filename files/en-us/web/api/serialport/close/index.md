---
title: "SerialPort: close() method"
short-title: close()
slug: Web/API/SerialPort/close
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SerialPort.close
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`SerialPort.close()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when the port closes.

## Description

`close()` closes the serial port if previously-locked {{domxref("SerialPort.readable")}} and {{domxref("SerialPort.writable")}} members are unlocked, meaning the `releaseLock()` methods have been called for their respective reader and writer. However, in some cases it is not that simple, for example when continuously reading data from a serial device using a loop. See [Close a serial port](https://developer.chrome.com/docs/capabilities/serial#close-port) for more guidance.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
