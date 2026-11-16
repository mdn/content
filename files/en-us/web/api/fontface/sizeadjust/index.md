---
title: "FontFace: sizeAdjust property"
short-title: sizeAdjust
slug: Web/API/FontFace/sizeAdjust
page-type: web-api-instance-property
browser-compat: api.FontFace.sizeAdjust
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`sizeAdjust`** property of the {{domxref("FontFace")}} interface represents a multiplier for the font's {{Glossary("glyph")}} outlines and metrics, such as glyph widths and line heights, used to lay out text.

Different fonts can look larger or smaller at the same font size, because each font's glyphs are drawn at a different size relative to that font size.
The `sizeAdjust` property allows you to scale a font to match the apparent size of another font, such as a fallback font that is shown until a web font loads.

It is equivalent to the {{cssxref("@font-face/size-adjust")}} descriptor of {{cssxref("@font-face")}}.

## Value

A string containing a non-negative percentage, such as `"120%"`.
The default value is `"100%"`, which leaves the font's glyph outlines and metrics unchanged.

This property accepts the same values as the {{cssxref("@font-face/size-adjust")}} descriptor.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown when setting the property to a value that doesn't match the syntax of the {{cssxref("@font-face/size-adjust")}} descriptor, such as a negative percentage.

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
