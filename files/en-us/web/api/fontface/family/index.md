---
title: FontFace.family
slug: Web/API/FontFace/family
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - family
browser-compat: api.FontFace.family
---
{{APIRef("CSS Font Loading API")}}

The **`FontFace.family`** property
allows the author to get or set the font family of a {{domxref("FontFace")}} object.
This is equivalent to the {{cssxref("@font-face/font-family", "font-family")}}
descriptor of {{cssxref("@font-face")}}.

## Syntax

```js
instanceOfFontFace.family = 'font family name';
let fontFace = instanceOfFontFace.family; // "font family name"
```

### Value

A {{domxref("DOMString")}}.

## Example

```js
let fontFace = new FontFace('Roboto', 'url(https://fonts.example.com/roboto.woff2)');
console.log(fontFace.family); // 'Roboto'

fontFace.family = 'newRoboto';
console.log(fontFace.family); // 'newRoboto'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
