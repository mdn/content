---
title: HIDDevice.forget()
slug: Web/API/HIDDevice/forget
tags:
  - API
  - Method
  - Reference
  - forget
  - HIDDevice
browser-compat: api.HIDDevice.forget
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`forget()`** method of the {{domxref("HIDDevice")}} interface closes the connection to the HID device and forgets the device.

## Syntax

```js
HIDDevice.forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is closed and device is forgeotten (permission is reset).

## Examples

In the following example we forget the HID device, once all data has been sent and received.

```js
await device.forget();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
