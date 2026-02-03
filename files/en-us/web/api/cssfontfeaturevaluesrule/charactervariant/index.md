---
title: "CSSFontFeatureValuesRule: characterVariant property"
short-title: characterVariant
slug: Web/API/CSSFontFeatureValuesRule/characterVariant
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.characterVariant
---

{{ APIRef("CSSOM") }}

The read-only **characterVariant** property of the {{domXRef("CSSFontFeatureValuesRule")}} interface contains a {{domXRef("CSSFontFeatureValuesMap")}} object representing the user-defined-ident and feature index for a variable font which supports {{CSSXRef("font-variant-alternates", "characterVariant()", "#characterVariant")}}.

## Value

A {{domxref("CSSFontFeatureValuesMap")}} object.

Although the `characterVariant` property itself is read-only in the sense that you can't replace the `CSSFontFeatureValuesMap` object, you can still assign to the `characterVariant` property directly. You can also modify the values of the `characterVariant` using the [`CSSFontFeatureValuesMap` instance methods](/en-US/docs/Web/API/CSSFontFeatureValuesMap#instance_methods).

## Examples

### Basic usage

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @charactervariant {
    my-charactervariant: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (
  myRule instanceof CSSFontFeatureValuesRule &&
  myRule.characterVariant.size
) {
  // do something with the characterVariant
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxRef("@font-feature-values","@character-variant","#character-variant")}}
- {{cssxRef("font-variant-alternates","character-variant()","#character-variant")}} functional notation
- {{domxref("CSSFontFeatureValuesMap")}}
