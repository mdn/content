---
title: "HIDDevice: open() method"
short-title: open()
slug: Web/API/HIDDevice/open
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HIDDevice.open
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`open()`** method of the {{domxref("HIDDevice")}} interface requests that the operating system opens the HID device.

> **Note:** HID devices are not opened automatically. Therefore, a {{domxref("HIDDevice")}} returned by {{domxref("HID.requestDevice()")}} must be opened with this method before it is available to transfer data.

## Syntax

```js-nolint
open()
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

```js
await device.open();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
