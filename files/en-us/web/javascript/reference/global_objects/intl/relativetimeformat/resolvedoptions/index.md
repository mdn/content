---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.RelativeTimeFormat")}} instances returns a new object with properties reflecting the options computed during initialization of this `RelativeTimeFormat` object.

{{InteractiveExample("JavaScript Demo: Intl.RelativeTimeFormat.prototype.resolvedOptions")}}

```js interactive-example
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
const options1 = rtf1.resolvedOptions();

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
const options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// Expected output: "en, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// Expected output: "es, long, auto"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `RelativeTimeFormat` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. Only the `nu` Unicode extension key, if requested, may be included in the output.
- `style`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"long"`, `"short"`, or `"narrow"`. The default is `"long"`.
- `numeric`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"always"` or `"auto"`. The default is `"always"`.
- `numberingSystem`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"nu"`, with default filled in as needed. It is a supported [numbering system](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) for this locale. The default is locale dependent.

## Examples

### Using the resolvedOptions() method

```js
const de = new Intl.RelativeTimeFormat("de-DE");
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.RelativeTimeFormat")}}
