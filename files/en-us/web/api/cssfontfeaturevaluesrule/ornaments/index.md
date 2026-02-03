---
title: "CSSFontFeatureValuesRule: ornaments property"
short-title: ornaments
slug: Web/API/CSSFontFeatureValuesRule/ornaments
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.ornaments
---

{{ APIRef("CSSOM") }}

The read-only **ornaments** property of the {{domXRef("CSSFontFeatureValuesRule")}} interface contains a {{domXRef("CSSFontFeatureValuesMap")}} object representing the [user-defined-ident](/en-US/docs/Web/CSS/Reference/Values/custom-ident) and [feature index](/en-US/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) for a variable font which supports {{CSSXRef("font-variant-alternates", "ornaments()", "#ornaments")}}.

## Value

A {{domxref("CSSFontFeatureValuesMap")}} object.

Although the `ornaments` property itself is read-only in the sense that you can't replace the `CSSFontFeatureValuesMap` object, you can still assign to the `ornaments` property directly. You can also modify the values of the `ornaments` using the [`CSSFontFeatureValuesMap` instance methods](/en-US/docs/Web/API/CSSFontFeatureValuesMap#instance_methods).

## Example

### Basic usage

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @ornaments {
    my-ornaments: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.ornaments.size) {
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
