---
title: USBIsochronousOutTransferResult
slug: Web/API/USBIsochronousOutTransferResult
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBIsochronousOutTransferResult
  - WebUSB
  - WebUSB API
browser-compat: api.USBIsochronousOutTransferResult
---
{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The `USBIsochronousOutTransferResult` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides the result from a call to the `isochronousTransferOut()` method of the `USBDevice` interface. It represents the result from requesting a transfer of data from the USB host to the USB device.

## Constructor

- {{domxref("USBIsochronousOutTransferResult.USBIsochronousOutTransferResult", "USBIsochronousOutTransferResult()")}} {{Experimental_Inline}}
  - : Creates a new `USBIsochronousOutTransferResult` object with the provided `packet` field.

## Properties

- {{domxref("USBIsochronousOutTransferResult.packets")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of `USBIsochronousOutTransferPacket` objects containing the result of each request to send a packet to the device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
