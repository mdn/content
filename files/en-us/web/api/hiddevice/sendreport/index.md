---
title: HIDDevice.sendReport()
slug: Web/API/HIDDevice/sendReport
tags:
  - API
  - Method
  - Reference
  - sendReport
  - HIDDevice
browser-compat: api.HIDDevice.sendReport
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`sendReport()`** method of the {{domxref("HIDDevice")}} interface sends an output report to the HID device.

The `reportId` for each of the report formats that this device supports can be retrieved from {{domxref("HIDDevice.collections")}}.

## Syntax

```js
HIDDevice.sendReport(reportId, data);
```

### Parameters

- `reportId`
  - : An 8-bit report ID. If the HID device does not use report IDs, send `0`.
- `data`
  - : Bytes as a {{domxref("BufferSource")}}.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the report has been sent.

### Exceptions

- {{domxref("DOMException")}} `NotAllowedError`
  - : Thrown if sending the report fails for any reason.

## Examples

The example below shows how to make a Joy-Con device rumble using output reports. You can see more examples, and live demos in the article [Connecting to uncommon HID devices](https://web.dev/hid/).

```js
// First, send a command to enable vibration.
// Magical bytes come from https://github.com/mzyy94/joycon-toolweb
const enableVibrationData = [1, 0, 1, 64, 64, 0, 1, 64, 64, 0x48, 0x01];
await device.sendReport(0x01, new Uint8Array(enableVibrationData));

// Then, send a command to make the Joy-Con device rumble.
// Actual bytes are available in the sample below.
const rumbleData = [ /* ... */ ];
await device.sendReport(0x10, new Uint8Array(rumbleData));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
