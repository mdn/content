---
title: "USBDevice: claimInterface() method"
short-title: claimInterface()
slug: Web/API/USBDevice/claimInterface
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USBDevice.claimInterface
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The **`claimInterface()`** method of the
{{domxref("USBDevice")}} interface returns a {{jsxref("promise")}} that resolves when
the requested interface is claimed for exclusive access.

## Syntax

```js-nolint
claimInterface(interfaceNumber)
```

### Parameters

- `interfaceNumber`
  - : The index of one of the interfaces supported by the device. Interfaces are
    device specific.

### Return value

A {{jsxref("promise")}}.

## Examples

The following example shows `claimInterface()` in the context of connecting
to a USB device.

```js
async function connectDevice(usbDevice) {
  await usbDevice.open();
  if (usbDevice.configuration === null) await usbDevice.selectConfiguration(1);
  await usbDevice.claimInterface(0);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
