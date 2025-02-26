---
title: "Serial: getPorts() method"
short-title: getPorts()
slug: Web/API/Serial/getPorts
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Serial.getPorts
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

The **`getPorts()`** method of the {{domxref("Serial")}} interface returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("SerialPort")}} objects representing serial ports connected to the host which the origin has permission to access.

## Syntax

```js-nolint
getPorts()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an array of {{domxref("SerialPort")}} objects.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The returned `Promise` rejects with this error in either of the following situations:
    - A {{httpheader('Permissions-Policy/serial','serial')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) blocks the use of this feature.
    - A user permission prompt was denied.

## Examples

The following example uses `getPorts()` to initialize a list of available ports.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
