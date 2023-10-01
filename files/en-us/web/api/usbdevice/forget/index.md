---
title: "USBDevice: forget() method"
short-title: forget()
slug: Web/API/USBDevice/forget
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.forget
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`forget()`** method of the {{domxref("USBDevice")}} interface returns a {{jsxref("Promise")}} that resolves when all pending operations are aborted, all open interfaces are released, the device session has ended, and the permission is reset.

## Syntax

```js-nolint
forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves with `undefined` once the device access permission is revoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
