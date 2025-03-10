---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Collator.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.Collator")}} instances returns a new object with properties reflecting the options computed during initialization of this `Collator` object.

{{InteractiveExample("JavaScript Demo: Intl.Collator.prototype.resolvedOptions")}}

```js interactive-example
const numberDe = new Intl.NumberFormat("de-DE");
const numberAr = new Intl.NumberFormat("ar");

console.log(numberDe.resolvedOptions().numberingSystem);
// Expected output: "latn"

console.log(numberAr.resolvedOptions().numberingSystem);
// Expected output: "arab"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `Collator` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. Only the `co`, `kn`, and `kf` Unicode extension keys, if requested and supported, may be included in the output.
- `usage`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"sort"` or `"search"`. The default is `"sort"`.
- `sensitivity`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"base"`, `"accent"`, `"case"`, or `"variant"`. The default is `"variant"` for usage `"sort"`; it's locale dependent for usage `"search"`.
- `ignorePunctuation`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is a boolean. The default is `true` for Thai (`th`) and `false` for all other languages.
- `collation`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"co"`, with default filled in as needed. It is a supported [collation type](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types) for this locale. The default is `"default"`.
- `numeric`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"kn"`, with default filled in as needed. It is a boolean. The default is `false`. If the implementation does not support this Unicode extension key, this property is omitted.
- `caseFirst`
  - : The value provided for this property in the `options` argument, or using the Unicode extension key `"kf"`, with default filled in as needed. It is either `"upper"`, `"lower"`, or `"false"`. The default is `"false"`. If the implementation does not support this Unicode extension key, this property is omitted.

## Examples

### Using the resolvedOptions method

```js
const de = new Intl.Collator("de", { sensitivity: "base" });
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.usage; // "sort"
usedOptions.sensitivity; // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation; // "default"
usedOptions.numeric; // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
