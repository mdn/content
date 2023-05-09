---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid date" occurs when a string leading to an invalid date
has been provided to {{jsxref("Date")}} or {{jsxref("Date.parse()")}}.

## Message

```
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

A string leading to an invalid date has been provided to {{jsxref("Date")}} or
{{jsxref("Date.parse()")}}.

## Examples

### Invalid cases

Unrecognizable strings or dates containing illegal element values in ISO formatted
strings usually return {{jsxref("NaN")}}. However, depending on the implementation,
non–conforming ISO format strings, may also throw `RangeError: invalid date`,
like the following cases in Firefox:

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

This, however, returns {{jsxref("NaN")}} in Firefox:

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

For more details, see the {{jsxref("Date.parse()")}} documentation.

### Valid cases

```js example-good
new Date("05 October 2011 14:48 UTC");
new Date(1317826080); // Unix Timestamp for 05 October 2011 14:48:00 UTC
```

## See also

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
