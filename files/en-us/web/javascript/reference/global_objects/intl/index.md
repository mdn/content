---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Namespace
browser-compat: javascript.builtins.Intl
---
{{JSRef}}

The **`Intl`** object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The **`Intl`** object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.

## Constructor properties

- {{jsxref("Global_Objects/Intl/Collator/Collator", "Intl.Collator()")}}
  - : Constructor for collators, which are objects that enable language-sensitive string comparison.
- {{jsxref("Global_Objects/Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Constructor for objects that enable language-sensitive date and time formatting.
- {{jsxref("Global_Objects/Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : Constructor for objects that enable the consistent translation of language, region and script display names.
- {{jsxref("Global_Objects/Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Constructor for objects that enable language-sensitive list formatting.
- {{jsxref("Global_Objects/Intl/Locale/Locale", "Intl.Locale()")}}
  - : Constructor for objects that represents a Unicode locale identifier.
- {{jsxref("Global_Objects/Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Constructor for objects that enable language-sensitive number formatting.
- {{jsxref("Global_Objects/Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : Constructor for objects that enable plural-sensitive formatting and language-specific rules for plurals.
- {{jsxref("Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - : Constructor for objects that enable language-sensitive relative time formatting.
- {{jsxref("Global_Objects/Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : Constructor for objects that enable locale-sensitive text segmentation.

## Static methods

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Returns canonical locale names.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Returns a sorted array containing the supported unique calendar, collation, currency, numbering systems, or unit values supported by the implementation.

## Locale identification and negotiation

The internationalization constructors as well as several language sensitive methods of other constructors (listed under [See also](#see_also)) use a common pattern for identifying locales and determining the one they will actually use: they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property.

### locales argument

The `locales` argument is used to determine the locale used in a given operation. The JavaScript implementation examines `locales`, and then computes a locale it understands that comes closest to satisfying the expressed preference. `locales` may be:

- `undefined` (or omitted): The implementation's default locale will be used.
- A locale: A locale identifier or an [`Intl.Locale`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object that wraps a locale identifier.
- A list of locales: Any other value, that will be converted into an object and then treated as an array of locales.

In the latter two cases, the actual locale used is the best-supported locale determined by [locale negotiation](#locale_negotiation).

A locale identifier is a string that consists of:

1. a language subtag,
2. (optionally) a script subtag,
3. (optionally) a region (or country) subtag,
4. (optionally) one or more variant subtags (all of which must be unique),
5. (optionally) one or more BCP 47 extension sequences, and
6. (optionally) a private-use extension sequence

Each subtag and sequence are separated by hyphens. Locale identifiers are case-insensitive ASCII. However, it's conventional to use title case (the first letter is capitalized, successive letters are lower case) for script subtags, upper case for region subtags, and lower case for everything else. For example:

- `"hi"`: Hindi (language)
- `"de-AT"`: German (language) as used in Austria (region)
- `"zh-Hans-CN"`: Chinese (language) written in simplified characters (script) as used in China (region)
- `"en-emodeng"`: English (language) in the "Early modern English" dialect (variant)

Subtags identifying languages, scripts, regions (including countries), and (rarely used) variants are registered in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry). This registry is periodically updated over time, and implementations may not always be up to date, so don't rely too much on subtags being universally supported.

BCP 47 extension sequences consist of a single digit or letter (other than `"x"`) and one or more two- to eight-letter or digit subtags separated by hyphens. Only one sequence is permitted for each digit or letter: `"de-a-foo-a-foo"` is invalid. BCP 47 extension subtags are defined in the [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47). Currently only two extensions have defined semantics:

- The `"u"` (Unicode) extension can be used to request additional customization of {{jsxref("Intl.Collator")}}, {{jsxref("Intl.NumberFormat")}}, or {{jsxref("Intl.DateTimeFormat")}} objects. Examples:

  - `"de-DE-u-co-phonebk"`: Use the phonebook variant of the German sort order, which interprets umlauted vowels as corresponding character pairs: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting.
  - `"ja-JP-u-ca-japanese"`: Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.
  - `"en-GB-u-ca-islamic"`: use British English with the Islamic (Hijri) calendar, where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram, 1439.

- The `"t"` (transformed) extension indicates transformed content: for example, text that was translated from another locale. No `Intl` functionality currently considers the `"t"` extension. However, this extension sometimes contains a nested locale (with no extensions): for example, the transformed extension in `"de-t-en"` contains the locale identifier for English. If a nested locale is present, it must be a valid locale identifier. For example, because `"en-emodeng-emodeng"` is invalid (because it contains a duplicate `emodeng` variant subtag), `"de-t-en-emodeng-emodeng"` is also invalid.

Finally, a private-use extension sequence using the letter `"x"` may appear, followed by one or more one- to eight-letter or digit subtags separated by hyphens. This allows applications to encode information for their own private use, that will be ignored by all `Intl` operations.

### Locale negotiation

The list of locales specified by the `locales` argument, after Unicode extensions have been removed from them, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the `"lookup"` matcher follows the Lookup algorithm specified in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4); the `"best fit"` matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected locale identifier had a Unicode extension sequence, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the locale identifier. For example, the `"co"` key (collation) is only supported by {{jsxref("Intl.Collator")}}, and its `"phonebk"` value is only supported for German.

### options argument

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string `"lookup"` or `"best fit"` and which selects one of the locale matching algorithms described above.

## Examples

### Formatting dates and numbers

You can use `Intl` to format dates and numbers in a form that's conventional for a specific language and region:

```js
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(locale).format(count)}`
  );
}

log("en-US");
// expected output: 5/24/2012 26,254.39

log("de-DE");
// expected output: 24.5.2012 26.254,39
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Introduction: [The ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- Constructors

  - {{jsxref("Intl/Collator", "Intl.Collator()")}}
  - {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - {{jsxref("Intl/ListFormat", "Intl.ListFormat()")}}
  - {{jsxref("Intl/NumberFormat", "Intl.NumberFormat()")}}
  - {{jsxref("Intl/PluralRules", "Intl.PluralRules()")}}
  - {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}}
  - {{jsxref("Intl/Locale", "Intl.Locale()")}}
  - {{jsxref("Intl/Segmenter", "Intl.Segmenter()")}}

- Methods

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
