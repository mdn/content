---
title: "CSSFontFeatureValuesMap: [Symbol.iterator]() method"
short-title: "[Symbol.iterator]()"
slug: Web/API/CSSFontFeatureValuesMap/Symbol.iterator
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.@@iterator
---

{{APIRef("CSSOM")}}

The **`[Symbol.iterator]()`** method of {{domxref("CSSFontFeatureValuesMap")}} interface implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows built-in iterators to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and {{jsxref("Statements/for...of", "for...of")}} loops. It returns the value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the iterator object itself.

## Syntax

```js-nolint
iterator[Symbol.iterator]()
```

### Parameters

None.

### Return value

The value of [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), which is the iterator object itself.

## Examples

The following example uses the built-in iterator of `CSSFontFeatureValuesMap` to log the values using a `for...of` loop.

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
for (const value of myRule.swash.keys()) {
  console.log(value);
}
// Logs: "swishy", "swashy"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Iterator.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
- {{jsxref("Iterator")}}
