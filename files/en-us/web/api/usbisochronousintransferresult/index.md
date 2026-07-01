---
title: USBIsochronousInTransferResult
slug: Web/API/USBIsochronousInTransferResult
page-type: web-api-interface
status:
  - experimental
browser-compat: api.USBIsochronousInTransferResult
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `USBIsochronousInTransferResult` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides the result from a call to the `isochronousTransferIn()` method of the `USBDevice` interface. It represents the result from requesting a transfer of data from the USB device to the USB host.

## Constructor

- {{domxref("USBIsochronousInTransferResult.USBIsochronousInTransferResult", "USBIsochronousInTransferResult()")}} {{Experimental_Inline}}
  - : Creates a new `USBIsochronousInTransferResult` object with the provided `packets` and `data` fields.

## Instance properties

- {{domxref("USBIsochronousInTransferResult.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a `DataView` object containing the data received from the device. This is the combined data from all packets. See the individual `DataView` objects in the `packets` array for the portion of this buffer containing data from each packet.
- {{domxref("USBIsochronousInTransferResult.packets")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of `USBIsochronousInTransferPacket` objects containing the result of each request to receive a packet from the device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
