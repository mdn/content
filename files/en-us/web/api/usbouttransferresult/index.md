---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
page-type: web-api-interface
status:
  - experimental
browser-compat: api.USBOutTransferResult
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

The `USBOutTransferResult` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides the result from a call to the `transferOut()` and `controlTransferOut()` methods of the `USBDevice` interface. It represents the result from requesting a transfer of data from the USB host to the USB device.

## Constructor

- {{domxref("USBOutTransferResult.USBOutTransferResult", "USBOutTransferResult()")}} {{Experimental_Inline}}
  - : Creates a new `USBOutTransferResult` object with the provided `status` and `bytesWritten` fields.

## Instance properties

- {{domxref("USBOutTransferResult.bytesWritten")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the number of bytes from the transfer request that were sent to the device.
- {{domxref("USBOutTransferResult.status")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Returns the status of the transfer request, one of:

    - `"ok"` - The transfer was successful.
    - `"stall"` - The device indicated an error by generating a stall condition on the endpoint. A stall on a bulk or interrupt endpoint must be cleared by calling `clearHalt()` before `transferOut()` can be called again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
