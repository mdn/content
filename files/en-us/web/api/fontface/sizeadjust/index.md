---
title: "FontFace: sizeAdjust property"
short-title: sizeAdjust
slug: Web/API/FontFace/sizeAdjust
page-type: web-api-instance-property
browser-compat: api.FontFace.sizeAdjust
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`sizeAdjust`** property of the {{domxref("FontFace")}} interface returns and sets a multiplier for the glyph outlines and metrics associated with the font.
This can help harmonize the sizes of different fonts when rendered at the same font size.

This property is equivalent to the {{cssxref("@font-face/size-adjust")}} descriptor of {{cssxref("@font-face")}}.

## Value

A string containing a non-negative percentage.
The default value is `"100%"`, which leaves the font's glyph outlines and metrics unchanged.
For example, `"120%"` scales them to 120% of their original size.

This property accepts the same values as the {{cssxref("@font-face/size-adjust")}} descriptor.

## Examples

### Setting the size adjustment

This example sets the size adjustment when constructing a font face, then updates it using the property.

```js
const fontFace = new FontFace(
  "Roboto",
  'url("https://fonts.example.com/roboto.woff2")',
  {
    sizeAdjust: "120%",
  },
);
console.log(fontFace.sizeAdjust); // "120%"

fontFace.sizeAdjust = "100%";
console.log(fontFace.sizeAdjust); // "100%"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/size-adjust")}}
- [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
