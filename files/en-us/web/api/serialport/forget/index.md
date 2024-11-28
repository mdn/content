---
title: "SerialPort: forget() method"
short-title: forget()
slug: Web/API/SerialPort/forget
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SerialPort.forget
---

{{securecontext_header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`SerialPort.forget()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when access to the serial port is revoked.

## Description

A website can clean up permissions to access a serial port it is no longer interested in retaining by calling `SerialPort.forget()`. In real terms, calling this closes the connection, forgets the device, and resets the permission.

```js
// Voluntarily revoke access to this serial port
await port.forget();
```

For example, for an educational web application used on a shared computer with many devices, a large number of accumulated user-generated permissions creates a poor user experience.

## Syntax

```js-nolint
forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is revoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
