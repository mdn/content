---
title: Intl.Locale() constructor
short-title: Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.Locale.Locale
sidebar: jsref
---

The **`Intl.Locale()`** constructor creates {{jsxref("Intl.Locale")}} objects.

{{InteractiveExample("JavaScript Demo: Intl.Locale() constructor")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## Syntax

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> [!NOTE]
> `Intl.Locale()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `tag`
  - : The Unicode locale identifier string. For the syntax of locale identifier strings, see the [Intl main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument). Note that the `Intl.Locale` constructor, unlike most other `Intl` constructors, does not accept an array of locales or `undefined`.
- `options`
  - : An object that contains configuration for the Locale. Option values here take priority over extension keys in the locale identifier. Possible properties are:
    - `language`
      - : The [language](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language). Any syntactically valid string following the [`unicode_language_subtag`](https://unicode.org/reports/tr35/#unicode_language_subtag) grammar (2–3 or 5–8 letters) is accepted, but the implementation only recognizes certain kinds.
    - `script`
      - : The [script](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script). Any syntactically valid string following the [`unicode_script_subtag`](https://unicode.org/reports/tr35/#unicode_script_subtag) grammar (4 letters) is accepted, but the implementation only recognizes certain kinds.
    - `region`
      - : The [region](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region). Any syntactically valid string following the [`unicode_region_subtag`](https://unicode.org/reports/tr35/#unicode_region_subtag) grammar (either 2 letters or 3 digits) is accepted, but the implementation only recognizes certain kinds.
    - `variants`
      - : The [variants](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants). It should be a dash (`-`) separated list of _unique_ variant tags, where each tag is any syntactically valid string following the [`unicode_variant_subtag`](https://unicode.org/reports/tr35/#unicode_variant_subtag) grammar (either 5–8 alphanumerals or a digit followed by 3 alphanumerals), but the implementation only recognizes certain kinds.
    - `calendar`
      - : The [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar). Any syntactically valid string following the [`type`](https://unicode.org/reports/tr35/#Unicode_locale_identifier) grammar (one or more segments of 3–8 alphanumerals, joined by hyphens) is accepted, but the implementation only recognizes certain kinds, which are listed in [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).
    - `collation`
      - : The [collation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation). Any syntactically valid string following the `type` grammar is accepted, but the implementation only recognizes certain kinds, which are listed in [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).
    - `numberingSystem`
      - : The [numbering system](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem). Any syntactically valid string following the `type` grammar is accepted, but the implementation only recognizes certain kinds, which are listed in [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).
    - `caseFirst`
      - : The [case-first sort option](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst). Possible values are `"upper"`, `"lower"`, or `"false"`.
    - `hourCycle`
      - : The [hour cycle](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle). Possible values are `"h23"`, `"h12"`, `"h11"`, or the practically unused `"h24"`, which are explained in [`Intl.Locale.prototype.getHourCycles`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types)
    - `numeric`
      - : The [numeric sort option](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric). A boolean.

## Examples

### Basic usage

At its very simplest, the `Intl.Locale()` constructor takes
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
- [Canonical Unicode Locale Identifiers](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in the Unicode locale data markup language spec
