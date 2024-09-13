---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.ListFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.ListFormat")}} instances
returns a new object with properties reflecting the locale and style formatting
options computed during the construction of this `Intl.ListFormat` object.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

An object with properties reflecting the locale and formatting options computed during
the construction of the given {{jsxref("Intl.ListFormat")}} object.

## Description

The object returned by `resolvedOptions()` has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `style`
  - : The value provided for this property in the `options` argument of the
    constructor or the default value (`"long"`). Its value is either
    `"long"`, `"short"`, or `"narrow"`.
- `type`
  - : The value provided for this property in the `options` argument of the
    constructor or the default value (`"conjunction"`). Its value is either
    `"conjunction"`, `"disjunction"`, or `"unit"`.

## Examples

### Using resolvedOptions

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" (the default value)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
