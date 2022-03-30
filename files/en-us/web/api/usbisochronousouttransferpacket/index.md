---
title: USBIsochronousOutTransferPacket
slug: Web/API/USBIsochronousOutTransferPacket
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBIsochronousOutTransferPacket
  - WebUSB
  - WebUSB API
browser-compat: api.USBIsochronousOutTransferPacket
---
{{securecontext_header}}{{APIRef("WebUSB API")}}

The `USBIsochronousOutTransferPacket` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) is part of the response from a call to the `isochronousTransferOut()` method of the `USBDevice` interface. It represents the status of an individual packet from a request to transfer data from the USB host to the USB device over an isochronous endpoint.

## Constructor

- {{domxref("USBIsochronousOutTransferPacket.USBIsochronousOutTransferPacket", "USBIsochronousOutTransferPacket()")}}
  - : Creates a new `USBIsochronousOutTransferPacket` object with the provided `status` and `bytesWritten` fields.

## Properties

- {{domxref("USBIsochronousOutTransferPacket.bytesWritten")}}{{readonlyInline}}
  - : Returns the number of bytes from the packet that were sent to the device.
- {{domxref("USBIsochronousOutTransferPacket.status")}}{{readonlyInline}}

  - : Returns the status of the transfer request, one of:

    - `"ok"` - The transfer was successful.
    - `"stall"` - The device indicated an error by generating a stall condition on the endpoint. A stall on an isochronous endpoint does not need to be cleared.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
