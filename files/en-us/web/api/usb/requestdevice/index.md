---
title: USB.requestDevice()
slug: Web/API/USB/requestDevice
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - USB
  - WebUSB
  - WebUSB API
  - getDevices()
  - Experimental
browser-compat: api.USB.requestDevice
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`requestDevice()`** method of the {{domxref("USB")}}
interface returns a {{jsxref("Promise")}} that resolves with an instance of
{{domxref("USBDevice")}} if the specified device is found. Calling this function
triggers the user agent's pairing flow.

## Syntax

```js
requestDevice(filters)
```

### Parameters

- `filters`

  - : An array of filter objects for possible devices you would like to pair. Each filter
    object can have the following properties:

    - `vendorId`
    - `productId`
    - `classCode`
    - `subclassCode`
    - `protocolCode`
    - `serialNumber`

### Return value

A {{JSxRef("Promise")}} that resolves with an instance of {{DOMxRef("USBDevice")}}.

## Examples

The following example looks for one of two USB devices. Notice that two product IDs are
specified. Both are passed to `requestDevice()`. This triggers a user-agent
flow that prompts the user to select a device for pairing. Only the selected device is
passed to `then()`.

The number of filters does not specify the number of devices shown by the user agent.
For example, if only a USB device with product ID `0xa800` is found, then
only one device will be listed by the user agent. On the other hand if the user agent
finds two of the first listed device and one of the second, then all three devices will
be listed.

```js
const filters = [
  { vendorId: 0x1209, productId: 0xa800 },
  { vendorId: 0x1209, productId: 0xa850 },
];
navigator.usb.requestDevice({ filters })
  .then((usbDevice) => {
    console.log(`Product name: ${usbDevice.productName}`);
  })
  .catch((e) => {
    console.error(`There is no device. ${e}`);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
