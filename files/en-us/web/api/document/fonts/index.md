---
title: Document.fonts
slug: Web/API/Document/fonts
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Font Loading API
  - FontFace
  - FontFaceSet
  - Fonts
  - font
  - Property
browser-compat: api.Document.fonts
---
{{APIRef("DOM")}}

The **`fonts`** property of the
{{domxref("Document")}} interface returns the {{domxref("FontFaceSet")}} interface of
the document.

## Value

The returned value is the {{domxref("FontFaceSet")}} interface of the document. The
`FontFaceSet` interface is useful for loading new fonts, checking the status
of previously loaded fonts etc.

## Examples

### Doing operation after all fonts are loaded

```js
document.fonts.ready.then(() => {
  // Any operation that needs to be done only after all the fonts
  // have finished loading can go here.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FontFaceSet")}} interface
- {{domxref("FontFace")}}
