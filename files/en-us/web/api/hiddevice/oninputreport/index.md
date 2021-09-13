---
title: HIDDevice.oninputreport
slug: Web/API/HIDDevice/oninputreport
tags:
  - API
  - Property
  - Reference
  - oninputreport
  - HIDDevice
browser-compat: api.HIDDevice.oninputreport
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`oninputreport`** event handler of the {{domxref("HIDDevice")}} interface processes inputreport events.

The event fires when a new report is received from the HID device.

## Syntax

```js
HIDDevice.oninputreport = function;
HIDDevice.addEventListener('inputreport', function);
```

## Example

The following example demonstrates listening for an `inputreport` event that will allow the application to detect which button is pressed on a Joy-Con Right device. You can see more examples, and live demos in the article [Connecting to uncommon HID devices](https://web.dev/hid/).

```js
device.addEventListener("inputreport", event => {
  const { data, device, reportId } = event;

  // Handle only the Joy-Con Right device and a specific report ID.
  if (device.productId !== 0x2007 && reportId !== 0x3f) return;

  const value = data.getUint8(0);
  if (value === 0) return;

  const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
  console.log(`User pressed button ${someButtons[value]}.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
