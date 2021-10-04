---
title: Intl.RelativeTimeFormat() constructor
slug: >-
  Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
tags:
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
  - RelativeTimeFormat
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.RelativeTimeFormat
---

{{JSRef}}

The **`Intl.RelativeTimeFormat()`** constructor creates {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} objects.

## Syntax

```js
new Intl.RelativeTimeFormat();
new Intl.RelativeTimeFormat(locales);
new Intl.RelativeTimeFormat(locales, options);
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation", 1)}} page.
- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are "`lookup`" and "`best fit`"; the default is "`best fit`". For information about this option, see the {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `numeric`

      - : The format of output message. Possible values are:

        - "`always`" (default, e.g., `1 day ago`),
        - or "`auto`" (e.g., `yesterday`). The "`auto`" value allows to not always have to use numeric values in the output.

    - `style`

      - : The length of the internationalized message. Possible values are:

        - "`long`" (default, e.g., `in 1 month`)
        - "`short`" (e.g., `in 1 mo.`),
        - or "`narrow`" (e.g., `in 1 mo.`). The narrow style could be similar to the short style for some locales.

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

// Format relative time using positive  value (1).
rtf.format(1, "day");
// > "in 1 day"
```

### Using the auto option

If `numeric:auto` option is passed, it will produce the string `yesterday` or `tomorrow` instead of `1 day ago` or `in 1 day`. This allows to not always have to use numeric values in the output.

```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day");
// > "yesterday"

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
- {{jsxref("Global_Objects/Intl", "Intl")}}
- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
