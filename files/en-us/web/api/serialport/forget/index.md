---
title: "SerialPort: forget() method"
short-title: forget()
slug: Web/API/SerialPort/forget
page-type: web-api-instance-method
browser-compat: api.SerialPort.forget
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`forget()`** method of the {{domxref("SerialPort")}} interface returns a {{jsxref("Promise")}} that resolves when access to the serial port is revoked.

## Syntax

```js-nolint
forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is revoked.

## Description

A website can clean up permissions to access a serial port it is no longer interested in retaining by calling `forget()`.
Calling this "forgets" the device, resetting any previously-set permissions so the calling site can no longer communicate with the port.

For example, for an educational web application used on a shared computer with many devices, a large number of accumulated user-generated permissions creates a poor user experience.
The application should call `forget()` after each user device is disconnected, to clean up after each session.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
