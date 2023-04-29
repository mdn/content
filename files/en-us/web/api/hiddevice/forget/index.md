---
title: "HIDDevice: forget() method"
short-title: forget()
slug: Web/API/HIDDevice/forget
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HIDDevice.forget
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`forget()`** method of the {{domxref("HIDDevice")}} interface closes the connection to the HID device and forgets the device.

## Syntax

```js-nolint
forget()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` once the connection is closed, the device is forgotten, and the permission is reset.

## Example

In the following example we connect to a Nintendo Switch Joy-Con Right HID device, blink once, and disconnect from it.

```js
async function blink() {
  const devices = await navigator.hid.requestDevice({
    filters: [
      {
        vendorId: 0x057e, // Nintendo Co., Ltd
        productId: 0x2007, // Joy-Con Right
      },
    ],
  });
  const device = devices[0];
  await device.open();
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Finally, disconnect from it
  await device.forget();
}
blink();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
