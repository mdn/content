---
title: NDEFReader.scan()
slug: Web/API/NDEFReader/scan
page-type: web-api-instance-method
tags:
  - NDEF
  - Reference
  - Web NFC
  - Method
  - Experimental
browser-compat: api.NDEFReader.scan
---
{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef}}

The `scan()` method of the {{DOMxRef("NDEFReader")}} interface activates a reading device and returns a {{jsxref("Promise")}} that either resolves when an NFC tag is read or rejects if a hardware or permission error is encountered. This method triggers a permission prompt if the "nfc" permission has not been previously granted.

## Syntax

```js
scan(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `signal`
      - : An {{DOMxRef("AbortSignal")}} that allows cancelling this `scan()` operation.

### Return value

A {{JSxRef("Promise")}} that resolves immediately after
scheduling read operations for the NFC adapter.

## Exceptions

This method doesn't throw exceptions; instead, it rejects the returned promise,
passing a {{domxref("DOMException")}} whose `name` is one of the
following:

- `AbortError` {{domxref("DOMException")}}
  - : Returned if the scan operation was aborted with the {{DOMxRef("AbortSignal")}} passed in the `options` argument.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if there's already an ongoing scan.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if the permission for this operation was rejected.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Returned if there is no NFC adapter compatible with Web NFC or a connection cannot be established.

## Examples

### Handle scanning errors

This example shows what happens when a scan promise rejects and `readingerror` is thrown.

```js
const ndef = new NDEFReader();
ndef.scan().then(() => {
  console.log("Scan started successfully.");
  ndef.onreadingerror = (event) => {
    console.log("Error! Cannot read data from the NFC tag. Try a different one?");
  };
  ndef.onreading = (event) => {
    console.log("NDEF message read.");
  };
}).catch((error) => {
  console.log(`Error! Scan failed to start: ${error}.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
