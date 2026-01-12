---
title: "CSSFontFeatureValuesRule: annotation property"
short-title: annotation
slug: Web/API/CSSFontFeatureValuesRule/annotation
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.annotation
---

{{ APIRef("CSSOM") }}

Blah

## Example

### CSS

```css
@font-feature-values "MonteCarlo" {
  @annotation {
    my-annotations: 1;
  }
}
```

### JS

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check 
if (myRule instanceof CSSFontFeatureValuesRule && myRule.annotation.size) {
  // do something with the annotation
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxRef("@font-feature-values","@annotation","#annotation")}}
- {{cssxRef("font-variant-alternates","annotation()","#annotation")}} functional notation
- {{domxref("CSSFontFeatureValuesMap")}}
