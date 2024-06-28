---
title: "Response: bytes() method"
short-title: bytes()
slug: Web/API/Response/bytes
page-type: web-api-instance-method
browser-compat: api.Response.bytes
---

{{APIRef("Fetch API")}}

The **`bytes()`** method of the {{domxref("Response")}} interface takes a {{domxref("Response")}} stream and reads it to completion.
It returns a promise that resolves with a {{jsxref("Uint8Array")}}.

## Syntax

```js-nolint
bytes()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("Uint8Array")}}.

### Exceptions

- `TypeError`
  - : The response body has already been read from, or the associated stream is locked or has been cancelled.
- `RangeError`
  - : There is a problem creating the associated `ArrayBuffer`.
    For example, if the data size is more than [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

## Examples

### Fetching and decoding a file

The code below shows how you might fetch a text file, return the body as a {{jsxref("Uint8Array")}}, and then decode this into a string.

```js
const response = await fetch("https://www.example.com/textfile.txt");
const textFile = await response.bytes();
const string = new TextDecoder().decode(textFile);
console.log(string);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
