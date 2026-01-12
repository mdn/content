---
title: "CSSFontFeatureValuesRule: styleset property"
short-title: styleset
slug: Web/API/CSSFontFeatureValuesRule/styleset
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.styleset
---

{{ APIRef("CSSOM") }}

Blah

## Example

### CSS

```css
@font-feature-values "MonteCarlo" {
  @styleset {
    my-stylesets: 1;
  }
}
```

### JS

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check 
if (myRule instanceof CSSFontFeatureValuesRule && myRule.styleset.size) {
  // do something with the styleset
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxRef("@font-feature-values","@styleset","#styleset")}}
- {{cssxRef("font-variant-alternates","styleset()","#styleset")}} functional notation
- {{domxref("CSSFontFeatureValuesMap")}}
