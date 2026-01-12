---
title: "CSSFontFeatureValuesRule: ornaments property"
short-title: ornaments
slug: Web/API/CSSFontFeatureValuesRule/ornaments
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.ornaments
---

{{ APIRef("CSSOM") }}

Blah

## Example

### CSS

```css
@font-feature-values "MonteCarlo" {
  @ornaments {
    my-ornaments: 1;
  }
}
```

### JS

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check 
if (rule instanceof CSSFontFeatureValuesRule && myRule.ornaments.size) {
  // do something with the ornaments
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxRef("@font-feature-values","@ornaments","#ornaments")}}
- {{cssxRef("font-variant-alternates","ornaments()","#ornaments")}} functional notation
- {{domxref("CSSFontFeatureValuesMap")}}
