---
title: "CSSFontFeatureValuesRule: characterVariant property"
short-title: characterVariant
slug: Web/API/CSSFontFeatureValuesRule/characterVariant
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.characterVariant
---

{{ APIRef("CSSOM") }}

Blah

## Example

### CSS

```css
@font-feature-values "MonteCarlo" {
  @characterVariant {
    my-characterVariant: 1;
  }
}
```

### JS

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check 
if (rule instanceof CSSFontFeatureValuesRule && myRule.characterVariant.size) {
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
