---
title: "SerialPort: forget() method"
short-title: forget()
slug: Web/API/SerialPort/forget
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SerialPort.forget
---

{{securecontext_header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

The **`SerialPort.forget()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when the serial port is closed and is forgotten.

## Syntax

```js-nolint
forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is closed, the device is forgotten, and the permission is reset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
