---
title: "FontFace: ascentOverride property"
short-title: ascentOverride
slug: Web/API/FontFace/ascentOverride
page-type: web-api-instance-property
browser-compat: api.FontFace.ascentOverride
---

{{APIRef("CSS Font Loading API")}}

The **`ascentOverride`** property of the {{domxref("FontFace")}} interface returns and sets the ascent metric for the font, the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.

This property is equivalent to the {{cssxref("@font-face/ascent-override")}} descriptor of {{cssxref("@font-face")}}.

## Value

A string. The possible values are `normal`, indicating that the metric used should be obtained from the font file, or a percentage.

This property accepts the same values as the {{cssxref("@font-face/ascent-override")}} descriptor.

## Examples

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { ascentOverride: "90%" },
);
console.log(fontFace.ascentOverride); // 90%
fontFace.ascentOverride = "normal";
console.log(fontFace.ascentOverride); // 'normal'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
