---
title: "FontFaceSet: delete() method"
short-title: delete()
slug: Web/API/FontFaceSet/delete
page-type: web-api-instance-method
browser-compat: api.FontFaceSet.delete
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`delete()`** method of the {{domxref("FontFaceSet")}} interface removes a font from the set.

Font faces that were added to the set using the CSS {{cssxref("@font-face")}} rule remain connected to the corresponding CSS, and cannot be deleted.

## Syntax

```js-nolint
delete(font)
```

### Parameters

- `font`
  - : A {{domxref("FontFace")}} to be removed from the set.

### Return value

A boolean value which is `true` if the deletion was successful, and `false` otherwise.

## Examples

In the following example a new {{domxref("FontFace")}} object is created and then deleted from the {{domxref("FontFaceSet")}}.

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.delete(font);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
