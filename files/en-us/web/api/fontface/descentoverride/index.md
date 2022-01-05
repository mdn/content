---
title: FontFace.descentOverride
slug: Web/API/FontFace/descentOverride
tags:
  - API
  - Property
  - Reference
  - descentOverride
  - FontFace
browser-compat: api.FontFace.descentOverride
---
{{APIRef("CSS Font Loading API")}}

The **`descentOverride`** property of the {{domxref("FontFace")}} interface returns and sets the value of the {{cssxref("@font-face/descent-override")}} descriptor. The possible values are `normal`, indicating that the metric used should be obtained from the font file, or a percentage.

## Syntax

```js
let descentOverride = FontFace.descentOverride;
FontFace.descentOverride = '90%';
```

### Value

A {{domxref("CSSOMString","string")}}.

## Examples

```css
let fontFace = new FontFace('Roboto', 'url(https://fonts.example.com/roboto.woff2)', {'descentOverride':'90%'});
  console.log(fontFace.descentOverride); // 90%
  fontFace.descentOverride = 'normal';
  console.log(fontFace.descentOverride); // 'normal'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
