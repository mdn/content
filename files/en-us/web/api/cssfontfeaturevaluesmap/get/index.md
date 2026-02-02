---
title: "CSSFontFeatureValuesMap: get() method"
short-title: get()
slug: Web/API/CSSFontFeatureValuesMap/get
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.get
---

{{APIRef("CSSOM")}}

The **`get()`** method of the {{domxref("CSSFontFeatureValuesMap")}} interface returns value corresponding to the key in this `CSSFontFeatureValuesMap`, or `undefined` if there is none.

## Syntax

```js-nolint
get(property)
```

### Parameters

- `key`
  - : The key of the value to return from the `CSSFontFeatureValuesMap` object.

### Return value

Returns `true` if an entry with the specified key exists in the `CSSFontFeatureValuesMap` object; otherwise `false`.

## Examples

The following example gets the values that match the `key`s in the `@swash` rule.

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
