---
title: USBIsochronousInTransferPacket
slug: Web/API/USBIsochronousInTransferPacket
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBIsochronousInTransferPacket
  - WebUSB
  - WebUSB API
browser-compat: api.USBIsochronousInTransferPacket
---
{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The `USBIsochronousInTransferPacket` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) is part of the response from a call to the `isochronousTransferIn()` method of the `USBDevice` interface. It represents the status of an individual packet from a request to transfer data from the USB device to the USB host over an isochronous endpoint.

## Constructor

- {{domxref("USBIsochronousInTransferPacket.USBIsochronousInTransferPacket", "USBIsochronousInTransferPacket()")}} {{Experimental_Inline}}
  - : Creates a new `USBIsochronousInTransferPacket` object with the provided `status` and `data` fields.

## Properties

- {{domxref("USBIsochronousInTransferPacket.data")}} {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a `DataView` object containing the data received from the USB device in this packet, if any.
- {{domxref("USBIsochronousInTransferPacket.status")}} {{ReadOnlyInline}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Returns the status of the transfer request, one of:

    - `"ok"` - The transfer was successful.
    - `"stall"` - The device indicated an error by generating a stall condition on the endpoint. A stall on an isochronous endpoint does not need to be cleared.
    - `"babble"` - The device responded with more data than was expected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
