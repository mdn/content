---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
  - RelativeTimeFormat
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.format
---
{{JSRef}}

The **`Intl.RelativeTimeFormat.prototype.format()`** method formats a `value` and `unit` according to the locale and formatting options of this {{jsxref("Intl.RelativeTimeFormat")}} object.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
format(value, unit)
```

### Parameters

- `value`
  - : Numeric value to use in the internationalized relative time message.
- `unit`
  - : Unit to use in the relative time internationalized message. Possible values are: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Plural forms are also permitted.

## Description

The function returned by the `format` getter formats a value and a unit into a string according to the locale and formatting options of this {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} object.

## Examples

### Basic format usage

The following example shows how to create a relative time formatter using the English language.

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

### Using the auto option

If `numeric:auto` option is passed, it will produce the string `yesterday`, `today`, or `tomorrow` instead of `1 day ago`, `in 0 days`, or `in 1 day`. This allows to not always have to use numeric values in the output.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day");
// > "yesterday"

rtf.format(0, "day");
// > "today"

// Format relative time using positive day unit (1).
rtf.format(1, "day");
// > "tomorrow"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.RelativeTimeFormat")}}
