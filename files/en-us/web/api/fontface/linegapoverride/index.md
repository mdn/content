---
title: FontFace.lineGapOverride
slug: Web/API/FontFace/lineGapOverride
tags:
  - API
  - Property
  - Reference
  - lineGapOverride
  - FontFace
browser-compat: api.FontFace.lineGapOverride
---
{{APIRef("CSS Font Loading API")}}

The **`lineGapOverride`** property of the {{domxref("FontFace")}} interface returns and sets the value of the {{cssxref("@font-face/line-gap-override")}} descriptor. The possible values are `normal`, indicating that the metric used should be obtained from the font file, or a percentage.

## Syntax

```js
let lineGapOverride = FontFace.lineGapOverride;
FontFace.lineGapOverride = '90%';
```

### Value

A {{domxref("CSSOMString","string")}}.

## Examples

```css
let fontFace = new FontFace('Roboto', 'url(https://fonts.example.com/roboto.woff2)', {'lineGapOverride':'90%'});
console.log(fontFace.lineGapOverride); // 90%
fontFace.lineGapOverride = 'normal';
console.log(fontFace.lineGapOverride); // 'normal'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
