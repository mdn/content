---
title: HID.onconnect
slug: Web/API/HID/onconnect
tags:
  - API
  - Property
  - Reference
  - onconnect
  - HID
browser-compat: api.HID.onconnect
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`onconnect`** [event handler](/en-US/docs/Web/Events/Event_handlers) of the {{domxref("HID")}} interface processes the events fired when the user agent connects to the HID device.

## Syntax

```js
HID.onconnect = function;
HID.addEventListener('connect', function);
```

## Example

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
