---
title: Intl.RelativeTimeFormat.prototype.resolvedOptions()
slug: >-
  Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
  - RelativeTimeFormat
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.resolvedOptions
---
{{JSRef}}

The **`Intl.RelativeTimeFormat.prototype.resolvedOptions()`** method returns a new object with properties reflecting the locale and relative time formatting options computed during initialization of this {{jsxref("Intl/RelativeTimeFormat")}} object.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-resolvedoptions.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
resolvedOptions()
```

### Return value

A new object with properties reflecting the locale and number formatting options computed during the initialization of the given {{jsxref("Intl/RelativeTimeFormat")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension values were requested in the input BCP 47 language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale`.
- `style`

  - : The length of the internationalized message. Possible values are:

    - "`long`" (default, e.g., `in 1 month`)
    - "`short`" (e.g., `in 1 mo.`),
    - or "`narrow`" (e.g., `in 1 mo.`). The narrow style could be similar to the short style for some locales.

- `numeric`

  - : The format of output message. Possible values are:

    - "`always`" (default, e.g., `1 day ago`),
    - or "`auto`" (e.g., `yesterday`). The "`auto`" value allows to not always have to use numeric values in the output.

- `numberingSystem`
  - : The value requested using the Unicode extension key "`nu`" or filled in as a default.

## Examples

### Using the `resolvedOptions` method

```js
var de = new Intl.RelativeTimeFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;          // "de-DE"
usedOptions.style;           // "long"
usedOptions.numeric;         // "always"
usedOptions.numberingSystem; // "latn"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
