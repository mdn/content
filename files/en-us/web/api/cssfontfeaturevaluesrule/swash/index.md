---
title: "CSSFontFeatureValuesRule: swash property"
short-title: swash
slug: Web/API/CSSFontFeatureValuesRule/swash
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.swash
---

{{ APIRef("CSSOM") }}

Blah

## Value

A {{domxref("CSSFontFeatureValuesMap")}} object.

Although the `swash` property itself is read-only in the sense that you can't replace the `CSSFontFeatureValuesMap` object, you can still assign to the `swash` property directly. You can also modify the values of the `swash` using the [`CSSFontFeatureValuesMap` instance methods](/en-US/docs/Web/API/CSSFontFeatureValuesMap#instance_methods).

## Example

### CSS

```css
@font-feature-values "MonteCarlo" {
  @swash {
    my-swashes: 1;
  }
}
```

### JS

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check 
if (myRule instanceof CSSFontFeatureValuesRule && myRule.swash.size) {
  // do something with the swash
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxRef("@font-feature-values","@swash","#swash")}}
- {{cssxRef("font-variant-alternates","swash()","#swash")}} functional notation
- {{domxref("CSSFontFeatureValuesMap")}}
