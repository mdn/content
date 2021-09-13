---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - NumberFormat
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat.resolvedOptions
---
{{JSRef}}

The **`Intl.NumberFormat.prototype.resolvedOptions()`** method
returns a new object with properties reflecting the locale and number formatting
options computed during initialization of this {{jsxref("Intl.NumberFormat")}} object.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
resolvedOptions()
```

### Return value

A new object with properties reflecting the locale and number formatting options
computed during the initialization of the given {{jsxref("Intl.NumberFormat")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `numberingSystem`
  - : The value provided for this properties in the `options` argument, if
    present, or the value requested using the Unicode extension key "`nu`"
    or filled in as a default.
- `notation`
  - : The value provided for this property in the `options` argument, if
    present, or "`standard`" filled in as a default.
- `compactDisplay`
  - : The value provided for this property in the `options` argument, or
    "`short`" filled in as a default. 
    This property is only present if the `notation` is set to "compact".
- `signDisplay`
  - : The value provided for this property in the `options` argument, or
    "`auto`" filled in as a default.
- `useGrouping`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults.
- `currency`, `currencyDisplay`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults. These properties are only present if `style` is
    "`currency`".

Only one of the following two groups of properties is included:

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults. These properties are present only if neither
    `minimumSignificantDigits` nor `maximumSignificantDigits`
    was provided in the `options` argument.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : The values provided for these properties in the `options` argument or
    filled in as defaults. These properties are present only if at least one of them
    was provided in the `options` argument.

## Examples

### Using the `resolvedOptions` method

```js
var de = new Intl.NumberFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.numberingSystem;       // "latn"
usedOptions.notation;              // "standard"
usedOptions.signDisplay;           // "auto"
usedOptions.style;                 // "decimal"
usedOptions.minimumIntegerDigits;  // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping;           // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}
