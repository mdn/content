---
title: ImageDecoder.type
slug: Web/API/ImageDecoder/type
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - type
  - ImageDecoder
  - Experimental
browser-compat: api.ImageDecoder.type
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`type`** read-only property of the {{domxref("ImageDecoder")}} interface reflects the [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) configured during construction.

## Value

A string containing the configured [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

## Examples

The following example prints the value of `type` to the console.

```js
console.log(imageDecoder.type);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
