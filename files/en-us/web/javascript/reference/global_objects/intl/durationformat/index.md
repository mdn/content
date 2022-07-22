---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
tags:
  - Class
  - DurationFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.DurationFormat
---

{{JSRef}} {{SeeCompatTable}}

The **`Intl.DurationFormat`** object enables language-sensitive duration formatting.

## Constructor

- {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : Creates a new `Intl.DurationFormat` object.

## Instance methods

- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : Getter function that formats a duration according to the locale and formatting options of this {{jsxref("Intl/DurationFormat", "DurationFormat")}} object.
- {{jsxref("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : Returns an {{jsxref("Array")}} of objects representing the formatted duration in parts.
- {{jsxref("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.

## Examples

### Using DurationFormat

In basic use without specifying a locale, `DurationFormat` uses the default locale and default options.

```js
// Example using fractionalDigits
new Intl.DurationFormat('en', { fractionalDigits: 2 }).format('PT12.3456S');
// => 12.34 sec

// Example using fractionalDigits and milliseconds set to `narrow`
new Intl.DurationFormat('en', { milliseconds: 'narrow', fractionalDigits: 2 }).format('PT12.3456S');
// => 12s 345.60ms
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
