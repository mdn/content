---
title: Intl.Locale.prototype.script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.script
---
{{JSRef}}

The **`Intl.Locale.prototype.script`** property is an accessor property which returns the script used for writing the particular language used in the locale.

## Description

A script, sometimes called writing system, is one of the core attributes of a locale. It indicates the set of symbols, or glyphs, that are used to write a particular language. For instance, the script associated with English is Latin, whereas the script typically associated with Korean is Hangul. In many cases, denoting a script is not strictly necessary, since the language (which is necessary) is only written in a single script. There are exceptions to this rule, however, and it is important to indicate the script whenever possible, in order to have a complete Unicode language identifier.

## Examples

### Setting the script in the locale identifier string argument

The script is the second part of a valid Unicode language identifier string, and can be set by adding it to the locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. Note that the script is not a required part of a locale identifier.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // Prints "Latn"
```

### Setting the script via the configuration object

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor takes a configuration object, which can be used to set the script subtag and property.

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // Prints "Latn"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode's script subtag specification](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity)
