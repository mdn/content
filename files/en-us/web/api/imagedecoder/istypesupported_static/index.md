---
title: "ImageDecoder: isTypeSupported() static method"
short-title: isTypeSupported()
slug: Web/API/ImageDecoder/isTypeSupported_static
page-type: web-api-static-method
browser-compat: api.ImageDecoder.isTypeSupported_static
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ImageDecoder.isTypeSupported()`** static method checks if a given [MIME type](/en-US/docs/Web/HTTP/MIME_types) can be decoded by the user agent.

## Syntax

```js-nolint
ImageDecoder.isTypeSupported(type)
```

### Parameters

- `type`
  - : A string containing the [MIME type](/en-US/docs/Web/HTTP/MIME_types) to check for decoding support.

### Return value

A {{jsxref("promise")}} that resolves with a boolean value indicating whether images with a format of `type` can be decoded by the API.

## Examples

The following example checks if GIF and PCX images are supported for decoding and prints the result to the console.

```js
let isGifSupported = await ImageDecoder.isTypeSupported("image/gif");
console.log(`GIF supported: ${isGifSupported}`); // Likely true.

let isPcxSupported = await ImageDecoder.isTypeSupported("image/pcx");
console.log(`PCX supported: ${isPcxSupported}`); // Probably false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
