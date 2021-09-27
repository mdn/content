---
title: HID.ondisconnect
slug: Web/API/HID/ondisconnect
tags:
  - API
  - Property
  - Reference
  - ondisconnect
  - HID
browser-compat: api.HID.ondisconnect
---
{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}

The **`ondisconnect`** [event handler](/en-US/docs/Web/Events/Event_handlers) of the {{domxref("HID")}} interface processes the events when the user agent disconnects from the HID device.

## Syntax

```js
HID.ondisconnect = function;
HID.addEventListener('disconnect', function);
```

## Example

In the following example an event listener is registered to listen for the disconnection of a device. The name of the device is then printed to the console using {{domxref("HIDDevice.productName")}}

```js
navigator.hid.addEventListener('disconnect', ({device}) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
