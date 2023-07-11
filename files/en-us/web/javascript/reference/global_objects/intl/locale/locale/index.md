---
title: Intl.Locale() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.Locale.Locale
---

{{JSRef}}

The **`Intl.Locale()`** constructor creates {{jsxref("Intl.Locale")}} objects.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Syntax

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> **Note:** `Intl.Locale()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `tag`
  - : The Unicode locale identifier string. For the syntax of locale identifier strings, see the [Intl main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Note that the `Intl.Locale` constructor, unlike most other `Intl` constructors, does not accept an array of locales or `undefined`.
- `options`
  - : An object that contains configuration for the Locale. Option values here take priority over extension keys in the locale identifier. Possible properties are:
    - `language`
      - : The language. Any syntactically valid string following the [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) grammar (2–3 or 5–8 letters) is accepted, but the implementation only recognizes certain kinds.
    - `script`
      - : The script. Any syntactically valid string following the [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) grammar (4 letters) is accepted, but the implementation only recognizes certain kinds.
    - `region`
      - : The region. Any syntactically valid string following the [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) grammar (either 2 letters or 3 digits) is accepted, but the implementation only recognizes certain kinds.
    - `calendar`
      - : The calendar. Any syntactically valid string following the [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) grammar (one or more segments of 3–8 alphanumerals, joined by hyphens) is accepted, but the implementation only recognizes certain kinds, which are listed in [`Intl.Locale.prototype.getCalendars`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types).
    - `collation`
      - : The collation. Any syntactically valid string following the `type` grammar is accepted, but the implementation only recognizes certain kinds, which are listed in [`Intl.Locale.prototype.getCollations`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types).
    - `numberingSystem`
      - : The numbering system. Any syntactically valid string following the `type` grammar is accepted, but the implementation only recognizes certain kinds, which are listed in [`Intl.Locale.prototype.getNumberingSystems`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_systems).
    - `caseFirst`
      - : The case-first sort option. Possible values are `"upper"`, `"lower"`, or `"false"`.
    - `hourCycle`
      - : The hour cycle. Possible values are `"h11"`, `"h12"`, `"h23"`, or `"h24"`.
    - `numeric`
      - : The numeric sort option. A boolean.

## Examples

### Basic usage

At its very simplest, the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor takes
a locale identifier string as its argument:

```js
const us = new Intl.Locale("en-US");
```

### Using the Locale constructor with an options object

The constructor also takes an optional configuration object argument, which can contain
any of several extension types. For example, set the
[`hourCycle`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
property of the configuration object to your desired hour cycle type, and then pass it
into the constructor:

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
- [Unicode locale identifiers spec](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
- [A polyfill of `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
