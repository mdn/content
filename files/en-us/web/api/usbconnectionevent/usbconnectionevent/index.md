---
title: USBConnectionEvent()
slug: Web/API/USBConnectionEvent/USBConnectionEvent
tags:
  - API
  - Constructor
  - Reference
  - USBConnectionEvent
browser-compat: api.USBConnectionEvent.USBConnectionEvent
---
{{securecontext_header}}{{DefaultAPISidebar("WebUSB API")}}

The **`USBConnectionEvent()`** constructor creates a new {{domxref("USBConnectionEvent")}} object which is passed to {{domxref("USB.onconnect")}} and {{domxref("USB.ondisconnect")}}. This constructor is not typically used, it is created by the browser in response to the connection and disconnection of a USB device.

## Syntax

```js
new USBConnectionEvent(type, USBConnectionEventInit);
```

### Parameters

- `type`

  - : A {{domxref("DOMString","string")}} representing the name of the event. One of:

    - `connect`
    - `disconnect`

- `USBConnectionEventInit`

  - : An object including the following:

    - A {{domxref("USBDevice")}}
      - : An object representing the USB device being connected or disconnected.
    - `bubbles` {{optional_inline}}
      - : A boolean value indicating whether the event bubbles. The default is
        `false`.
    - `cancelable` {{optional_inline}}
      - : A boolean value indicating whether the event can be cancelled. The
        default is `false`.
    - `composed` {{optional_inline}}
      - : A boolean value indicating whether the event will trigger listeners
        outside of a shadow root (see {{domxref("Event.composed")}} for more details). The
        default is `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
