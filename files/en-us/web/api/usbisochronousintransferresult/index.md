---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBIsochronousInTransferResult
  - WebUSB
  - WebUSB API
browser-compat: api.USBIsochronousInTransferResult
---
{{draft}}{{securecontext_header}}{{APIRef("WebUSB API")}}

The `USBIsochronousInTransferResult` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides the result from a call to the `isochronousTransferIn()` method of the `USBDevice` interface. It represents the result from requesting a transfer of data from the USB device to the USB host.

## Constructor

- {{domxref("USBIsochronousInTransferResult.USBIsochronousInTransferResult()")}}
  - : Creates a new `USBIsochronousInTransferResult` object with the provided `packets` and `data` fields.

## Properties

- {{domxref("USBIsochronousInTransferResult.data")}}{{readonlyInline}}
  - : Returns a `DataView` object containing the data received from the device. This is the combined data from all packets. See the individual `DataView` objects in the `packets` array for the portion of this buffer containing data from each packet.
- {{domxref("USBIsochronousInTransferResult.packets")}}{{readonlyInline}}
  - : Returns an array of `USBIsochronousInTransferPacket` objects containing the result of each request to receive a packet from the device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
