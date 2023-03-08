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
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// Example using style set to `long` and locale `fr-FR`
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// → '1 heure, 46 minutes et 40 secondes'

// Example using style set to `short`  and locale `en`
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// → '1 hr, 46 min and 40 sec'

// Example using style set to `short`  and locale `pt`
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// → 1h 46min 40s
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
