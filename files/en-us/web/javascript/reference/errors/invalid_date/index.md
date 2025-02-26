---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "invalid date" occurs when an invalid date is attempted to be converted to an ISO date string.

## Message

```plain
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

You are converting an [invalid date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) value to an ISO date string. This usually happens in one of three ways:

- Calling the {{jsxref("Date/toISOString", "toISOString()")}} method
- Calling the {{jsxref("Date/toJSON", "toJSON()")}} method, which implicitly calls `toISOString`
- Using {{jsxref("JSON.stringify()")}} to stringify the date, which implicitly calls `toJSON`

An _invalid date_ is produced when you attempt to parse an invalid date string, or set the timestamp to an out-of-bounds value. Invalid dates usually cause all date methods to return {{jsxref("NaN")}} or other special values. However, such dates do not have valid ISO string representations, so an error is thrown when you attempt to do so.

## Examples

### Invalid cases

```js example-bad
const invalid = new Date("nothing");
invalid.toISOString(); // RangeError: invalid date
invalid.toJSON(); // RangeError: invalid date
JSON.stringify({ date: invalid }); // RangeError: invalid date
```

However, most other methods return special values:

```js example-bad
invalid.toString(); // "Invalid Date"
invalid.getDate(); // NaN
```

For more details, see the {{jsxref("Date.parse()")}} documentation.

### Valid cases

```js example-good
new Date("05 October 2011 14:48 UTC").toISOString(); // "2011-10-05T14:48:00.000Z"
new Date(1317826080).toISOString(); // "2011-10-05T14:48:00.000Z"
```

## See also

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
