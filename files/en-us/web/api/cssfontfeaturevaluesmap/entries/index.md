---
title: "CSSFontFeatureValuesMap: entries() method"
short-title: entries()
slug: Web/API/CSSFontFeatureValuesMap/entries
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.entries
---

{{APIRef("CSSOM")}}

The **`entries()`** method of {{domxref("CSSFontFeatureValuesMap")}} instances returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `[key, value]` pairs for each declaration in this `CSSFontFeatureValuesMap` in insertion order.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new iterable [iterator object](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator).

## Examples

The following example assigns the entries to the `swashes` variable and then logs the first two values.

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
// get the entries of swash
const swashes = myRule.swash.entries()
console.log(swashes.next().value); // logs ["swishy", [1]]
console.log(swashes.next().value); // logs ["swashy", [2]]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
