---
title: HIDDevice.close()
slug: Web/API/HIDDevice/close
tags:
  - API
  - Method
  - Reference
  - close
  - HIDDevice
browser-compat: api.HIDDevice.close
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`close()`** method of the {{domxref("HIDDevice")}} interface closes the connection to the HID device.

## Syntax

```js
HIDDevice.close();
```

### Parameters

None

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is closed.

## Examples

In the following example we close the HID device, once all data has been sent and received.

```js
await device.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
