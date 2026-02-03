---
title: "CSSFontFeatureValuesMap: has() method"
short-title: has()
slug: Web/API/CSSFontFeatureValuesMap/has
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.has
---

{{APIRef("CSSOM")}}

The **`has()`** method of the {{domxref("CSSFontFeatureValuesMap")}} interface returns a boolean indicating whether an entry with the specified key exists in this `CSSFontFeatureValuesMap` or not.

## Syntax

```js-nolint
has(property)
```

### Parameters

- `key`
  - : The key of the value to return from the `CSSFontFeatureValuesMap` object.

### Return value

The value associated with the specified key in the `CSSFontFeatureValuesMap` object. If the key can't be found, [undefined](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) is returned.

## Examples

### Basic usage

The following example returns `true` or `false` if the `@swash` rule contains the `key`. This example is using `@swash` but also works with other [feature value blocks](/en-US/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @swash {
    swishy: 1;
    swashy: 2;
  }
}
```

#### JavaScript

```js
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
console.log(myRule.swash.has("swishy")); // logs true
console.log(myRule.swash.has("swooshy")); // logs false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.has()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
