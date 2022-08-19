---
title: Intl.Locale() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
tags:
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - Locale
  - Reference
browser-compat: javascript.builtins.Intl.Locale.Locale
---
{{JSRef}}

The **`Intl.Locale`** constructor is a
standard built-in property of the Intl object that represents a Unicode locale
identifier.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> **Note:** `Intl.Locale()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `tag`
  - : The Unicode locale identifier string.
- `options`
  - : An object that contains configuration for the Locale. Keys are Unicode locale tags,
    values are valid Unicode tag values.

## Examples

### Basic usage

At its very simplest, the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor takes
a locale identifier string as its argument:

```js
const us = new Intl.Locale('en-US');
```

### Using the Locale constructor with an options object

The constructor also takes an optional configuration object argument, which can contain
any of several extension types. For example, set the
[`hourCycle`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
property of the configuration object to your desired hour cycle type, and then pass it
into the constructor:

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // Prints "h12"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
- [Unicode locale identifiers spec](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
- [A polyfill of `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
