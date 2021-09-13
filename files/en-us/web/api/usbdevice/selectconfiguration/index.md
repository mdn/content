---
title: USBDevice.selectConfiguration()
slug: Web/API/USBDevice/selectConfiguration
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - selectConfiguration
browser-compat: api.USBDevice.selectConfiguration
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`selectConfiguration()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when
the specified configuration is selected.

## Syntax

```js
var promise = USBDevice.selectConfiguration(configurationValue)
```

### Parameters

- configurationValue
  - : The number of a device-specific configuration.

### Return value

A {{jsxref("promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
