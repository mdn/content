---
title: Serial.getPorts()
slug: Web/API/Serial/getPorts
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Serial.getPorts
  - Serial
  - Experimental
browser-compat: api.Serial.getPorts
---
{{APIRef("Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`getPorts()`** method of the {{domxref("Serial")}} interface returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("SerialPort")}} objects representing serial ports connected to the host which the origin has permission to access.

## Syntax

```js
getPorts()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with an array of {{domxref("SerialPort")}} objects.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The returned `Promise` rejects with this error if a [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy) restricts use of this API or a permission to use it has not granted via a user gesture.

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
