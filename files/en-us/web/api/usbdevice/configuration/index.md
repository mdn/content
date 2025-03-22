---
title: "USBDevice: configuration property"
short-title: configuration
slug: Web/API/USBDevice/configuration
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.USBDevice.configuration
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`configuration`** read only property of the
{{domxref("USBDevice")}} interface returns a {{domxref("USBConfiguration")}} object for
the currently selected interface for a paired USB device.

## Value

A {{domxref("USBConfiguration")}} object.

## Examples

The following example uses this property to test for the existence of a
USBConfiguration property to select a configuration before claiming an interface.

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
