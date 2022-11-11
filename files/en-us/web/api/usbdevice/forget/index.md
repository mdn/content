---
title: USBDevice.forget()
slug: Web/API/USBDevice/forget
tags:
  - API
  - Method
  - Reference
  - USB
  - USBDevice
  - WebUSB
  - WebUSB API
  - forget
browser-compat: api.USBDevice.forget
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`forget()`** method of the {{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when all pending operations are aborted, all open interfaces are released, the device session has ended, and permission is reset.

## Syntax

```js
forget()
```

### Parameters

None.

### Return value

A {{jsxref("promise")}} which resolves with `undefined` once the device access permission is revoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
