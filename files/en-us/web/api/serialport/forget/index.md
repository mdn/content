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

A website can clean up permissions to access a serial port it is no longer interested in retaining by calling `SerialPort.forget()`. Calling this "forgets" the device, resetting any previously-set permissions so the calling site can no longer communicate with the port.

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
