---
title: "CSSFontFeatureValuesMap: values() method"
short-title: values()
slug: Web/API/CSSFontFeatureValuesMap/values
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CSSFontFeatureValuesMap.values
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`values()`** method of {{domxref("CSSFontFeatureValuesMap")}} instances returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `[key, value]` pairs for each declaration in this `CSSFontFeatureValuesMap` in insertion order.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new iterable [iterator object](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator).

## Examples

### Basic usage

The following example assigns the values to the `swashValues` variable and then logs the first two values. This example is using `@swash` but also works with other [feature value blocks](/en-US/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
// get the values of swash
const swashValues = myRule.swash.values();
console.log(swashValues.next().value); // logs [1]
console.log(swashValues.next().value); // logs [2]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.values()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)
