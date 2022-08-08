---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.language
---
{{JSRef}}

The **`Intl.Locale.prototype.language`** property is an accessor property that returns the language associated with the locale.

## Description

Language is one of the core features of a locale. The Unicode specification treats the language identifier of a locale as the language and the region together (to make a distinction between dialects and variations, e.g. British English vs. American English). The `language` property of a {{jsxref("Intl/Locale", "Locale")}} returns strictly the locale's language subtag.

## Examples

### Setting the language in the locale identifier string argument

In order to be a valid Unicode locale identifier, a string must start with the language subtag. The main argument to the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor must be a valid Unicode locale identifier, so whenever the constructor is used, it must be passed an identifier with a language subtag.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Overriding language via the configuration object

While the language subtag must be specified, the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor takes a configuration object, which can override the language subtag.

```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // Prints "es"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode language subtag specification](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity)
