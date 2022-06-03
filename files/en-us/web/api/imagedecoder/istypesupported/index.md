---
title: ImageDecoder.isTypeSupported
slug: Web/API/ImageDecoder/isTypeSupported
page-type: web-api-static-method
tags:
  - API
  - Method
  - Reference
  - istypesupported
  - ImageDecoder
browser-compat: api.ImageDecoder.isTypeSupported
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`ImageDecoder.isTypeSupported()`** static method checks if a given [mime type](https://en.wikipedia.org/wiki/Media_type) can be decoded by the user agent.

### Parameters

- `type`
  - : The [mime type](https://en.wikipedia.org/wiki/Media_type) to check for decoding support.

### Return value

A {{jsxref("promise")}} that resolves with a {{jsxref("boolean")}} indicating whether images with a format of `type` can be decoded by the API.

## Examples

The following example checks if GIF and PCX images are supported for decoding and prints the result to the console.

```js
let isGifSupported = await ImageDecoder.isTypeSupported('image/gif');
console.log('GIF supported: ' + isGifSupported);  // Likely true.

let isPcxSupported = await ImageDecoder.isTypeSupported('image/pcx');
console.log('PCX supported: ' + isPcxSupported);  // Probably false...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
