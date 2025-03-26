---
title: "ImageDecoder: complete property"
short-title: complete
slug: Web/API/ImageDecoder/complete
page-type: web-api-instance-property
browser-compat: api.ImageDecoder.complete
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`complete`** read-only property of the {{domxref("ImageDecoder")}} interface returns true if encoded data has completed buffering.

## Value

A {{jsxref("boolean")}}, `true` if buffering is complete.

## Examples

The following example prints the value of `complete` to the console.

```js
console.log(imageDecoder.complete);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
