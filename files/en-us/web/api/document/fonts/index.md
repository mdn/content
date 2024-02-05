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

### Doing operation after fonts are loaded

```js
document.fonts.ready.then((fontFaceSet) => {
  // Any operation that needs to be done only after all used fonts
  // have finished loading can go here.
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // some fonts may still be unloaded if they aren't used on the site
  console.log(fontFaces.map((f) => f.status));
});
```

The promise fulfils when loading and layout operations of all used fonts are done. The set of used fonts can be different from the set of _declared_ fonts, e.g. if optional fonts (i.e. fonts declared via `font-display: optional`) were not able to load in time.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FontFaceSet")}} interface
- {{domxref("FontFace")}}
