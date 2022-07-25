---
title: HID.onconnect
slug: Web/API/HID/onconnect
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - onconnect
  - HID
  - Experimental
browser-compat: api.HID.onconnect
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`onconnect`** [event handler](/en-US/docs/Web/Events/Event_handlers) of the {{domxref("HID")}} interface processes the events fired when the user agent connects to the HID device.

## Value

A function reference or a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function).

## Examples

In the following example an event listener is registered to listen for the connection of a device. The name of the device is then printed to the console using {{domxref("HIDDevice.productName")}}

```js
navigator.hid.addEventListener('connect', ({device}) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
