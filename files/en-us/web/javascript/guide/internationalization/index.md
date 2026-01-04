---
title: Internationalization
slug: Web/JavaScript/Guide/Internationalization
page-type: guide
sidebar: jssidebar
---

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}

The {{jsxref("Intl")}} object is the namespace for the ECMAScript Internationalization API, which provides a wide range of locale- and culture-sensitive data and operations.

## Overview

The `Intl` object is very use-case driven. It provides a separate object for each use case that requires locale-specific logic. Currently, it provides the following functionalities:

- [Getting information about a locale](#locale_information) using {{jsxref("Intl.Locale")}}.
- [Formatting data](#formatting_data) using {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}}, and {{jsxref("Intl.RelativeTimeFormat")}}.
- [Collation](#collation) (i.e., comparing strings for sorting or searching) using {{jsxref("Intl.Collator")}}.
- [Selecting plural forms](#plural_rules) using {{jsxref("Intl.PluralRules")}}.
- [Segmenting text](#segmentation) into units such as words, sentences, or graphemes using {{jsxref("Intl.Segmenter")}}.
- [Getting the displayed name](#display_names) for currencies, languages, scripts, regions, and time zones using {{jsxref("Intl.DisplayNames")}}.

Most `Intl` APIs share a similar design ({{jsxref("Intl.Locale")}} is the only exception). You start by constructing an instance with the desired locale and options. This defines a set of rules for the desired operation (formatting, collation, segmentation, etc.). Then, when you call the method on the instance, such as `format()`, `compare()`, or `segment()`, the object applies the specified rule to the passed data.

```js
// 1. Construct a formatter object, specifying the locale and formatting options:
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. Use the `format` method of the formatter object to format a number:
console.log(price.format(5.259)); // $5.26
```

The general signature of the constructor is:

```js-nolint
new Intl.SomeObject(locales, options)
```

- `locales` {{optional_inline}}
  - : A string with a {{glossary("BCP 47 language tag")}} or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object containing properties that customize specific aspects of the operation, which is key to understanding how to use each `Intl` object.

## Locale information

Locales underlie all behaviors of `Intl`. A _locale_ is a set of conventions, represented in the `Intl` API by the {{jsxref("Intl.Locale")}} object. All `Intl` constructors that accept language tags also accept `Intl.Locale` objects.

Each locale is primarily defined by four things: a {{jsxref("Intl/Locale/language", "language")}}, a {{jsxref("Intl/Locale/script", "script")}}, a {{jsxref("Intl/Locale/region", "region")}}, and sometimes some {{jsxref("Intl/Locale/variants", "variants")}}. When connected together by `-` in that order, they form a {{glossary("BCP 47 language tag")}}.

- The language is the most important part of the locale and is mandatory. When given a single language, like `en` or `fr`, there are algorithms to infer the rest of the information (see {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}).
- However, you often want to specify the region as well, because conventions can differ drastically between regions that speak the same language. For example, the date format in the US is MM/DD/YYYY, whereas in the UK it is DD/MM/YYYY, so specifying `en-US` or `en-GB` is important.
- You can also specify a script. The script is the writing system, or the characters used to transcribe the language. In practice, the script is often unnecessary, because the language used in a certain region is only written in one script. However, there are exceptions such as the Serbian language, which can be written in both the Latin and Cyrillic scripts (`sr-Latn` and `sr-Cyrl`), or the Chinese language, which can be written in both the Simplified and Traditional scripts (`zh-Hans` and `zh-Hant`).
- The variants are rarely used. Usually, they denote different orthographies; for example, German has the `1901` and `1996` orthography variants, which are written as `de-1901` and `de-1996`.

```js
// These two are equivalent when passed to other Intl APIs
const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-Latn-US");

console.log(locale1.language, locale1.script, locale1.region); // "en", undefined, "US"
console.log(locale2.language, locale2.script, locale2.region); // "en", "Latn", "US"
```

A locale also contains a set of conventions used by that particular culture:

<table>
<thead><tr><th>Use case</th><th>Property</th><th>Description</th><th>Extension subtag</th></tr></thead>
<tbody>
<tr>
<td rowspan="2">Date/time formatting</td>
<td>{{jsxref("Intl/Locale/calendar", "calendar")}}</td>
<td>Used to group days into years, months, and weeks, and to assign names to them. For example, the <code>gregory</code> date "2022-01-01" becomes "28 Tevet 5782" in the <code>hebrew</code> calendar.</td>
<td><code>ca</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}</td>
<td>Decides if times are displayed in 12-hour or 24-hour format, and whether the smallest hour number is 0 or 1.</td>
<td><code>hc</code></td>
</tr>
<tr>
<td>Number formatting, including dates, times, durations, etc.</td>
<td>{{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}</td>
<td>Transforms numbers into a locale-specific notation. The regular <code>0123456789</code> system is called <code>latn</code> (Latin). Often, each script has a numbering system that is just a digit-by-digit translation, but some scripts have more than one numbering system, some may not typically write numbers in that script (for example, Chinese has its own <code>hanidec</code> numbering system, but most texts use the standard <code>latn</code> system), and others may require special conversion algorithms (for example, Roman numerals — <code>roman</code>).</td>
<td><code>nu</code></td>
</tr>
<tr>
<td rowspan="3">Collation</td>
<td>{{jsxref("Intl/Locale/collation", "collation")}}</td>
<td>Defines the generic collation algorithm. For example, if you use the German <code>phonebk</code> collation, then "ä" is treated as "ae", and will be sorted between "ad" and "af".</td>
<td><code>co</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/caseFirst", "caseFirst")}}</td>
<td>Decides whether uppercase or lowercase letters should be sorted first, or if casing is ignored.</td>
<td><code>kf</code></td>
</tr>
<tr>
<td>{{jsxref("Intl/Locale/numeric", "numeric")}}</td>
<td>Decides whether numbers are sorted as numbers or as strings. For example, if true, "10" will be sorted after "2".</td>
<td><code>kn</code></td>
</tr>
</tbody>
</table>

You can explicitly specify these properties when constructing the `Intl.Locale` or passing language tags to other `Intl` constructors. There are two ways to do this — append them to the language tag or specify them as options.

- To append them to the language tag, you first append the string `-u` (meaning "Unicode extension"), then the extension subtag as given above, then the value.
- To specify them as options, you just add the property name as given above, together with its value, to the `options` object.

Using `Intl.DateTimeFormat` as an example, both of the following lines create a formatter that formats dates in the Hebrew calendar:

```js
const df1 = new Intl.DateTimeFormat("en-US-u-ca-hebrew");
const df2 = new Intl.DateTimeFormat("en-US", { calendar: "hebrew" });
```

Unrecognized properties are ignored, so you can use the same syntax as above with `Intl.NumberFormat`, but it won't do anything different than just passing `en-US`, because number formatting doesn't use the `calendar` property.

It is tricky to get the default values of these locale conventions. `new Intl.Locale("en-US").calendar` returns `undefined`, because the `Locale` object only contains the information you passed to it. The default calendar is theoretically dependent on what API you are using the calendar with, so to get the default calendar of `en-US` as used by `Intl.DateTimeFormat`, you can use its {{jsxref("Intl/DateTimeFormat/resolvedOptions", "resolvedOptions()")}} method. The same goes for other properties.

```js
const locale = new Intl.Locale("en-US");
console.log(locale.calendar); // undefined; it's not provided
console.log(new Intl.DateTimeFormat(locale).resolvedOptions().calendar); // "gregory"
```

`Intl.Locale` objects do two things simultaneously: they represent a parsed BCP 47 language tag (as demonstrated above), and they provide information about that locale. All of its properties, like `calendar`, are extracted from the input only, without querying any data source about default values. On the other hand, it has a group of methods for querying real-world information about the locale. For example, the {{jsxref("Intl/Locale/getCalendars", "getCalendars()")}}, {{jsxref("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{jsxref("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, and {{jsxref("Intl/Locale/getCollations", "getCollations()")}} methods complement the `calendar`, `hourCycle`, `numberingSystem`, and `collation` properties, and each returns an array of preferred values for that property.

```js
const locale = new Intl.Locale("ar-EG");
console.log(locale.getCalendars()); // ['gregory', 'coptic', 'islamic', 'islamic-civil', 'islamic-tbla']
```

`Intl.Locale` instances also contain other methods that expose useful information, such as {{jsxref("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{jsxref("Intl/Locale/getTimeZones", "getTimeZones()")}}, and {{jsxref("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.

## Figuring out the locale

A shared concern for internationalization is: how do I know what locale to use?

The most obvious answer is "what the user prefers." Browsers expose the user's language preferences through the {{domxref("Navigator/languages", "navigator.languages")}} property. This is an array of language identifiers that can be directly passed to the formatter constructor—more on this later. The user can configure this list in their browser settings. You can also pass an empty array or `undefined`, which both cause the browser's default locale to be used.

```js
const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));

const numberFormatter2 = new Intl.NumberFormat([]);
```

However, this may not always provide the most desirable result. Strings formatted by `Intl` formatters represent a tiny fraction of text displayed on your site; most localized content is provided by you, the site developer. For example, suppose your site is only offered in two languages: English and French. If a Japanese user visits your site and expects to use your site in English, they will be baffled when they see the English text interleaved with numbers and dates in Japanese!

Usually, you don't want to use the browser's default language. Rather, you want to use the same language that the rest of your site is offered in. Suppose your site has a language switcher that stores the user's choice somewhere — you could directly use that.

```js
// Suppose this can be changed by some site-wide control
const userSettings = {
  locale: "en-US",
  colorMode: "dark",
};
const numberFormatter = new Intl.NumberFormat(userSettings.locale);
console.log(numberFormatter.format(1234567.89));
```

If your site has a backend that dynamically selects the language based on the user's {{httpheader("Accept-Language")}} header and sends back different HTML based on that, you could also use the HTML element's {{domxref("HTMLElement.lang")}} property: `new Intl.NumberFormat(document.documentElement.lang)`.

If your site is only offered in one language, you could also hardcode the locale in your code: `new Intl.NumberFormat("en-US")`.

As previously mentioned, you can also pass an array of locales to the constructor, representing a list of fallback choices. The first example using `navigator.languages` is an example of this: if the first user-configured locale is not supported for the particular operation, the next one is tried, and so on, until we find a requested locale for which the runtime has data. You can do this manually as well. In the example below, we specify a list of locales in decreasing order of specificity which all represent languages likely to be understood by a Hong Kong Chinese speaker, so the formatter picks the most specific one that it supports.

```js
const numberFormatter = new Intl.NumberFormat([
  "yue-Hant",
  "zh-Hant-HK",
  "zh-Hant",
  "zh",
]);
```

There is no API for listing all supported locales, but there are a few methods for handling the locale list:

- {{jsxref("Intl.getCanonicalLocales()")}}: This function takes a list of locale identifiers and returns a list of canonicalized locale identifiers. This is useful for understanding the canonicalization process for each `Intl` constructor.
- The `supportedLocalesOf()` static method on each `Intl` object (like {{jsxref("Intl.DateTimeFormat.supportedLocalesOf()")}}): This method takes the same arguments as the constructor (`locales` and `options`) and returns a subset of the given locale tags that match the given data. This is useful for understanding which locales are supported by the runtime for a particular operation, for example, to show a language switcher containing only the supported languages.

## Understanding the return value

The second shared concern for all objects is "what does the method return?" This is a hard question to answer beyond the structure or type of the returned value because there's no normative specification saying what _exactly_ should be returned. Most of the time, the result of a method is consistent. However, the output may vary between implementations, even within the same locale — output variations are by design and allowed by the specification. It may also not be what you expect. For example, the string returned by `format()` may use non-breaking spaces or be surrounded by bidirectional control characters. You should not compare the results of any `Intl` method to hardcoded constants; they should only be displayed to users.

Of course, this answer seems unsatisfactory, because most developers do wish to control what the output looks like—at least, you don't want your user to be confused by nonsensical output. Here are some guidelines if you do want to conduct testing, whether automated or manual:

- Test all locales that your user may use. This is easier if you have a fixed set of supported locales (for example via a language switcher). If you are using whatever the user prefers, you may pick a few common ones for your users, but bear in mind that what the user sees could vary. You can usually mock user preference via the test runner's configuration or mocking the `Intl` constructors.
- Test on multiple JavaScript engines. The `Intl` API is directly implemented by the JavaScript engine, so for example you should expect Node.js and Chrome (which both use V8) to have the same output, while Firefox (which uses SpiderMonkey) may have a different output. Although all engines likely use the CLDR data, they usually postprocess it in different ways. Some browser build settings (for reducing the install size, for example) may also affect what locales and options are supported.
- Don't assume the output. This means you shouldn't write the output by hand, such as `expect(result).toBe("foo")`. Instead, use snapshot testing or copy the string value from the output of a test run.

## Formatting data

A major use case of `Intl` is to output locale-specific texts representing structured data. This is similar to translation software, but instead of letting you translate arbitrary text, it takes data such as dates, numbers, and lists, and formats them according to locale-specific rules.

The {{jsxref("Intl.DateTimeFormat")}}, {{jsxref("Intl.DurationFormat")}}, {{jsxref("Intl.ListFormat")}}, {{jsxref("Intl.NumberFormat")}}, and {{jsxref("Intl.RelativeTimeFormat")}} objects each format one kind of data. Each instance provides two methods:

- `format()`: Takes a piece of data and returns a string using the formatting rule as determined by the locale and options.
- `formatToParts()`: Takes the same data and returns the same string, but broken down into parts, each part being an object with a `type` and a `value`. This is useful for more advanced use cases, such as interleaving the formatted text with other texts.

For example, here's a typical use of the {{jsxref("Intl.NumberFormat")}} object:

```js
// 1. Construct a formatter object, specifying the locale and formatting options:
const price = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// 2. Use the `format` method of the formatter object to format a number:
console.log(price.format(5.259)); // $5.26

// Or, use the `formatToParts` method to get the formatted number
// broken down into parts:
console.table(price.formatToParts(5.259));
// |   | type       | value |
// | 0 | "currency" | "$"   |
// | 1 | "integer"  | "5"   |
// | 2 | "decimal"  | "."   |
// | 3 | "fraction" | "26"  |
```

You don't always have to construct a formatter object in order to format strings. For casual use, you can also directly call the `toLocaleString()` method on the data, passing the locale and options as arguments. The `toLocaleString()` method is implemented by {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}, {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}, {{jsxref("Number.prototype.toLocaleString()")}}, and so on. Read the documentation for the data you are formatting to see if it supports `toLocaleString()`, and what formatter options it corresponds to.

```js
console.log(
  (5.259).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }),
); // $5.26
```

Note that `toLocaleString()` is potentially less efficient than using a formatter object, because every time `toLocaleString` is called, it has to perform a search in a big database of localization strings. When the method is called many times with the same arguments, it is better to create a formatter object and use its `format()` method, because a formatter object remembers the arguments passed to it and may decide to cache a slice of the database, so future `format` calls can search for localization strings within a more constrained context.

### Date and time formatting

{{jsxref("Intl.DateTimeFormat")}} formats dates and times, as well as ranges of dates and times. The `DateTimeFormat` object takes date/time inputs in one of the following forms: {{jsxref("Date")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, or {{jsxref("Temporal.PlainMonthDay")}}.

> [!NOTE]
> You can't pass a {{jsxref("Temporal.ZonedDateTime")}} object directly, because the time zone is already fixed in the object. You should use {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} or convert it to a {{jsxref("Temporal.PlainDateTime")}} object first.

Common use cases of localized date and time formatting are as follows:

- Output the same date and time in another calendar system, such as the Islamic, Hebrew, or Chinese calendar.
- Output the same real-world time (instant) but in another time zone.
- Selectively output certain components of the date and time, such as only the year and month, and the specific representation of them (such as "Thursday" or "Thu").
- Output the date according to locale-specific conventions, such as MM/DD/YYYY as in the U.S., DD/MM/YYYY as in the U.K., or YYYY/MM/DD as in Japan.
- Output the time according to locale-specific conventions, such as 12-hour or 24-hour clock.

To decide what the formatted string looks like, you first choose the calendar (which affects the year, month, week, and day calculation) and time zone (which affects the exact time as well as possibly the date). This is done using the aforementioned `calendar` option (or the `-ca-` extension key in the locale identifier), and the `timeZone` option.

- `Date` objects represent a unique instant in the user's time zone and in the ISO 8601 calendar (as reported by methods like {{jsxref("Date.prototype.getHours()")}} and {{jsxref("Date.prototype.getMonth()")}}). They are converted to the given `calendar` and `timeZone` by preserving the instant, so the date and time components may change.
- The various {{jsxref("Temporal")}} objects already have a calendar built-in, so the `calendar` option must be consistent with the calendar of the object—unless the date's calendar is `"iso8601"`, in which case it is converted to the requested `calendar`. These objects don't have a time zone, so they are directly displayed in the given `timeZone` without conversion.

Here we demonstrate how the combination of `calendar` and `timeZone` configurations result in different representations of the same instant.

```js
// Assume that the local time zone is UTC
const targetDate = new Date(2022, 0, 1); // 2022-01-01 midnight in the local time zone
const results = [];

for (const calendar of ["gregory", "hebrew"]) {
  for (const timeZone of ["America/New_York", "Asia/Tokyo"]) {
    const df = new Intl.DateTimeFormat("en-US", {
      calendar,
      timeZone,
      // More on these later
      dateStyle: "full",
      timeStyle: "full",
    });
    results.push({ calendar, timeZone, output: df.format(targetDate) });
  }
}

console.table(results);
```

The output looks like this:

| calendar  | timeZone           | output                                                          |
| --------- | ------------------ | --------------------------------------------------------------- |
| 'gregory' | 'America/New_York' | 'Friday, December 31, 2021 at 7:00:00 PM Eastern Standard Time' |
| 'gregory' | 'Asia/Tokyo'       | 'Saturday, January 1, 2022 at 9:00:00 AM Japan Standard Time'   |
| 'hebrew'  | 'America/New_York' | 'Friday, 27 Tevet 5782 at 7:00:00 PM Eastern Standard Time'     |
| 'hebrew'  | 'Asia/Tokyo'       | 'Saturday, 28 Tevet 5782 at 9:00:00 AM Japan Standard Time'     |

A date/time is comprised of the following components: `weekday`, `era`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, and `timeZoneName`. Your next decision is what components to include in the output, and what forms they should take. You have two choices:

- You can manually configure each component, using options with the same name as the component. Only the components you specify will be included in the output, with the specified form.
- You can use the shortcuts `dateStyle` and `timeStyle`, which are predefined sets of components. They expand to a set of component options depending on the locale.

You should pick one of these two methods, because they are mutually exclusive. Using both methods simultaneously will result in an error.

Underlyingly, after requesting a combination of components, the `DateTimeFormat` object looks for a "template" that matches the requested components, so it only needs to fill in the values one by one. Not every combination of components has a predefined template. `DateTimeFormat` has a `formatMatcher` option that decides how to negotiate, by making components longer or shorter than requested, or by omitting or adding components. It gets quite technical, so you should read the [`Intl.DateTimeFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) reference to better understand how it handles this.

Here, we demonstrate a few common ways to format the components:

```js
const df1 = new Intl.DateTimeFormat("en-US", {
  // Include all components (usually)
  dateStyle: "full",
  timeStyle: "full",
});

const df2 = new Intl.DateTimeFormat("en-US", {
  // Display the calendar date
  era: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const df3 = new Intl.DateTimeFormat("en-US", {
  // Display a time like on a digital clock
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "shortOffset",
});

const targetDate = new Date(2022, 0, 1, 12, 34, 56); // 2022-01-01 12:34:56 in the local time zone
console.log(df1.format(targetDate));
// Saturday, January 1, 2022 at 12:34:56 PM Coordinated Universal Time
// January 1, 2022 AD
// 12:34:56 PM GMT
```

There are other customization options. For example, you can use the `hourCycle` option to display the time in 12-hour or 24-hour and show midnight/noon as 12:00 or 0:00. You can also use the `numberingSystem` option to display any numbers in another numbering system.

Apart from `format()`, there's a second important method, {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}, which formats a range of dates or times. It takes two date-times of the same type, formats each one, joins them with a range separator (like the en-dash), and deduplicates the common parts.

```js
const springBreak = {
  start: new Date(2023, 2, 10),
  end: new Date(2023, 2, 26),
};

const df = new Intl.DateTimeFormat("en-US", { dateStyle: "long" });
console.log(df.formatRange(springBreak.start, springBreak.end));
// March 10 – 26, 2023
```

### Number formatting

Number formatting is done with the {{jsxref("Intl.NumberFormat")}} object. The `NumberFormat` object accepts inputs in the form of numbers, strings, or `BigInt` values. Passing a string or `BigInt` instead of a number allows you to format numbers that are too large or too small to be represented precisely as a JavaScript number.

Common use cases of localized number formatting are as follows:

- Output the number in another numbering system (script), such as Chinese, Arabic, or Roman.
- Output the number with locale-specific conventions, such as the decimal symbol ("." in English, but "," in many European cultures), or digit grouping (3 digits in English, but may be 4 or 2 in other cultures, and may use ",", " ", or ".").
- Output the number with exponential notation such as "3.7 million" or "2 thousand".
- Output the number as a currency, applying specific currency symbols and rounding rules. For example, monetary values less than one cent in the U.S. or less than one yen in Japan may not be meaningful to display.
- Output the number as a percentage, applying locale-specific conversion and formatting rules.
- Output the number with units, such as "meters" or "liters", with translated unit names.

To decide what the formatted string looks like, you first choose the numbering system (which affects the characters used for the digits). The purpose of a numbering system is already discussed in [locale information](#locale_information). Another option you need to decide is the `style`, which sets the context for what the number represents, and potentially affects other options' default values. It is one of `"decimal"`, `"percent"`, `"currency"`, or `"unit"`. If you want to format currencies, then you also need to provide the `currency` option. If you want to format units, then you also need to provide the `unit` option.

```js
const results = [];
for (const options of [
  { style: "decimal" }, // Format the number as a dimensionless decimal
  { style: "percent" }, // Format the number as a percentage; it is multiplied by 100
  { style: "currency", currency: "USD" }, // Format the number as a US dollar amount
  { style: "unit", unit: "meter" }, // Format the number as a length in meters
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({ style: options.style, output: nf.format(1234567.89) });
}
console.table(results);
```

The output looks like:

| style      | output           |
| ---------- | ---------------- |
| 'decimal'  | '1,234,567.89'   |
| 'percent'  | '123,456,789%'   |
| 'currency' | '$1,234,567.89'  |
| 'unit'     | '1,234,567.89 m' |

The next group of options all specify what the numeric part should look like. First, you may want to represent extremely large values in a more readable way. You can set the `notation` option to `"scientific"` or `"engineering"`, which both use the `1.23e+6` notation. The difference is that the latter uses multiples of 3 for the exponent, keeping the [mantissa](https://en.wikipedia.org/wiki/Scientific_notation) (the part before the `e` symbol) between 1 and 1000, while the former can use any integer for the exponent, keeping the mantissa between 1 and 10. You can also set `notation` to `"compact"` to use a more human-readable notation.

```js
const results = [];
for (const options of [
  { notation: "scientific" },
  { notation: "engineering" },
  { notation: "compact", compactDisplay: "short" }, // "short" is default
  { notation: "compact", compactDisplay: "long" },
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({
    notation: options.compactDisplay
      ? `${options.notation}-${options.compactDisplay}`
      : options.notation,
    output: nf.format(12000),
  });
}
console.table(results);
```

The output looks like:

| notation        | output        |
| --------------- | ------------- |
| 'scientific'    | '1.2E4'       |
| 'engineering'   | '12E3'        |
| 'compact-short' | '12K'         |
| 'compact-long'  | '12 thousand' |

Then, you may want to round the number (if you specified `notation`, then just the mantissa part), so you don't display a number that's too long. These are the digit options, which include:

- `minimumIntegerDigits`
- `minimumFractionDigits`
- `maximumFractionDigits`
- `minimumSignificantDigits`
- `maximumSignificantDigits`
- `roundingPriority`
- `roundingIncrement`
- `roundingMode`

The exact interaction of these options is quite complex and not worth covering here. You should read the [digit options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options) reference for more detail. Nevertheless, the general idea is straightforward: we first find the number of decimal places we want to keep, then we round excess decimal places off, either rounding down or up, depending on the value of the last digit.

```js
const results = [];
for (const options of [
  { minimumFractionDigits: 4, maximumFractionDigits: 4 },
  { minimumSignificantDigits: 4, maximumSignificantDigits: 4 },
  { minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" },
  {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    roundingMode: "floor",
    roundingIncrement: 10,
  },
]) {
  const nf = new Intl.NumberFormat("en-US", options);
  results.push({
    options,
    output: nf.format(1234.56789),
  });
}
console.table(results);
```

The output looks like this:

| options                                                                                                | output       |
| ------------------------------------------------------------------------------------------------------ | ------------ |
| `{ minimumFractionDigits: 4, maximumFractionDigits: 4 }`                                               | '1,234.5679' |
| `{ minimumSignificantDigits: 4, maximumSignificantDigits: 4 }`                                         | '1,235'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor" }`                        | '1,234'      |
| `{ minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: "floor", roundingIncrement: 10 }` | '1,230'      |

There are other customization options. For example, you can use the `useGrouping` and `signDisplay` options to customize whether and how to show the group separators (like "," in "1,234,567.89") and the sign. However, note that the characters used for the group separator, decimal point, and sign are locale-specific, so you can't customize them directly.

Apart from `format()`, there's a second important method, {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}, which formats a range of numbers. It takes two number representations, formats each one, joins them with a range separator (like the en-dash), and potentially deduplicates the common parts.

```js
const heightRange = {
  min: 1.63,
  max: 1.95,
};

const nf = new Intl.NumberFormat("en-US", { style: "unit", unit: "meter" });
console.log(nf.formatRange(heightRange.min, heightRange.max));
// 1.63–1.95 m
```

### List formatting

You may already have written code that does this:

```js example-bad
const fruits = ["apple", "banana", "cherry"];
console.log(`I like ${fruits.join(", ")}.`);
// I like apple, banana, cherry.
```

This code is not internationalized. In some languages, the list separator is not a comma. In _most_ languages (including English), you need a conjunction before the last item. But even just adding an "and" manually doesn't make it correct among all English speakers, because there's the debate of [Oxford commas](https://en.wikipedia.org/wiki/Serial_comma) in English: "apple, banana, and cherry" vs. "apple, banana and cherry".

The {{jsxref("Intl.ListFormat")}} object solves this problem. It takes an array of strings and joins them in a locale-specific way such that the result represents a conjunction (and), disjunction (or), or a list of units.

```js
const fruits = ["apple", "banana", "cherry"];
const lf = new Intl.ListFormat("en-US", { style: "long", type: "conjunction" });
console.log(`I like ${lf.format(fruits)}.`);
// I like apple, banana, and cherry.

const lf = new Intl.ListFormat("en-US", { style: "long", type: "disjunction" });
console.log(`I can give you ${lf.format(fruits)}.`);
// I can give you apple, banana, or cherry.
```

Check {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}} for more examples and options.

### Relative time formatting

{{jsxref("Intl.RelativeTimeFormat")}} formats a time difference. The `RelativeTimeFormat` object takes relative times in the form of two arguments: a number (with any sign) and a time unit, such as `"day"`, `"hour"`, or `"minute"`.

It does several things at once:

- It localizes and pluralizes the time unit, such as "1 day" vs. "2 days", like in number formatting.
- It chooses the appropriate phrase for past and future times, such as "in 1 day" vs. "1 day ago".
- It may select a special phrase for some time units, such as "1 day ago" vs. "yesterday".

```js
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
console.log(rtf.format(1, "day")); // tomorrow
console.log(rtf.format(2, "day")); // in 2 days
console.log(rtf.format(-1, "hour")); // 1 hour ago
```

Check {{jsxref("Intl/RelativeTimeFormat/RelativeTimeFormat", "Intl.RelativeTimeFormat()")}} for more examples and options.

### Duration formatting

{{jsxref("Intl.DurationFormat")}} provides duration formatting, such as "3 hours, 4 minutes, 5 seconds". It is not a primitive operation with its own formatter: it uses {{jsxref("Intl.NumberFormat")}} and {{jsxref("Intl.ListFormat")}} internally to format each duration component, then joins them with a list separator. The `DurationFormat` object takes durations in the form of a {{jsxref("Temporal.Duration")}} object, or a plain object with the same properties.

Apart from customizing the numbering system, the duration formatting options decides whether or not to show each component, and how long they should be.

```js
console.log(
  new Intl.DurationFormat("en-US", {
    style: "long",
  }).format({ hours: 3, minutes: 4, seconds: 5 }),
);
// 3 hours, 4 minutes, and 5 seconds
```

Check {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}} for more examples and options.

## Collation

The {{jsxref("Intl.Collator")}} object is useful for comparing and sorting strings. It takes two strings and returns a number indicating their relative order, in the same way as the `compareFn` argument of the {{jsxref("Array.prototype.sort")}} method.

There are many reasons why you should not use JavaScript operators like `===` or `>` to compare user-facing strings:

- Irrelevant orthographic variants: For example, in English, "naïve" and "naive" are just alternative spellings of the same word and should be treated as equal.
- Ignoring case: Often, you want to ignore case when comparing strings. For example, "apple" and "Apple" should be treated as equal.
- Unicode code point order doesn't make sense: Comparison operators like `>` compare by Unicode code point order, which is not the same as the order of characters in a dictionary. For example, "ï" comes after "z" in code point order, but you would want it to be ordered next to "i" in a dictionary.
- Unicode normalization: The same character may have multiple representations in Unicode. For example, "ñ" can be represented as a single character or as "n" followed by a combining tilde. (See {{jsxref("String.prototype.normalize()")}}.) These should be treated as equal.
- Number comparison: Numbers in strings should be compared as numbers, not as strings. For example, you would want "test-10" to come after "test-2".

There are two distinct use cases for collation: **sorting** and **searching**. Sorting is when you have a list of strings and you want to order them according to some rule. Searching is when you have a list of strings and you want to find a string that matches a query. When searching, you should only pay attention to whether the comparison result is zero (equal) or not, not the sign of the result.

There are many different ways to sort, even within the same locale. For example, there are two different sort orders in German, _phonebook_ and _dictionary_. Phonebook sort emphasizes sound — as if "ä", "ö", and so on were expanded to "ae", "oe", and so on before sorting.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare));
// ['Hochberg', 'Hönigswald', 'Holzman']
```

Some German words conjugate with extra umlauts, so in dictionaries it's sensible to order ignoring umlauts (except when ordering words differing _only_ by umlauts: _schon_ before _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

## Plural rules

The {{jsxref("Intl.PluralRules")}} object is useful for selecting the correct plural form of a word. It doesn't automatically pluralize words for you (for example, you can't pass it "apple" and expect "apples" back), but it tells you which plural form to use based on a number. You may already be doing this:

```js
function formatMessage(n) {
  return `You have ${n} ${n === 1 ? "apple" : "apples"}.`;
}
```

But this is hard to generalize across languages, especially those with many plural forms. You can see {{jsxref("Intl.PluralRules")}} for a general introduction to plural rules. Here, we just demonstrate a few common use cases.

```js
const prCard = new Intl.PluralRules("en-US");
const prOrd = new Intl.PluralRules("en-US", { type: "ordinal" });

const englishOrdinalSuffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

const catPlural = {
  one: "cat",
  other: "cats",
};

function formatMessage(n1, n2) {
  return `The ${n1}${englishOrdinalSuffixes[prOrd.select(n1)]} U.S. president had ${n2} ${catPlural[prCard.select(n2)]}.`;
}

console.log(formatMessage(42, 1)); // The 42nd U.S. president had 1 cat.
console.log(formatMessage(45, 0)); // The 45th U.S. president had 0 cats.
```

## Segmentation

The {{jsxref("Intl.Segmenter")}} object is useful for breaking a string into segments. Without `Intl`, you are already able to split a string by [UTF-16 code units and Unicode code points](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters):

```js
const str = "🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷";
console.log(str.split(""));
// Array(20) ['\uD83C', '\uDDFA', '\uD83C', ...]
console.log([...str]);
// Array(10) ['🇺', '🇸', '🇨', '🇳', '🇷', '🇺', '🇬', '🇧', '🇫', '🇷']
```

But as you can see, Unicode code points are not the same as what human users perceive as discrete characters. This often happens with emojis, where a single emoji can be represented by multiple code points. When the user interacts with text, a grapheme is the smallest unit of text they can manipulate, such as delete or select. The `Segmenter` object enables grapheme-level segmentation, which is useful for counting characters, measuring text width, and so on. It takes a string and returns an iterable [segments](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) object, each element of which has a `segment` property representing the text of the segment.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
console.log([...segmenter.segment("🇺🇸🇨🇳🇷🇺🇬🇧🇫🇷")].map((s) => s.segment));
// ['🇺🇸', '🇨🇳', '🇷🇺', '🇬🇧', '🇫🇷']
```

The segmenter can also do higher-level segmentation, including word-level and sentence-level splitting. These use cases are necessarily language-specific. For example, the following is a very poor implementation of word-counting:

```js example-bad
const wordCount = (str) => str.split(/\s+/).length;
console.log(wordCount("Hello, world!")); // 2
```

There are several problems with this: not all languages use spaces to separate words, not all spaces are word-separating, and not all words are separated by spaces. To solve this, use `Segmenter` with `granularity: "word"`. The result is the input string, split into segments of words and non-words. If you are counting words, you should filter out the non-words by checking each segment's `isWordLike` property.

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "word" });
const str = "It can even split non-space-separated words";
console.table([...segmenter.segment(str)]);
// ┌─────────────┬───────┬────────────┐
// │ segment     │ index │ isWordLike │
// ├─────────────┼───────┼────────────┤
// │ 'It'        │ 0     │ true       │
// │ ' '         │ 2     │ false      │
// │ 'can'       │ 3     │ true       │
// │ ' '         │ 6     │ false      │
// │ 'even'      │ 7     │ true       │
// │ ' '         │ 11    │ false      │
// │ 'split'     │ 12    │ true       │
// │ ' '         │ 17    │ false      │
// │ 'non'       │ 18    │ true       │
// │ '-'         │ 21    │ false      │
// │ 'space'     │ 22    │ true       │
// │ '-'         │ 27    │ false      │
// │ 'separated' │ 28    │ true       │
// │ ' '         │ 37    │ false      │
// │ 'words'     │ 38    │ true       │
// └─────────────┴───────┴────────────┘

console.log(
  [...segmenter.segment(str)].filter((s) => s.isWordLike).map((s) => s.segment),
);
// ['It', 'can', 'even', 'split', 'non', 'space', 'separated', 'words']
```

Word segmentation works for character-based languages too. For example, in Chinese, several characters can represent a single word, but there's no space between them. The segmenter implements the same behavior as the browser's built-in word segmentation, triggered by double-clicking a word.

```js
const segmenter = new Intl.Segmenter("zh-Hans", { granularity: "word" });
console.log([...segmenter.segment("我是这篇文档的作者")].map((s) => s.segment));
// ['我是', '这', '篇', '文', '档', '的', '作者']
```

Sentence segmentation is similarly complex. For example, in English, there are many punctuation marks that could mark the end of a sentence (".", "!", "?", and so on).

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "sentence" });
console.log(
  [...segmenter.segment("I ate a sandwich. Then I went to bed.")].map(
    (s) => s.segment,
  ),
);
// ['I ate a sandwich. ', 'Then I went to bed.']
```

Note that the segmenter doesn't remove any characters. It just splits the string into segments, each of which is a sentence. You can then remove the punctuation marks if you want. Also, the current implementation of the segmenter doesn't support sentence segmentation suppressions (preventing sentence breaks after periods like "Mr." or "Approx."), but there's ongoing work to support this.

## Display names

After introducing so many options and behaviors, you may wonder how to present them to the user. `Intl` comes with two useful APIs for building user interfaces: {{jsxref("Intl.supportedValuesOf()")}} and {{jsxref("Intl.DisplayNames")}}.

The {{jsxref("Intl.supportedValuesOf()")}} function returns an array of supported values for a given option. For example, you can use it to populate a dropdown list of supported calendars, from which users can select to display dates.

```js
const supportedCal = Intl.supportedValuesOf("calendar");
console.log(supportedCal);
// ['buddhist', 'chinese', 'coptic', 'dangi', ...]
```

But often, these identifiers are not user-friendly. For example, you may want to show the calendars in the user's language, or unabbreviate them. The {{jsxref("Intl.DisplayNames")}} object is useful for this. It's like a formatter, but it's not template-based. Instead, it is a direct mapping from language-agnostic identifiers to localized names. It supports formatting languages, regions, scripts (the three subfields of a BCP 47 language tag), currency, calendar, and date-time fields.

Try the demo below:

```html live-sample___display_names
<select id="lang"></select>
<select id="calendar"></select>
<output id="output"></output>
```

```css hidden live-sample___display_names
output {
  display: block;
  margin: 1em;
  font-size: x-large;
}

rt {
  font-weight: bold;
}

ruby {
  border-bottom: 1px dotted;
  ruby-position: under;
  ruby-align: center;
}
```

```js live-sample___display_names
const langSelect = document.getElementById("lang");
const calSelect = document.getElementById("calendar");
const fieldset = document.querySelector("fieldset");
const output = document.getElementById("output");

// A few examples
const langs = [
  "en-US",
  "zh-Hans-CN",
  "ja-JP",
  "ar-EG",
  "ru-RU",
  "es-ES",
  "fr-FR",
  "de-DE",
  "hi-IN",
  "pt-BR",
  "bn-BD",
  "he-IL",
];
const calendars = Intl.supportedValuesOf("calendar");

for (const lang of langs) {
  const option = document.createElement("option");
  option.value = lang;
  option.textContent = new Intl.DisplayNames(lang, { type: "language" }).of(
    lang,
  );
  langSelect.appendChild(option);
}

function renderCalSelect() {
  const lang = langSelect.value;
  calSelect.innerHTML = "";
  const dn = new Intl.DisplayNames(lang, { type: "calendar" });
  const preferredCalendars = new Intl.Locale(lang).getCalendars?.() ?? [
    "gregory",
  ];
  for (const cal of [
    ...preferredCalendars,
    ...calendars.filter((c) => !preferredCalendars.includes(c)),
  ]) {
    const option = document.createElement("option");
    option.value = cal;
    option.textContent = dn.of(cal);
    calSelect.appendChild(option);
  }
}

function renderFieldInputs() {
  const lang = langSelect.value;
  fieldset.querySelectorAll("label").forEach((label) => label.remove());
  const dn = new Intl.DisplayNames(lang, { type: "dateTimeField" });
  for (const field of fields) {
    const label = document.createElement("label");
    label.textContent = dn.of(field);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = field;
    label.appendChild(input);
    fieldset.appendChild(label);
  }
}

function renderTime() {
  const lang = langSelect.value;
  const cal = calSelect.value;
  const df = new Intl.DateTimeFormat(lang, {
    calendar: cal,
    dateStyle: "full",
    timeStyle: "full",
  });
  const now = new Date();
  const dn = new Intl.DisplayNames(lang, { type: "dateTimeField" });
  output.innerHTML = "";
  for (const component of df.formatToParts(now)) {
    const text = document.createElement("span");
    text.textContent = component.value;
    if (
      ![
        "era",
        "year",
        "quarter",
        "month",
        "weekOfYear",
        "weekday",
        "day",
        "dayPeriod",
        "hour",
        "minute",
        "second",
        "timeZoneName",
      ].includes(component.type)
    ) {
      output.appendChild(text);
      continue;
    }
    const title = dn.of(component.type);
    const field = document.createElement("ruby");
    field.appendChild(text);
    const rt = document.createElement("rt");
    rt.textContent = title;
    field.appendChild(rt);
    output.appendChild(field);
  }
}

renderCalSelect();
renderTime();
langSelect.addEventListener("change", renderCalSelect);
langSelect.addEventListener("change", renderTime);
calSelect.addEventListener("change", renderTime);
setInterval(renderTime, 500);
```

{{EmbedLiveSample("display_names", "", 300)}}

{{PreviousNext("Web/JavaScript/Guide/Resource_management", "Web/JavaScript/Guide/Modules")}}
