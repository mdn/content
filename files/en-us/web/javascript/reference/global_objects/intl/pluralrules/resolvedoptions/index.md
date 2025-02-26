---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.PluralRules.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.PluralRules")}} instances returns a new object with properties reflecting the options computed during initialization of this `PluralRules` object.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.prototype.resolvedOptions()")}}

```js interactive-example
const pluralRules1 = new Intl.PluralRules("uk");
const options1 = pluralRules1.resolvedOptions();

const pluralRules2 = new Intl.PluralRules("bn");
const options2 = pluralRules2.resolvedOptions();

console.log(options1.pluralCategories);
// Expected output: Array ["few", "many", "one", "other"]

console.log(options2.pluralCategories);
// Expected output: Array ["one", "other"]
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `PluralRules` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. No Unicode extension key will be included in the output.
- `type`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"cardinal"` or `"ordinal"`. The default is `"cardinal"`.
- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : The value provided for these properties in the `options` argument, with defaults filled in as needed. These properties are present only if neither `minimumSignificantDigits` nor `maximumSignificantDigits` was provided in the `options` argument.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : The value provided for these properties in the `options` argument, with defaults filled in as needed. These properties are present only if at least one of them was provided in the `options` argument.
- `pluralCategories`
  - : An {{jsxref("Array")}} of plural categories used by the given locale, selected from the list `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` and `"other"`.
- `roundingIncrement`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is one of `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`. The default is `1`.
- `roundingMode`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is one of `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"`, and `"halfEven"`. The default is `"halfExpand"`.
- `roundingPriority`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"auto"`, `"morePrecision"`, or `"lessPrecision"`. The default is `"auto"`.
- `trailingZeroDisplay`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"auto"` or `"stripIfInteger"`. The default is `"auto"`.

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
