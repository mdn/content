---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - PluralRules
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.PluralRules.resolvedOptions
---
{{JSRef}}

The **`Intl.PluralRules.prototype.resolvedOptions()`** method
returns a new object with properties reflecting the locale and plural formatting
options computed during initialization of this {{jsxref("Intl.PluralRules")}} object.

## Syntax

```js
resolvedOptions()
```

### Return value

A new object with properties reflecting the locale and plural formatting options
computed during the initialization of the given {{jsxref("Intl.PluralRules")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `pluralCategories`
  - : An {{jsxref("Array")}} of plural categories used by the given locale, selected from the list `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` and `"other"`.
- `type`
  - : The type used (`cardinal` or `ordinal`).

Only one of the following two groups of properties is included:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults. These properties are present only if neither
    `minimumSignificantDigits` nor `maximumSignificantDigits`
    was provided in the `options` argument.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults. These properties are present only if at least one of them
    was provided in the `options` argument.

## Examples

### Using the resolvedOptions() method

```js
const de = new Intl.PluralRules('de-DE');
const usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.maximumFractionDigits; // 3
usedOptions.minimumFractionDigits; // 0
usedOptions.minimumIntegerDigits;  // 1
usedOptions.pluralCategories;      // Array [ "one", "other" ]
usedOptions.type;                  // "cardinal"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/PluralRules", "Intl.PluralRules")}}
