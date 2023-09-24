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
format()
format(list)
```

### Parameters

- `list`
  - : An iterable object, such as an Array.

### Return value

A language-specific formatted string representing the elements of the list

## Description

The **`format()`** method returns a string that has been
formatted based on parameters provided in the `Intl.ListFormat` object. The
`locales` and `options` parameters customize the behavior of
`format()` and let applications specify the language conventions that
should be used to format the list.

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
