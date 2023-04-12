---
title: "Document: fonts property"
short-title: fonts
slug: Web/API/Document/fonts
page-type: web-api-instance-property
browser-compat: api.Document.fonts
---

{{APIRef("DOM")}}

The **`fonts`** property of the {{domxref("Document")}} interface returns the {{domxref("FontFaceSet")}} interface of the document.

This feature is part of the [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API).

## Value

The returned value is the {{domxref("FontFaceSet")}} interface of the document.
The `FontFaceSet` interface is useful for loading new fonts, checking the status of previously loaded fonts etc.

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
