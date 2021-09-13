---
title: Intl.ListFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
tags:
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - ListFormat
  - Reference
browser-compat: javascript.builtins.Intl.ListFormat.ListFormat
---
{{JSRef}}

The **`Intl.ListFormat()`** constructor creates
{{jsxref("Intl/ListFormat", "Intl.ListFormat")}} objects that enable language-sensitive list
formatting.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general
    form and interpretation of the `locales` argument, see the
    {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation",
      1)}} page.
- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are "`lookup`"
        and "`best fit`"; the default is "`best fit`". For
        information about this option, see the {{jsxref("Global_Objects/Intl", "Intl",
        "#Locale_negotiation", 1)}} page.
    - `type`
      - : The format of output message. Possible values are "`conjunction`"
        that stands for "and"-based lists (default, e.g., "`A, B, and C`"), or
        "`disjunction`" that stands for "or"-based lists (e.g.,
        "`A, B, or C`"). "`unit`" stands for lists of values with
        units (e.g., "`5 pounds, 12 ounces`").
    - `style`
      - : The length of the formatted message. Possible values are: "`long`"
        (default, e.g., "`A, B, and C`"); "`short`" (e.g.,
        "`A, B, C`"), or "`narrow`" (e.g., "`A B C`").
        When `style` is "`short`" or "`narrow`",
        "`unit`" is the only allowed value for the type option.

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

```js
const list = ['Motorcycle', 'Bus', 'Car'];

 console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
// > Motorcycle, Bus and Car

 console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
// > Motorcycle, Bus or Car

 console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
// > Motorcycle Bus Car
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
