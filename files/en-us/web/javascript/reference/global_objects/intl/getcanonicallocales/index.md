---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Reference
browser-compat: javascript.builtins.Intl.getCanonicalLocales
---
{{JSRef}}

The **`Intl.getCanonicalLocales()`** method returns an array
containing the canonical locale names. Duplicates will be omitted and elements will be
validated as structurally valid language tags.

{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
Intl.getCanonicalLocales(locales)
```

### Parameters

- `locales`
  - : A list of {{jsxref("String")}} values for which to get the canonical locale names.

### Return value

An array containing the canonical locale names.

## Examples

### Using getCanonicalLocales

```js
Intl.getCanonicalLocales('EN-US'); // ["en-US"]
Intl.getCanonicalLocales(['EN-US', 'Fr']); // ["en-US", "fr"]

Intl.getCanonicalLocales('EN_US');
// RangeError:'EN_US' is not a structurally valid language tag
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
- [A polyfill of `Intl.getCanonicalLocales` in FormatJS](https://formatjs.io/docs/polyfills/intl-getcanonicallocales/)
