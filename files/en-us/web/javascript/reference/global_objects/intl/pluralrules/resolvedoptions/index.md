---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.PluralRules.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.PluralRules")}} instances returns a new object with properties reflecting the locale and plural formatting options computed during initialization of this `Intl.PluralRules` object.

{{EmbedInteractiveExample("pages/js/intl-pluralrules-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the locale and plural formatting options computed during the initialization of the given {{jsxref("Intl.PluralRules")}} object.

The object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale`.
- `pluralCategories`
  - : An {{jsxref("Array")}} of plural categories used by the given locale, selected from the list `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` and `"other"`.
- `type`

  - : The type used (`cardinal` or `ordinal`).

- `roundingIncrement` {{experimental_inline}}
  - : The rounding-increment precision (the increment used when rounding numbers).
    This is the value specified in the `options.roundingIncrement` argument in the constructor.
- `roundingMode` {{experimental_inline}}
  - : The rounding mode.
    This is the value provided for the `options.roundingMode` argument in the constructor, or the default value: `halfExpand`.
- `roundingPriority` {{experimental_inline}}
  - : The priority for resolving rounding conflicts if both "FractionDigits" and "SignificantDigits" are specified.
    This is the value provided for the `options.roundingPriority` argument in the constructor, or the default value: `auto`.
- `trailingZeroDisplay` {{experimental_inline}}
  - : The strategy for displaying trailing zeros on whole numbers.
    This is the value specified in the `options.trailingZeroDisplay` argument in the constructor, or the default value: `"auto"`.

Only one of the following two groups of properties is included:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : The values provided for these properties in the `options` argument or filled in as defaults.
    These properties are present only if neither `minimumSignificantDigits` nor `maximumSignificantDigits` was provided in the `options` argument.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : The values provided for these properties in the `options` argument or filled in as defaults.
    These properties are present only if at least one of them was provided in the `options` argument.

## Examples

### Using the resolvedOptions() method

The code below shows the construction of a `PluralRules` object, followed by logging of each of the resolved options.

```js
// Create a PluralRules instance
const de = new Intl.PluralRules("de-DE", {
  maximumSignificantDigits: 2,
  trailingZeroDisplay: "auto",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.pluralCategories); // Array ["one", "other"]
console.log(usedOptions.type); // "cardinal"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // undefined (maximumSignificantDigits is set)
console.log(usedOptions.maximumFractionDigits); //undefined (maximumSignificantDigits is set)
console.log(usedOptions.minimumSignificantDigits); // 1
console.log(usedOptions.maximumSignificantDigits); //2
console.log(usedOptions.roundingIncrement); // 1
console.log(usedOptions.roundingMode); // "halfExpand"
console.log(usedOptions.roundingPriority); // "auto"
console.log(usedOptions.trailingZeroDisplay); // "auto"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.PluralRules")}}
