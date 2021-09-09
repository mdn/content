---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toLocaleTimeString
---
{{JSRef}}

The **`toLocaleTimeString()`** method returns a string with a
language-sensitive representation of the time portion of the date. The newer
`locales` and `options` arguments let applications specify the
language formatting conventions to use. These arguments can also customize the behavior of the
function.

More dated implementations ignore the `locales` and
`options` arguments. In these circumstances, the form of the string returned is
entirely implementation-dependent.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Syntax

```js
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Parameters

The `locales` and `options` arguments customize the behavior of
the function and let applications specify which language formatting conventions
should be used. In older implementations that ignore the `locales` and
`options` arguments, the `locales` and the form of the string returned will be
entirely implementation-dependent.

See the {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
constructor for details on these parameters and how to use them.

The default value for each date-time component property is {{jsxref("undefined")}}, but
if the `hour`, `minute`, `second` properties are all
{{jsxref("undefined")}}, then `hour`, `minute`, and
`second` are assumed to be `"numeric"`.

### Return value

A string representing the time portion of the given {{jsxref("Global_Objects/Date",
  "Date")}} instance according to language-specific conventions.

## Performance

When formatting large numbers of dates, it is better to create an
{{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} object and use the
function provided by its {{jsxref("DateTimeFormat.prototype.format", "format")}}
property.

## Examples

### Using toLocaleTimeString()

Basic use of this method without specifying a `locale` returns a formatted string in the default locale and
with default options.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Using locales

This example shows some of the variations in localized time formats. In order to get
the format of the language used in the user interface of your application, make sure to
specify that language (and possibly some fallback languages) using the
`locales` argument:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('en-US'));
// → "7:00:00 PM"

// British English uses 24-hour time without AM/PM
console.log(date.toLocaleTimeString('en-GB'));
// → "03:00:00"

// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('ko-KR'));
// → "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleTimeString('ar-EG'));
// → "٧:٠٠:٠٠ م"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(['ban', 'id']));
// → "11.00.00"
```

### Using options

The results provided by `toLocaleTimeString()` can be customized using the
`options` argument:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// an application may want to use UTC and make that visible
var options = { timeZone: 'UTC', timeZoneName: 'short' };
console.log(date.toLocaleTimeString('en-US', options));
// → "3:00:00 AM GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString('en-US', { hour12: false }));
// → "19:00:00"

// show only hours and minutes, use options with the default locale - use an empty array
console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
// → "20:01"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
