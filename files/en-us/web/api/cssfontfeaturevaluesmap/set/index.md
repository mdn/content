---
title: "CSSFontFeatureValuesMap: set() method"
short-title: set()
slug: Web/API/CSSFontFeatureValuesMap/set
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.set
---

{{APIRef("CSSOM")}}

The **`set()`** method of {{domxref("CSSFontFeatureValuesMap")}} instances adds a new entry with a specified key and value to this `CSSFontFeatureValuesMap`, or updates an existing entry if the key already exists.

## Syntax

```js-nolint
set(key, value)
```

### Parameters

- `key`
  - : The key of the entry to add to or modify within the `CSSFontFeatureValuesMap` object. Can be any value.
- `value`
  - : The value of the entry to add to or modify within the `CSSFontFeatureValuesMap` object. Must be an integer that matches the `index` of the alternative font feature.

### Return value

The `CSSFontFeatureValuesMap` object.

## Examples

### Basic usage

The following example updates the value for `swashy` and adds a third declaration. This example is using `@swash` but also works with other [feature value blocks](/en-US/docs/Web/CSS/Reference/At-rules/@font-feature-values#feature_value_blocks).

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
function logSwashes(value, key) {
  console.log(`('${key}') = ${value}`);
}
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
// log current swashes
myRule.swash.forEach(logSwashes); // logs "('swishy') = 1", "('swashy') = 2"

// update swash with the key swashy
myRule.swash.set("swashy", 3);
myRule.swash.forEach(logSwashes); // logs "('swishy') = 1", "('swashy') = 3"

// add new swash with the key swooshy
myRule.swash.set("swooshy", 2);
myRule.swash.forEach(logSwashes); // logs "('swishy') = 1", "('swooshy') = 2", "('swashy') = 3"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.keys()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
