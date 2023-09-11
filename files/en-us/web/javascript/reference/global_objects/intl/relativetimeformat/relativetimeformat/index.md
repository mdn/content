---
title: Intl.RelativeTimeFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.RelativeTimeFormat
---

{{JSRef}}

The **`Intl.RelativeTimeFormat()`** constructor creates {{jsxref("Intl.RelativeTimeFormat")}} objects.

## Syntax

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> **Note:** `Intl.RelativeTimeFormat()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    The following Unicode extension key is allowed:

    - `nu`
      - : See [`numberingSystem`](#numberingsystem).

    This key can also be set with `options` (as listed below). When both are set, the `options` property takes precedence.

- `options` {{optional_inline}}

  - : An object containing the following properties, in the order they are retrieved (all of them are optional):

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `numberingSystem`
      - : The numbering system to use for number formatting. For a list of supported numbering system types, see [`Intl.Locale.prototype.getNumberingSystems()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). This option can also be set through the `nu` Unicode extension key; if both are provided, this `options` property takes precedence.
    - `style`
      - : The style of the formatted relative time. Possible values are:
        - `"long"` (default)
          - : E.g., "in 1 month"
        - `"short"`
          - : E.g., "in 1 mo."
        - `"narrow"`
          - : E.g., "in 1 mo.". The narrow style could be similar to the short style for some locales.
    - `numeric`
      - : Whether to use numeric values in the output. Possible values are `"always"` and `"auto"`; the default is `"always"`. When set to `"auto"`, the output may use more idiomatic phrasing such as `"yesterday"` instead of `"1 day ago"`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `locales` or `options` contain invalid values.

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

If `numeric:auto` option is passed, it will produce the string `yesterday` or `tomorrow` instead of `1 day ago` or `in 1 day`. This allows to not always have to use numeric values in the output.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) on v8.dev (2018)
