---
title: "CSSFontFeatureValuesRule: stylistic property"
short-title: stylistic
slug: Web/API/CSSFontFeatureValuesRule/stylistic
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.stylistic
---

{{ APIRef("CSSOM") }}

Blah

## Example

### CSS

```css
@font-feature-values "MonteCarlo" {
  @stylistic {
    my-stylistics: 1;
  }
}
```

### JS

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check 
if (rule instanceof CSSFontFeatureValuesRule && myRule.stylistic.size) {
  // do something with the stylistic
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxRef("@font-feature-values","@stylistic","#stylistic")}}
- {{cssxRef("font-variant-alternates","stylistic()","#stylistic")}} functional notation
- {{domxref("CSSFontFeatureValuesMap")}}
