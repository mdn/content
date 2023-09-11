---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toLocaleTimeString
---

{{JSRef}}

The **`toLocaleTimeString()`** method of {{jsxref("Date")}} instances returns a string with a language-sensitive representation of the time portion of the date. In implementations with [`Intl.DateTimeFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) support, this method simply calls `Intl.DateTimeFormat`.

When formatting large numbers of dates, it is better to create an {{jsxref("Intl.DateTimeFormat")}} object and use its {{jsxref("Intl/DateTimeFormat/format", "format()")}} method.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Syntax

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Parameters

The `locales` and `options` arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used.

In implementations that support the [`Intl.DateTimeFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), these parameters correspond exactly to the [`Intl.DateTimeFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) constructor's parameters. Implementations without `Intl.DateTimeFormat` support are asked to ignore both parameters, making the locale used and the form of the string returned entirely implementation-dependent.

- `locales` {{optional_inline}}

  - : A string with a BCP 47 language tag, or an array of such strings. Corresponds to the [`locales`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) parameter of the `Intl.DateTimeFormat()` constructor.

    In implementations without `Intl.DateTimeFormat` support, this parameter is ignored and the host's locale is usually used.

- `options` {{optional_inline}}

  - : An object adjusting the output format. Corresponds to the [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) parameter of the `Intl.DateTimeFormat()` constructor. If `dayPeriod`, `hour`, `minute`, `second`, and `fractionalSecondDigits` are all undefined, then `hour`, `minute`, `second` will be set to `"numeric"`.

    In implementations without `Intl.DateTimeFormat` support, this parameter is ignored.

See the [`Intl.DateTimeFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) for details on these parameters and how to use them.

### Return value

A string representing the time portion of the given {{jsxref("Global_Objects/Date", "Date")}} instance according to language-specific conventions.

In implementations with `Intl.DateTimeFormat`, this is equivalent to `new Intl.DateTimeFormat(locales, options).format(date)`, where `options` has been normalized as described above.

## Examples

### Using toLocaleTimeString()

Basic use of this method without specifying a `locale` returns a formatted string in the default locale and
with default options.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Checking for support for locales and options parameters

The `locales` and `options` parameters may not be supported in all implementations, because support for the internationalization API is optional, and some systems may not have the necessary data. For implementations without internationalization support, `toLocaleTimeString()` always uses the system's locale, which may not be what you want. Because any implementation that supports the `locales` and `options` parameters must support the {{jsxref("Intl")}} API, you can check the existence of the latter for support:

```js
function toLocaleTimeStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Using locales

This example shows some of the variations in localized time formats. In order to get
the format of the language used in the user interface of your application, make sure to
specify that language (and possibly some fallback languages) using the
`locales` argument:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString("en-US"));
// "7:00:00 PM"

// British English uses 24-hour time without AM/PM
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleTimeString("ar-EG"));
// "٧:٠٠:٠٠ م"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### Using options

The results provided by `toLocaleTimeString()` can be customized using the
`options` argument:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// an application may want to use UTC and make that visible
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// show only hours and minutes, use options with the default locale - use an empty array
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// "20:01"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
