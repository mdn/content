---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
tags:
  - Class
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat
---
{{JSRef}}

The **`Intl.DateTimeFormat`** object enables language-sensitive date and time formatting.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Constructor

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Creates a new `Intl.DateTimeFormat` object.

## Static methods

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : Getter function that formats a date according to the locale and formatting options of this {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} object.
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : Returns an {{jsxref("Array")}} of objects representing the date string in parts that can be used for custom locale-aware formatting.
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : This method receives two [Dates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and formats the date range in the most concise way based on the locale and options provided when instantiating {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}}.
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : This method receives two [Dates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and returns an Array of objects containing the locale-specific tokens representing each part of the formatted date range.

## Examples

### Using DateTimeFormat

In basic use without specifying a locale, `DateTimeFormat` uses the default locale and default options.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// → "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Using locales

This example shows some of the variations in localized date and time formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Results below use the time zone of America/Los_Angeles (UTC-0800, Pacific Standard Time)

// US English uses month-day-year order
console.log(new Intl.DateTimeFormat('en-US').format(date));
// → "12/19/2012"

// British English uses day-month-year order
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// → "19/12/2012"

// Korean uses year-month-day order
console.log(new Intl.DateTimeFormat('ko-KR').format(date));
// → "2012. 12. 19."

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.DateTimeFormat('ar-EG').format(date));
// → "١٩‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese').format(date));
// → "24/12/19"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// → "19/12/2012"
```

### Using options

The date and time formats can be customized using the `options` argument:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// request a weekday along with a long date
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "Thursday, December 20, 2012, GMT"

// sometimes you want to be more precise
options = {
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Australia/Sydney',
  timeZoneName: 'short'
};
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00 pm AEDT"

// sometimes you want to be very precise
options.fractionalSecondDigits = 3; //number digits for fraction-of-seconds
console.log(new Intl.DateTimeFormat('en-AU', options).format(date));
// → "2:00:00.200 pm AEDT"

// sometimes even the US needs 24-hour time
options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: 'America/Los_Angeles'
};
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → "12/19/2012, 19:00:00"

// to specify options but use the browser's default locale, use 'default'
console.log(new Intl.DateTimeFormat('default', options).format(date));
// → "12/19/2012, 19:00:00"

// sometimes it's helpful to include the period of the day
options = {hour: "numeric", dayPeriod: "short"};
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
// → 10 at night
```

The used calendar and numbering formats can also be set independently via `options` arguments:

```js
const options = {calendar: 'chinese', numberingSystem: 'arab'};
const dateFormat = new Intl.DateTimeFormat('default', options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// → "chinese"

console.log(usedOptions.numberingSystem);
// → "arab"

console.log(usedOptions.timeZone);
// → "America/New_York" (the users default timezone)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
- [A polyfill of `Intl.DateTimeFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-datetimeformat/)
