---
title: Intl.ListFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.ListFormat.format
---

{{JSRef}}

The **`format()`** method of {{jsxref("Intl.ListFormat")}} instances returns a string with a
language-specific representation of the list.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Syntax

```js-nolint
format(list)
```

### Parameters

- `list`
  - : An iterable object, such as an Array, containing strings. Omitting it results in formatting the empty array, which could be slightly confusing, so it is advisable to always explicitly pass a list.

### Return value

A language-specific formatted string representing the elements of the list.

> [!NOTE]
> Most of the time, the formatting returned by `format()` is consistent. However, the output may vary between implementations, even within the same locale — output variations are by design and allowed by the specification. It may also not be what you expect. For example, the string may use non-breaking spaces or be surrounded by bidirectional control characters. You should not compare the results of `format()` to hardcoded constants.

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.ListFormat")}}
