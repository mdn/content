---
title: Intl.DisplayNames.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DisplayNames.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.DisplayNames")}} instances
returns a new object with properties reflecting the locale and style formatting
options computed during the construction of this `Intl.DisplayNames`
object.

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

An object with properties reflecting the locale and formatting options computed during
the construction of the given {{jsxref("Intl.DisplayNames")}} object.

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
    constructor or the default value (`"language"`). Its value is either
    `"language"`, `"region"`, `"script"`, or
    `"currency"`.
- `fallback`
  - : The value provided for this property in the options argument of the constructor or
    the default value (`"code"`). Its value is either `"code"`
    or `"none"`.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DisplayNames")}}
