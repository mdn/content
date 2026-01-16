---
title: "CSSFontFeatureValuesMap: keys() method"
short-title: keys()
slug: Web/API/CSSFontFeatureValuesMap/keys
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.keys
---

{{APIRef("CSSOM")}}

The **`keys()`** method of {{domxref("CSSFontFeatureValuesMap")}} instances returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `[key, value]` pairs for each declaration in this `CSSFontFeatureValuesMap` in insertion order.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new iterable [iterator object](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator).

## Examples

The following example assigns the keys to the `swashKeys` variable and then logs the first two values.

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
// get the keys of swash
const swashKeys = myRule.swash.keys()
console.log(swashKeys.next().value); // logs "swishy"
console.log(swashKeys.next().value); // logs "swashy"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.keys()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)
