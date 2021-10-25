---
title: HIDDevice.open()
slug: Web/API/HIDDevice/open
tags:
  - API
  - Method
  - Reference
  - open
  - HIDDevice
browser-compat: api.HIDDevice.open
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`open()`** method of the {{domxref("HIDDevice")}} interface requests that the operating sytem opens the HID device.

> **Note:** HID devices are not opened automatically. Therefore, a {{domxref("HIDDevice")}} returned by {{domxref("HID.getRequestDevice()")}} must be opened with this method before it is available to transfer data.

## Syntax

```js
HIDDevice.open();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is opened.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the connection is already open.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the attempt to open the connection fails for any reason.

## Examples

In the following example, we wait for the HID connection to open before attempting to send or receive data.

```css
await device.open();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
