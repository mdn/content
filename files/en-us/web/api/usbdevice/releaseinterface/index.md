---
title: USBDevice.releaseInterface()
slug: Web/API/USBDevice/releaseInterface
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - releaseInterface
browser-compat: api.USBDevice.releaseInterface
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`releaseInterface()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when a
claimed interface is released from exclusive access.

## Syntax

```js
var promise = USBDevice.releaseInterface(interfaceNumber)
```

### Parameters

- interfaceNumber
  - : The device-specific index of the currently-claimed interface.

### Return value

A {{jsxref("promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
