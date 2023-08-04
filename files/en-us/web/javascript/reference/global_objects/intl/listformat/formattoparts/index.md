---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.ListFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.ListFormat")}} instances
returns an {{jsxref("Array")}} of objects representing the different components that
can be used to format a list of values in a locale-aware fashion.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(list)
```

### Parameters

- `list`
  - : An iterable object, such as an {{jsxref("Array")}}, to be formatted according to a locale.

### Return value

An {{jsxref("Array")}} of components which contains the formatted parts from the list.

## Description

Whereas {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}} returns a string being the formatted version
of the list (according to the given locale and style options),
`formatToParts()` returns an array of the different components of the
formatted string.

Each element of the resulting array has two properties: `type` and
`value`. The `type` property may be either
`"element"`, which refers to a value from the list, or
`"literal"` which refers to a linguistic construct. The `value`
property gives the content, as a string, of the token.

The locale and style options used for formatting are given when constructing the
{{jsxref("Intl.ListFormat")}} instance.

## Examples

### Using formatToParts

```js
const fruits = ["Apple", "Orange", "Pineapple"];
const myListFormat = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": ", and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
