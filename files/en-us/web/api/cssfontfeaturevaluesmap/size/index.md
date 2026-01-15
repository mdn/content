---
title: "CSSFontFeatureValuesMap: size property"
short-title: size
slug: Web/API/CSSFontFeatureValuesMap/size
page-type: web-api-instance-property
browser-compat: api.CSSFontFeatureValuesMap.size
---

{{APIRef("CSSOM")}}

The **`size`** read-only property of the {{domxref("CSSFontFeatureValuesMap")}} interface returns an unsigned long integer containing the size of the `CSSFontFeatureValuesMap` object.

## Value

An unsigned long integer.

## Example

The following example outputs an integer of the number of the declarations within the [`@swash`](/en-US/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash) feature block.

```css
@font-feature-values "MonteCarlo" {
  @swash {
    swishy: 1;
    swashy: 2;
  }
}
```

```js
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
console.log(myRule.swash.size); // logs 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
