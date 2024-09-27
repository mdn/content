---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DisplayNames.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.DisplayNames")}} instances returns a new object with properties reflecting the options computed during initialization of this `DisplayNames` object.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this `DisplayNames` object. The object has the following properties, in the order they are listed:

- `locale`
  - : The BCP 47 language tag for the locale actually used, determined by the [locale negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) process. No Unicode extension key will be included in the output.
- `style`
  - : The value provided for this property in the `options` argument, with default filled in as needed. It is either `"narrow"`, `"short"`, or `"long"`. The default is `"long"`.
- `type`
  - : The value provided for this property in the `options` argument. It is either `"language"`, `"region"`, `"script"`, `"currency"`, `"calendar"`, or `"dateTimeField"`. It is required so there is no default.
- `fallback`
  - : The value provided for this property in the `options` argument. It is either `"code"` or `"none"`. The default is `"code"`.
- `languageDisplay`
  - : The value provided for this property in the `options` argument. It is either `"dialect"` or `"standard"`. The default is `"dialect"`.

## Examples

### Using resolvedOptions

```js
const displayNames = new Intl.DisplayNames(["de-DE"], { type: "region" });

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "long"
console.log(usedOptions.type); // "region"
console.log(usedOptions.fallback); // "code"
```

```js
const displayNames = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.type); // "language"
console.log(usedOptions.languageDisplay); // "standard"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DisplayNames")}}
