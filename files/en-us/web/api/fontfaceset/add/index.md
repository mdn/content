---
title: FontFaceSet.add()
slug: Web/API/FontFaceSet/add
tags:
  - API
  - Method
  - Reference
  - add
  - FontFaceSet
browser-compat: api.FontFaceSet.add
---
{{APIRef("CSS Font Loading API")}}

The **`add()`** method of the {{domxref("FontFaceSet")}} interface adds a new font to the set.

## Syntax

```js
FontFaceSet.add(font)
```

### Parameters

- `font`
  - : A {{domxref("FontFace")}} to be added to the set.

### Return Value

A new {{domxref("FontFaceSet")}}.

### Exceptions

- {{domxref("DOMException")}} `InvalidModificationError`
  - : Thrown if this font is already included via the CSS {{cssxref("@font-face")}} rule.

## Examples

In the following example a new {{domxref("FontFace")}} object is created and then added to the {{domxref("FontFaceSet")}}.

```js
let font = new FontFace('MyFont', 'url(myFont.woff2)');
document.fonts.add(font);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

