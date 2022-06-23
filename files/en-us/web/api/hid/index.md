---
title: HID
slug: Web/API/HID
page-type: web-api-interface
tags:
  - API
  - Advanced
  - WebHID
  - WebHID API
  - Experimental
browser-compat: api.HID
---
{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`HID`** interface provides methods for connecting to _HID devices_, listing attached HID devices and event handlers for connected HID devices.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties of its parent, {{domxref("EventTarget")}}._

### Event handlers

- {{domxref("HID.onconnect")}}
  - : Fired when an HID device is connected.
- {{domxref("HID.ondisconnect")}}
  - : Fired when an HID device is disconnected.

## Methods

_This interface also inherits methods of its parent, {{domxref("EventTarget")}}._

- {{domxref("HID.getDevices","getDevices()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of connected {{domxref("HIDDevice")}} objects.
- {{domxref("HID.requestDevice","requestDevice()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of connected {{domxref("HIDDevice")}} objects. Calling this function will trigger the user agent's permission flow in order to gain permission to access one selected device from the returned list of devices.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebHID API")}}
