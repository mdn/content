---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Date
  - IANA Timezone Format
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toLocaleDateString
---
{{JSRef}}

The **`toLocaleDateString()`** method returns a string with a language sensitive representation of the date portion of the specified date in the user agent's timezone.

The `locales` and `options` arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function.
In older implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation dependent.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## Syntax

```js
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### Parameters

The `locales` and `options` arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used.
In implementations, which ignore the `locales` and `options` arguments, the locale used and the form of the string returned are entirely implementation dependent.

See the {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} constructor for details on these parameters and how to use them.

The default value for each date-time component property is {{jsxref("undefined")}}, but if the `weekday`, `year`, `month`, `day` properties are all {{jsxref("undefined")}}, then `year`, `month`, and `day` are assumed to be `"numeric"`.

### Return value

A string representing the date portion of the given {{jsxref("Global_Objects/Date", "Date")}} instance according to language-specific conventions.

## Performance

When formatting large numbers of dates, it is better to create an {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} object and use the function provided by its {{jsxref("DateTimeFormat.prototype.format", "format")}} property.

## Examples

### Using toLocaleDateString()

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleDateString());
// → "12/11/2012" if run in en-US locale with time zone America/Los_Angeles
```

### Checking for support for locales and options arguments

The `locales` and `options` arguments are not supported in all browsers yet.
To check whether an implementation supports them already, you can use the requirement that illegal language tags are rejected with a {{jsxref("RangeError")}} exception:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

### Using locales

This example shows some of the variations in localized date formats.
In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
console.log(date.toLocaleDateString('en-US'));
// → "12/19/2012"

// British English uses day-month-year order
console.log(date.toLocaleDateString('en-GB'));
// → "20/12/2012"

// Korean uses year-month-day order
console.log(date.toLocaleDateString('ko-KR'));
// → "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri
console.log(date.toLocaleDateString('fa-IR'));
// → "۱۳۹۱/۹/۳۰"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleDateString('ar-EG'));
// → "٢٠‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));
// → "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleDateString(['ban', 'id']));
// → "20/12/2012"
```

### Using options

The results provided by `toLocaleDateString()` can be customized using the `options` argument:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(date.toLocaleDateString('en-US', options));
// → "Thursday, December 20, 2012, UTC"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
