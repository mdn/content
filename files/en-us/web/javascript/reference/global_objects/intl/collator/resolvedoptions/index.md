---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Collator.resolvedOptions
---

{{JSRef}}

The **`resolvedOptions()`** method of {{jsxref("Intl.Collator")}} instances returns a new object with properties reflecting the locale and collation options
computed during initialization of this collator object.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the locale and collation options computed
during the initialization of the given {{jsxref("Intl.Collator")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `usage`, `sensitivity`, `ignorePunctuation`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults.
- `collation`
  - : The value requested using the Unicode extension key `"co"`, if it is
    supported for `locale`, or `"default"`.
- `numeric`, `caseFirst`
  - : The values requested for these properties in the `options` argument or
    using the Unicode extension keys `"kn"` and `"kf"` or filled
    in as defaults. If the implementation does not support these properties, they are
    omitted.

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
