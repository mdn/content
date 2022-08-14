---
title: FontFace.ascentOverride
slug: Web/API/FontFace/ascentOverride
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ascentOverride
  - FontFace
browser-compat: api.FontFace.ascentOverride
---
{{APIRef("CSS Font Loading API")}}

The **`ascentOverride`** property of the {{domxref("FontFace")}} interface returns and sets the value of the {{cssxref("@font-face/ascent-override")}} descriptor. The possible values are `normal`, indicating that the metric used should be obtained from the font file, or a percentage.

## Value

A string.

## Examples

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
  { ascentOverride: "90%" }
);
console.log(fontFace.ascentOverride); // 90%
fontFace.ascentOverride = "normal";
console.log(fontFace.ascentOverride); // 'normal'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
