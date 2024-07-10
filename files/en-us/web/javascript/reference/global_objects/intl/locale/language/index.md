---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.language
---

{{JSRef}}

The **`language`** accessor property of {{jsxref("Intl.Locale")}} instances returns the language associated with this locale.

## Description

Language is one of the core attributes of a locale. The Unicode specification treats the language identifier of a locale as the language and the region together (to make a distinction between dialects and variations, e.g. British English vs. American English). The `language` property of a {{jsxref("Intl.Locale")}} returns strictly the locale's language subtag. The `language` property's value is set at construction time, either through the `language` subtag (first part) of the locale identifier or through the `language` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present.

The set accessor of `language` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the language can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Setting the language via the locale string

In order to be a valid Unicode locale identifier, a string must start with the language subtag. The main argument to the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor must be a valid Unicode locale identifier, so whenever the constructor is used, it must be passed an identifier with a language subtag.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Overriding language via the configuration object argument

While the language subtag must be specified, the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can override the language subtag.

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
- [Unicode language subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in the Unicode locale data markup language spec
