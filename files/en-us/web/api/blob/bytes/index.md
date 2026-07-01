---
title: "Blob: bytes() method"
short-title: bytes()
slug: Web/API/Blob/bytes
page-type: web-api-instance-method
browser-compat: api.Blob.bytes
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`bytes()`** method of the {{domxref("Blob")}} interface returns a {{jsxref("Promise")}} that resolves with a {{jsxref("Uint8Array")}} containing the contents of the blob as an array of bytes.

## Syntax

```js-nolint
bytes()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{jsxref("Uint8Array")}} object containing the blob data.

### Exceptions

The method will reject the returned {{jsxref("Promise")}} if, for example, the reader used to fetch the blob's data throws an exception.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
