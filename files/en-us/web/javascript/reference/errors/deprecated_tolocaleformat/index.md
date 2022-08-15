---
title: "Warning: Date.prototype.toLocaleFormat is deprecated"
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
tags:
  - Error
  - JavaScript
  - Warning
---
{{jsSidebar("Errors")}}

The JavaScript warning "Date.prototype.toLocaleFormat is deprecated; consider using
Intl.DateTimeFormat instead" occurs when the non-standard
`Date.prototype.toLocaleFormat()` method is used. `toLocaleFormat()` is now removed and this warning message is obsolete.

## Message

```
Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead
```

## Error type

Warning. JavaScript execution won't be halted.

## What went wrong?

The non-standard `Date.prototype.toLocaleFormat()` method is deprecated and
shouldn't be used anymore. It uses a format string in the same format expected by the
`strftime()` function in C. **The function is no longer available in
Firefox 58+**.

## Examples

### Deprecated syntax

The `Date.prototype.toLocaleFormat()` method is deprecated and will be
removed (no cross-browser support, available in Firefox only).

```js example-bad
const today = new Date();
const date = today.toLocaleFormat("%A, %e. %B %Y");

console.log(date);
// In German locale
// "Freitag, 10. März 2017"
```

### Alternative standard syntax using the ECMAScript Intl API

The ECMA-402 (ECMAScript Intl API) standard specifies standard objects and methods that
enable language sensitive date and time formatting (available in Chrome 24+, Firefox
29+, IE11+, Safari10+).

You can now either use the {{jsxref("Date.prototype.toLocaleDateString")}} method if
you just want to format one date.

```js example-good
const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = today.toLocaleDateString("de-DE", options);

console.log(date);
// "Freitag, 10. März 2017"
```

Or, you can make use of the {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} object,
which allows you to cache an object with most of the computations done so that
formatting is fast. This is useful if you have a loop of dates to format.

```js example-good
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateFormatter = new Intl.DateTimeFormat("de-DE", options);

const dates = [Date.UTC(2012, 11, 20, 3, 0, 0), Date.UTC(2014, 4, 12, 8, 0, 0)];

dates.forEach((date) => console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
```

### Alternative standard syntax using Date methods

The {{jsxref("Date")}} object offers several methods to build a custom date string.

```js example-bad
new Date().toLocaleFormat("%Y%m%d");
// "20170310"
```

Can be converted to:

```js example-good
const now = new Date();
const date =
  now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"
```

## See also

- {{jsxref("Date.prototype.toLocaleDateString")}}
- {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
