---
title: "CSSFontFeatureValuesRule: stylistic property"
short-title: stylistic
slug: Web/API/CSSFontFeatureValuesRule/stylistic
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSFontFeatureValuesRule.stylistic
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The read-only **stylistic** property of the {{domXRef("CSSFontFeatureValuesRule")}} interface contains a {{domXRef("CSSFontFeatureValuesMap")}} object representing the [user-defined-ident](/en-US/docs/Web/CSS/Reference/Values/custom-ident) and [feature index](/en-US/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) for a variable font which supports {{CSSXRef("font-variant-alternates", "stylistic()", "#stylistic")}}.

## Value

A {{domxref("CSSFontFeatureValuesMap")}} object.

Although the `stylistic` property itself is read-only in the sense that you can't replace the `CSSFontFeatureValuesMap` object, you can still assign to the `stylistic` property directly. You can also modify the values of the `stylistic` using the [`CSSFontFeatureValuesMap` instance methods](/en-US/docs/Web/API/CSSFontFeatureValuesMap#instance_methods).

## Example

### Basic usage

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @stylistic {
    my-stylistics: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.stylistic.size) {
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
