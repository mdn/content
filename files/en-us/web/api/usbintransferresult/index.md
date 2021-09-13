---
title: USBInTransferResult
slug: Web/API/USBInTransferResult
tags:
  - API
  - Experimental
  - Interface
  - NeedsExample
  - Reference
  - USBInTransferResult
  - WebUSB
  - WebUSB API
browser-compat: api.USBInTransferResult
---
{{draft}}{{securecontext_header}}{{APIRef("WebUSB API")}}

The `USBInTransferResult` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides the result from a call to the `transferIn()` and `controlTransferIn()` methods of the `USBDevice` interface. It represents the result from requesting a transfer of data from the USB device to the USB host.

## Constructor

- {{domxref("USBInTransferResult.USBInTransferResult()")}}
  - : Creates a new `USBInTransferResult` object with the provided `status` and `data` fields.

## Properties

- {{domxref("USBInTransferResult.data")}}{{readonlyInline}}
  - : Returns a `DataView` object containing the data received from the USB device, if any.
- {{domxref("USBInTransferResult.status")}}{{readonlyInline}}

  - : Returns the status of the transfer request, one of:

    - `"ok"` - The transfer was successful.
    - `"stall"` - The device indicated an error by generating a stall condition on the endpoint. A stall on the control endpoint does not need to be cleared. A stall on a bulk or interrupt endpoint must be cleared by calling `clearHalt()` before `transferIn()` can be called again.
    - `"babble"` - The device responded with more data than was expected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
