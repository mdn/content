---
title: SerialPort.forget()
slug: Web/API/SerialPort/forget
tags:
  - API
  - Method
  - Reference
  - forget
  - SerialPort
browser-compat: api.SerialPort.forget
---
{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}

The **`SerialPort.forget()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when the serial port is closed and is forgotten.

## Syntax

```js
forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is closed and device is forgeotten (permission is reset).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
