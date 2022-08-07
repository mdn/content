---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
tags:
  - Collator
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Collator.resolvedOptions
---
{{JSRef}}

The **`Intl.Collator.prototype.resolvedOptions()`** method
returns a new object with properties reflecting the locale and collation options
computed during initialization of this {{jsxref("Intl.Collator")}} object.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
resolvedOptions()
```

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
const de = new Intl.Collator('de', { sensitivity: 'base' })
const usedOptions = de.resolvedOptions();

usedOptions.locale;            // "de"
usedOptions.usage;             // "sort"
usedOptions.sensitivity;       // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation;         // "default"
usedOptions.numeric;           // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
