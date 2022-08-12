---
title: FontFaceSet.delete()
slug: Web/API/FontFaceSet/delete
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - delete
  - FontFaceSet
browser-compat: api.FontFaceSet.delete
---
{{APIRef("CSS Font Loading API")}}

The **`delete()`** method of the {{domxref("FontFaceSet")}} interface removes a font from the set.

## Syntax

```js
delete(font)
```

### Parameters

- `font`
  - : A {{domxref("FontFace")}} to be removed from the set.

### Return value

A boolean value which is `true` if the deletion was successful.

> **Note:** if the font passed into this method was added via the CSS {{cssxref("@font-face")}} rule, the method will return `false` as it is not possible to modify fonts added via CSS.

## Examples

In the following example a new {{domxref("FontFace")}} object is created and then deleted from the {{domxref("FontFaceSet")}}.

```js
let font = new FontFace('MyFont', 'url(myFont.woff2)');
document.fonts.delete(font);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
