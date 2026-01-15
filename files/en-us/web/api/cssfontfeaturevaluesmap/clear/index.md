---
title: "CSSFontFeatureValuesMap: clear() method"
short-title: clear()
slug: Web/API/CSSFontFeatureValuesMap/clear
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.clear
---

{{APIRef("CSSOM")}}

The **`clear()`** method of the {{domxref("CSSFontFeatureValuesMap")}}
interface removes all declarations in the `CSSFontFeatureValuesMap`.

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example removes all the declarations within the [`@swash`](/en-US/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash) feature block.

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
myRule.swash.clear()
console.log(myRule.swash.size); // logs 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
