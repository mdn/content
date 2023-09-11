---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.format
---

{{JSRef}}

The **`format()`** method of {{jsxref("Intl.RelativeTimeFormat")}} instances formats a `value` and `unit` according to the locale and formatting options of this `Intl.RelativeTimeFormat` object.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

## Syntax

```js-nolint
format(value, unit)
```

### Parameters

- `value`
  - : Numeric value to use in the internationalized relative time message.
- `unit`
  - : Unit to use in the relative time internationalized message. Possible values are: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Plural forms are also permitted.

### Return value

A string representing the given `value` and `unit` formatted according to the locale and formatting options of this {{jsxref("Intl.RelativeTimeFormat")}} object.

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
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```

### Using the auto option

If `numeric:auto` option is passed, it will produce the string `yesterday`, `today`, or `tomorrow` instead of `1 day ago`, `in 0 days`, or `in 1 day`. This allows to not always have to use numeric values in the output.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

rtf.format(0, "day"); // "today"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.RelativeTimeFormat")}}
