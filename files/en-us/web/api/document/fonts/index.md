---
title: Document.fonts
slug: Web/API/Document/fonts
tags:
  - API
  - DOM
  - Font Loading API
  - FontFace
  - FontFaceSet
  - Fonts
  - font
browser-compat: api.Document.fonts
---
{{APIRef("DOM")}}

The **`fonts`** property of the
{{domxref("Document")}} interface returns the {{domxref("FontFaceSet")}} interface of
the document.

## Syntax

```js
let fontFaceSet = document.fonts;
```

### Value

The returned value is the {{domxref("FontFaceSet")}} interface of the document. The
`FontFaceSet` interface is useful for loading new fonts, checking the status
of previously loaded fonts etc.

## Examples

### Doing operation after all fonts are loaded

```js
document.fonts.ready.then(function() {
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
