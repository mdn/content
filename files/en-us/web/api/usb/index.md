---
title: USB
slug: Web/API/USB
tags:
  - API
  - Interface
  - Reference
  - USB
  - WebUSB
  - WebUSB API
browser-compat: api.USB
---
{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`USB`** interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides attributes and methods for finding and connecting USB devices from a web page.

Use {{domxref("navigator.usb")}} to get access to the `USB` object.

The USB interface inherits from {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Properties

None.

## Methods

- {{domxref("USB.getDevices()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("USBDevice")}} objects for paired attached devices.
- {{domxref("USB.requestDevice()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("USBDevice")}} if the specified device is found. Calling this function triggers the user agent's pairing flow.

## Events

- {{domxref("USB.connect_event", "connect")}}
  - : Fired whenever a previously paired device is connected.
- {{domxref("USB.disconnect_event", "disconnect")}}
  - : Fired whenever a paired device is disconnected.


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
