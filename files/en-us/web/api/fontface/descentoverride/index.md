---
title: "FontFace: descentOverride property"
short-title: descentOverride
slug: Web/API/FontFace/descentOverride
page-type: web-api-instance-property
browser-compat: api.FontFace.descentOverride
---

{{APIRef("CSS Font Loading API")}}

The **`descentOverride`** property of the {{domxref("FontFace")}} interface returns and sets the value of the {{cssxref("@font-face/descent-override")}} descriptor.
The possible values are `normal`, indicating that the metric used should be obtained from the font file, or a percentage.

## Value

A string.

## Examples

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { descentOverride: "90%" },
);
console.log(fontFace.descentOverride); // 90%
fontFace.descentOverride = "normal";
console.log(fontFace.descentOverride); // 'normal'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
