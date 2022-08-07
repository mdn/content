---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
tags:
  - Internationalization
  - Intl
  - JavaScript
  - ListFormat
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.ListFormat.resolvedOptions
---
{{JSRef}}

The **`Intl.ListFormat.prototype.resolvedOptions()`** method
returns a new object with properties reflecting the locale and style formatting
options computed during the construction of the current {{jsxref("Intl.ListFormat")}}
object.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-resolvedoptions.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
listFormat.resolvedOptions()
```

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
console.log(usedOptions.style);  // "short"
console.log(usedOptions.type);   // "conjunction" (the default value)
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
