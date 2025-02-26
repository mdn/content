---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.ListFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.ListFormat")}} instances returns a new object with properties reflecting the options computed during initialization of this `ListFormat` object.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat.prototype.resolvedOptions()")}}

```js interactive-example
const deListFormatter1 = new Intl.ListFormat("de-DE", { type: "disjunction" });
const options1 = deListFormatter1.resolvedOptions();

console.log(options1.locale);
// Expected output (Firefox / Safari): "de-DE"
// Expected output (Chrome): "de"

console.log(options1.style);
// Expected output: "long"

console.log(options1.type);
// Expected output: "disjunction"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `ListFormat` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. No Unicode extension key will be included in the output.
- `type`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"conjunction"`, `"disjunction"`, or `"unit"`. The default is `"conjunction"`.
- `style`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"long"`, `"short"`, or `"narrow"`. The default is `"long"`.

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
