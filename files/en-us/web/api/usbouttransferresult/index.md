---
title: USBOutTransferResult
slug: Web/API/USBOutTransferResult
tags:
  - API
  - CSSUnparsedValue
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBOutTransferResult
  - WebUSB
  - WebUSB API
browser-compat: api.USBOutTransferResult
---
{{draft}}{{securecontext_header}}{{APIRef("WebUSB API")}}

The `USBOutTransferResult` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides the result from a call to the `transferOut()` and `controlTransferOut()` methods of the `USBDevice` interface. It represents the result from requesting a transfer of data from the USB host to the USB device.

## Constructor

- {{domxref("USBOutTransferResult.USBOutTransferResult()")}}
  - : Creates a new `USBOutTransferResult` object with the provided `status` and `bytesWritten` fields.

## Properties

- {{domxref("USBOutTransferResult.bytesWritten")}}{{readonlyInline}}
  - : Returns the number of bytes from the transfer request that were sent to the device.
- {{domxref("USBOutTransferResult.status")}}{{readonlyInline}}

  - : Returns the status of the transfer request, one of:

    - `"ok"` - The transfer was successful.
    - `"stall"` - The device indicated an error by generating a stall condition on the endpoint. A stall on a bulk or interrupt endpoint must be cleared by calling `clearHalt()` before `transferOut()` can be called again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
