---
title: "USB: getDevices() method"
short-title: getDevices()
slug: Web/API/USB/getDevices
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.USB.getDevices
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`getDevices`** method of the {{DOMxRef("USB")}} interface
returns a {{JSxRef("Promise")}} that resolves with an array of {{DOMxRef("USBDevice")}}
objects for paired attached devices. For information on pairing devices, see
{{DOMxRef("USB.requestDevice()")}}.

## Syntax

```js-nolint
getDevices()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that resolves with an array of {{DOMxRef("USBDevice")}}
objects.

## Examples

The following example logs the product name and serial number of paired devices to the
console. For information on pairing devices, see
{{DOMxRef("USB.requestDevice","USB.requestDevice()")}}.

```js
navigator.usb.getDevices().then((devices) => {
  console.log(`Total devices: ${devices.length}`);
  devices.forEach((device) => {
    console.log(
      `Product name: ${device.productName}, serial number ${device.serialNumber}`,
    );
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
