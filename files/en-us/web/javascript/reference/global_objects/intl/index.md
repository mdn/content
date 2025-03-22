---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
page-type: javascript-namespace
browser-compat: javascript.builtins.Intl
---

{{JSRef}}

The **`Intl`** namespace object contains several constructors as well as functionality common to the internationalization constructors and other language sensitive functions. Collectively, they comprise the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, date and time formatting, and more.

## Description

Unlike most global objects, `Intl` is not a constructor. You cannot use it with the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Intl` object as a function. All properties and methods of `Intl` are static (just like the {{jsxref("Math")}} object).

The internationalization constructors as well as several language sensitive methods of other constructors (listed under [See also](#see_also)) use a common pattern for identifying locales and determining the one they will actually use: they all accept `locales` and `options` arguments, and negotiate the requested locale(s) against the locales they support using an algorithm specified in the `options.localeMatcher` property.

### locales argument

The `locales` argument is used to determine the locale used in a given operation. The JavaScript implementation examines `locales`, and then computes a locale it understands that comes closest to satisfying the expressed preference. `locales` may be:

- `undefined` (or omitted): The implementation's default locale will be used.
- A locale: A locale identifier or an [`Intl.Locale`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object that wraps a locale identifier.
- A list of locales: Any other value, that will be converted into an object and then treated as an array of locales.

In the latter two cases, the actual locale used is the best-supported locale determined by [locale negotiation](#locale_identification_and_negotiation). If a locale identifier is not a string or an object, a {{jsxref("TypeError")}} is thrown. If a locale identifier is a string that's syntactically invalid, a {{jsxref("RangeError")}} is thrown. If a locale identifier is well-formed but the implementation doesn't recognize it, it is ignored and the next locale in the list is considered, eventually falling back to the system's locale. However, you shouldn't rely on a particular locale name being ignored, because the implementation may add data for any locale in the future. For example, `new Intl.DateTimeFormat("default")` uses the implementation's default locale only because `"default"` is syntactically valid but not recognized as any locale.

A locale identifier is a string that consists of:

1. A language subtag with 2–3 or 5–8 letters
2. A script subtag with 4 letters {{optional_inline}}
3. A region subtag with either 2 letters or 3 digits {{optional_inline}}
4. One or more variant subtags (all of which must be unique), each with either 5–8 alphanumerals or a digit followed by 3 alphanumerals {{optional_inline}}
5. One or more BCP 47 extension sequences {{optional_inline}}
6. A private-use extension sequence {{optional_inline}}

Each subtag and sequence are separated by hyphens. Locale identifiers are case-insensitive {{Glossary("ASCII")}}. However, it's conventional to use title case (the first letter is capitalized, successive letters are lower case) for script subtags, upper case for region subtags, and lower case for everything else. For example:

- `"hi"`: Hindi (language)
- `"de-AT"`: German (language) as used in Austria (region)
- `"zh-Hans-CN"`: Chinese (language) written in simplified characters (script) as used in China (region)
- `"en-emodeng"`: English (language) in the "Early modern English" dialect (variant)

Subtags identifying languages, scripts, regions (including countries), and (rarely used) variants are registered in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry). This registry is periodically updated over time, and implementations may not always be up to date, so don't rely too much on subtags being universally supported.

BCP 47 extension sequences consist of a single digit or letter (other than `"x"`) and one or more two- to eight-letter or digit subtags separated by hyphens. Only one sequence is permitted for each digit or letter: `"de-a-foo-a-foo"` is invalid. BCP 47 extension subtags are defined in the [Unicode CLDR Project](https://github.com/unicode-org/cldr/tree/main/common/bcp47). Currently only two extensions have defined semantics:

- The `"u"` (Unicode) extension can be used to request additional customization of `Intl` API objects. Examples:

  - `"de-DE-u-co-phonebk"`: Use the phonebook variant of the German sort order, which interprets umlauted vowels as corresponding character pairs: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`: Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting.
  - `"ja-JP-u-ca-japanese"`: Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.
  - `"en-GB-u-ca-islamic"`: use British English with the Islamic (Hijri) calendar, where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram, 1439.

- The `"t"` (transformed) extension indicates transformed content: for example, text that was translated from another locale. No `Intl` functionality currently considers the `"t"` extension. However, this extension sometimes contains a nested locale (with no extensions): for example, the transformed extension in `"de-t-en"` contains the locale identifier for English. If a nested locale is present, it must be a valid locale identifier. For example, because `"en-emodeng-emodeng"` is invalid (because it contains a duplicate `emodeng` variant subtag), `"de-t-en-emodeng-emodeng"` is also invalid.

Finally, a private-use extension sequence using the letter `"x"` may appear, followed by one or more one- to eight-letter or digit subtags separated by hyphens. This allows applications to encode information for their own private use, that will be ignored by all `Intl` operations.

### options argument

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string `"lookup"` or `"best fit"` and which selects one of the locale matching algorithms described below.

### Locale identification and negotiation

The list of locales specified by the `locales` argument, after Unicode extensions have been removed from them, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the `"lookup"` matcher follows the Lookup algorithm specified in [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4); the `"best fit"` matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected locale identifier had a Unicode extension sequence, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the locale identifier. For example, the `"co"` key (collation) is only supported by {{jsxref("Intl.Collator")}}, and its `"phonebk"` value is only supported for German.

## Static properties

- {{jsxref("Intl.Collator")}}
  - : Constructor for collators, which are objects that enable language-sensitive string comparison.
- {{jsxref("Intl.DateTimeFormat")}}
  - : Constructor for objects that enable language-sensitive date and time formatting.
- {{jsxref("Intl.DisplayNames")}}
  - : Constructor for objects that enable the consistent translation of language, region and script display names.
- {{jsxref("Intl.DurationFormat")}}
  - : Constructor for objects that enable locale-sensitive duration formatting.
- {{jsxref("Intl.ListFormat")}}
  - : Constructor for objects that enable language-sensitive list formatting.
- {{jsxref("Intl.Locale")}}
  - : Constructor for objects that represents a Unicode locale identifier.
- {{jsxref("Intl.NumberFormat")}}
  - : Constructor for objects that enable language-sensitive number formatting.
- {{jsxref("Intl.PluralRules")}}
  - : Constructor for objects that enable plural-sensitive formatting and language-specific rules for plurals.
- {{jsxref("Intl.RelativeTimeFormat")}}
  - : Constructor for objects that enable language-sensitive relative time formatting.
- {{jsxref("Intl.Segmenter")}}
  - : Constructor for objects that enable locale-sensitive text segmentation.
- `Intl[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Returns canonical locale names.
- {{jsxref("Intl.supportedValuesOf()")}}
  - : Returns a sorted array containing the supported unique calendar, collation, currency, numbering systems, or unit values supported by the implementation.

## Examples

### Formatting dates and numbers

You can use `Intl` to format dates and numbers in a form that's conventional for a specific language and region:

```js
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale,
    ).format(count)}`,
  );
}

log("en-US"); // 5/24/2012 26,254.39

log("de-DE"); // 24.5.2012 26.254,39
```

### Using the browser's preferred language

Instead of passing a hardcoded locale name to the `Intl` methods, you can use the user's preferred language provided by {{domxref("navigator.language")}}:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

Alternatively, the {{domxref("navigator.languages")}} property provides a sorted list of the user's preferred languages. This list can be passed directly to the `Intl` constructors to implement preference-based fallback selection of locales. The [locale negotiation](#locale_identification_and_negotiation) process is used to pick the most appropriate locale available:

```js
const count = 26254.39;

const formattedCount = new Intl.NumberFormat(navigator.languages).format(count);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Keyboard.getLayoutMap()")}}
- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- [The ECMAScript Internationalization API](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) by Norbert Lindenberg (2012)
