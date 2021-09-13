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

## Properties

None.

### Event handlers

- {{domxref("USB.onconnect")}}
  - : An event handler called whenever a previously paired device is connected.
- {{domxref("USB.ondisconnect")}}
  - : An event handler called whenever a paired device is disconnected.

## Methods

- {{domxref("USB.getDevices()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("USBDevice")}} objects for paired attached devices.
- {{domxref("USB.requestDevice()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("USBDevice")}} if the specified device is found. Calling this function triggers the user agent's pairing flow.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
