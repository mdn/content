---
title: "FontFace: lineGapOverride property"
short-title: lineGapOverride
slug: Web/API/FontFace/lineGapOverride
page-type: web-api-instance-property
browser-compat: api.FontFace.lineGapOverride
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`lineGapOverride`** property of the {{domxref("FontFace")}} interface returns and sets the value of the {{cssxref("@font-face/line-gap-override")}} descriptor.
The possible values are `normal`, indicating that the metric used should be obtained from the font file, or a percentage.

## Value

A string.

## Examples

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { lineGapOverride: "90%" },
);
console.log(fontFace.lineGapOverride); // 90%
fontFace.lineGapOverride = "normal";
console.log(fontFace.lineGapOverride); // 'normal'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
