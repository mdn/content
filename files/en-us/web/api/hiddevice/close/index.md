---
title: HIDDevice.close()
slug: Web/API/HIDDevice/close
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - close
  - HIDDevice
  - Experimental
browser-compat: api.HIDDevice.close
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`close()`** method of the {{domxref("HIDDevice")}} interface closes the connection to the HID device.

## Syntax

```js
close()
```

### Parameters

None.

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
