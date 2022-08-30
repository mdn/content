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

> **Note:** `Intl.ListFormat()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general
    form and interpretation of the `locales` argument, see the
    {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation",
      1)}} page.
- `options` {{optional_inline}}

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale-matching algorithm to use. Possible values:
        - `"best fit"` (default)
        - `"lookup"`
        For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}}
        page.
    - `type`
      - : Indicates the type of grouping. Possible values:
        - `"conjunction"`, for "and"-based grouping of the list items: "A, B, and C" (default)
        - `"disjunction"`, for "or"-based grouping of the list items: "A, B, or C"
        - `"unit"`, for grouping the list items as a unit (neither "and"-based nor "or"-based): "A, B, C"
    - `style`
      - : Indicates the grouping style (for example, whether list separators and conjunctions are included). Possible values:
        - `"long"`: "A, B, and C" (default)
        - `"short"`: "A, B, C"
        - `"narrow"`: "A B C"

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

```js
const list = ['Motorcycle', 'Bus', 'Car'];

console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' })
.format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat('en-GB', { style: 'long' })
.format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat('en-US', { style: 'long' })
.format(list));
// Motorcycle, Bus, and Car

console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'conjunction' })
.format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat('en-US', { style: 'short', type: 'conjunction' })
.format(list));
// Motorcycle, Bus, & Car

console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'conjunction' })
.format(list));
// Motorcycle, Bus, Car

console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'disjunction' })
.format(list));
// Motorcycle, Bus or Car

console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' })
.format(list));
// Motorcycle, Bus or Car

console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'disjunction' })
.format(list));
// Motorcycle, Bus or Car

console.log(new Intl.ListFormat('en-US', { style: 'narrow' })
.format(list));
// Motorcycle, Bus, Car

console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' })
.format(list));
// Motorcycle Bus Car

console.log(new Intl.ListFormat('en-US', { style: 'long' })
.format(["30 degrees", "15 minutes", "50 seconds"]));
// 30 degrees, 15 minutes, and 50 seconds

console.log(new Intl.ListFormat('en-US', { style: 'narrow' })
.format(["30 degrees", "15 minutes", "50 seconds"]));
// 30 degrees, 15 minutes, 50 seconds

console.log(new Intl.ListFormat('en-US', { style: 'narrow', type: 'unit' })
.format(["30°", "15′", "50″"]));
// 30° 15′ 50″
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
