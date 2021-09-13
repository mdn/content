---
title: USBDevice.selectAlternateInterface()
slug: Web/API/USBDevice/selectAlternateInterface
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - selectAlternateInterface
browser-compat: api.USBDevice.selectAlternateInterface
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`selectAlternateInterface()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when
the specified alternative endpoint is selected.

## Syntax

```js
var promise = USBDevice.selectAlternateInterface(interfaceNumber, alternateSetting)
```

### Parameters

- interfaceNumber
  - : The index of one of the interfaces supported by the device. Interfaces are
    device-specific.
- alternateSetting
  - : The configuration of the selected interface.

### Return value

A {{jsxref("promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
