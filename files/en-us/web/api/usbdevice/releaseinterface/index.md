---
title: "USBDevice: releaseInterface() method"
short-title: releaseInterface()
slug: Web/API/USBDevice/releaseInterface
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.releaseInterface
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`releaseInterface()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when a
claimed interface is released from exclusive access.

## Syntax

```js-nolint
releaseInterface(interfaceNumber)
```

### Parameters

- `interfaceNumber`
  - : The device-specific index of the currently-claimed interface.

### Return value

A {{jsxref("promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
