---
title: "USBDevice: clearHalt() method"
short-title: clearHalt()
slug: Web/API/USBDevice/clearHalt
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.clearHalt
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`clearHalt()`** method of the {{domxref("USBDevice")}}
interface returns a {{jsxref("promise")}} that resolves when a halt condition is
cleared. A halt condition is when a data transfer to or from the device has a status
of `'stall'`, which requires the web page (the _host_ system, in USB
terminology) to clear that condition. See the for details.

## Syntax

```js-nolint
clearHalt(direction, endpointNumber)
```

### Parameters

- `direction`
  - : Indicates whether the devices input or output should be cleared. Valid values
    are `'in'` or `'out'`.
- `endpointNumber`
  - : Indicates the number of the endpoint to clear. The promise will reject if an invalid
    endpoint is supplied.

### Return value

A {{jsxref("promise")}}.

## Examples

The following example shows how to test for and clear a `'stall'` condition
in the result of a data transfer.

> **Note:** What data can be passed to a USB device and how it is passed is particular and unique
> to each device.

```js
while (true) {
  let result = await data.transferIn(1, 6);

  if (result.data && result.data.byteLength === 6) {
    console.log(`Channel 1: ${result.data.getUint16(0)}`);
    console.log(`Channel 2: ${result.data.getUint16(2)}`);
    console.log(`Channel 5: ${result.data.getUint16(4)}`);
  }

  if (result.status === "stall") {
    console.warn("Endpoint stalled. Clearing.");
    await device.clearHalt("in", 1);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
