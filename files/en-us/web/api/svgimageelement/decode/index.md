---
title: SVGImageElement.decode()
slug: Web/API/SVGImageElement/decode
page-type: web-api-instance-method
tags:
  - API
  - Decode
  - Image
  - Method
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
  - SVGImageElement
  - asynchronous
browser-compat: api.SVGImageElement.decode
---
{{APIRef("SVG")}}

The **`decode()`** method of the
{{domxref("SVGImageElement")}} interface initiates asynchronous decoding of an image,
returning a {{jsxref('Promise')}} that resolves once the image data is ready
for use.

## Syntax

```js
decode()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} which resolves once the image data is ready to be used, such as
by appending it to the DOM, replacing an existing image, and so forth.

### Exceptions

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.decode()")}}: The same thing, but for HTML
  {{HTMLElement("image")}} elements
