---
title: Intl.ListFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.ListFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.ListFormat")}} instances returns an array of objects representing each part of the formatted string that would be returned by {{jsxref("Intl/ListFormat/format", "format()")}}. It is useful for building custom strings from the locale-specific tokens.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(list)
```

### Parameters

- `list`
  - : An iterable object, such as an Array, containing strings. Omitting it results in formatting the empty array, which could be slightly confusing, so it is advisable to always explicitly pass a list.

### Return value

An {{jsxref("Array")}} of objects containing the formatted list in parts. Each object has two properties, `type` and `value`, each containing a string. The string concatenation of `value`, in the order provided, will result in the same string as {{jsxref("Intl/ListFormat/format", "format()")}}. The `type` may be one of the following:

- `literal`
  - : Any string that's a part of the format pattern; for example `", "`, `", and"`, etc.
- `element`
  - : An element of the list, exactly as provided.

## Examples

### Using formatToParts()

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
//  { "type": "literal", "value": " and " },
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
