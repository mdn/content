---
title: "CSSFontFeatureValuesRule: styleset property"
short-title: styleset
slug: Web/API/CSSFontFeatureValuesRule/styleset
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.styleset
---

{{ APIRef("CSSOM") }}

The read-only **styleset** property of the {{domXRef("CSSFontFeatureValuesRule")}} interface contains a {{domXRef("CSSFontFeatureValuesMap")}} object representing the user-defined-ident and feature index for a variable font which supports {{CSSXRef("font-variant-alternates", "styleset()", "#styleset")}}.

## Value

A {{domxref("CSSFontFeatureValuesMap")}} object.

Although the `styleset` property itself is read-only in the sense that you can't replace the `CSSFontFeatureValuesMap` object, you can still assign to the `styleset` property directly. You can also modify the values of the `styleset` using the [`CSSFontFeatureValuesMap` instance methods](/en-US/docs/Web/API/CSSFontFeatureValuesMap#instance_methods).

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
