---
title: "CSSFontFeatureValuesRule: annotation property"
short-title: annotation
slug: Web/API/CSSFontFeatureValuesRule/annotation
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesRule.annotation
---

{{ APIRef("CSSOM") }}

The read-only **annotation** property of the {{domXRef("CSSFontFeatureValuesRule")}} interface contains a {{domXRef("CSSFontFeatureValuesMap")}} object representing the user-defined-ident and feature index for a variable font which supports {{CSSXRef("font-variant-alternates", "annotation()", "#annotation")}}.

## Value

A {{domxref("CSSFontFeatureValuesMap")}} object.

Although the `annotation` property itself is read-only in the sense that you can't replace the `CSSFontFeatureValuesMap` object, you can still assign to the `annotation` property directly. You can also modify the values of the `annotation` using the [`CSSFontFeatureValuesMap` instance methods](/en-US/docs/Web/API/CSSFontFeatureValuesMap#instance_methods).

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
