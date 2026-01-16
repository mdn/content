---
title: "CSSFontFeatureValuesMap: get() method"
short-title: get()
slug: Web/API/CSSFontFeatureValuesMap/get
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.get
---

{{APIRef("CSSOM")}}

The **`get()`** method of the {{domxref("CSSFontFeatureValuesMap")}}
interface returns value corresponding to the key in this `CSSFontFeatureValuesMap`, or `undefined` if there is none.

The get() method of the StylePropertyMapReadOnly interface returns a CSSStyleValue object for the first value of the specified property.

## Syntax

```js-nolint
get(property)
```

### Parameters

- `key`
  - : The key of the value to return from the `CSSFontFeatureValuesMap` object.

### Return value

The value associated with the specified key in the `CSSFontFeatureValuesMap` object. If the key can't be found, [undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) is returned.

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
console.log(myRule.swash.get("swishy")); // logs [1]
console.log(myRule.swash.get("swashy")); // logs [2]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.get()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)
