---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - RelativeTimeFormat
  - Reference
browser-compat: javascript.builtins.Intl.RelativeTimeFormat
---
{{JSRef}}

The **`Intl.RelativeTimeFormat`** object enables language-sensitive relative time formatting.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Constructor

- {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : Creates a new `Intl.RelativeTimeFormat` object.

## Static methods

- {{jsxref("Intl/RelativeTimeFormat/supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- {{jsxref("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : Formats a `value` and a `unit` according to the locale and formatting options of the given {{jsxref("Intl.RelativeTimeFormat")}} object.
- {{jsxref("Intl/RelativeTimeFormat/formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : Returns an {{jsxref("Array")}} of objects representing the relative time format in parts that can be used for custom locale-aware formatting.
- {{jsxref("Intl/RelativeTimeFormat/resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.

## Examples

### Basic format usage

The following example shows how to use a relative time formatter for the English language.

```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day");
// > "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day");
// > "in 1 day"
```

### Using formatToParts

The following example shows how to create a relative time formatter returning formatted parts

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit.
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "in " },
// >  { type: "integer", value: "100", unit: "day" },
// >  { type: "literal", value: " days" }]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
- [The Intl.RelativeTimeFormat API](https://v8.dev/features/intl-relativetimeformat)
- [A polyfill of `Intl.RelativeTimeFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-relativetimeformat/)
