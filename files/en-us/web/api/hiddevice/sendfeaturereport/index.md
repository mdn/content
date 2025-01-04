---
title: "HIDDevice: sendFeatureReport() method"
short-title: sendFeatureReport()
slug: Web/API/HIDDevice/sendFeatureReport
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HIDDevice.sendFeatureReport
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

The **`sendFeatureReport()`** method of the {{domxref("HIDDevice")}} interface sends a feature report to the HID device. Feature reports are a way for HID devices and applications to exchange non-standardized HID data.

The `reportId` for each of the report formats that this device supports can be retrieved from {{domxref("HIDDevice.collections")}}.

## Syntax

```js-nolint
sendFeatureReport(reportId, data)
```

### Parameters

- `reportId`
  - : An 8-bit report ID. If the HID device does not use report IDs, send `0`.
- `data`
  - : Bytes as an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}}.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the report has been sent.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if sending the report fails for any reason.

## Examples

In the following example `sendFeatureReport()` makes a device blink. You can see more examples and live demos in the article [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
