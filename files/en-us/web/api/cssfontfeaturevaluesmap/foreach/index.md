---
title: "CSSFontFeatureValuesMap: forEach() method"
short-title: forEach()
slug: Web/API/CSSFontFeatureValuesMap/forEach
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.forEach
---

{{APIRef("CSSOM")}}

The **`forEach()`** method of {{domxref("CSSFontFeatureValuesMap")}} instances executes a provided function once per each key/value pair in this map, in insertion order.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each entry in the map. The function is called with the following arguments:
    - `value`
      - : Value of each iteration.
    - `key`
      - : Key of each iteration.
    - `map`
      - : The map being iterated.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example logs the `key` and `value` for each entry in the `@swash` rule.

```css
@font-feature-values "MonteCarlo" {
  @swash {
    swishy: 1;
    swashy: 2;
  }
}
```

```js
// function to be used as callback
function logSwashes(value, key, map) {
  console.log(`('${key}') = ${value}`);
}
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
myRule.swash.forEach(logSwashes);
// logs:
// "('swishy') = 1"
// "('swashy') = 2"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.forEach()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
