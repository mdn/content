---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getDay
---

{{JSRef}}

The **`getDay()`** method of {{jsxref("Date")}} instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month, see {{jsxref("Date.prototype.getDate()")}}.

{{EmbedInteractiveExample("pages/js/date-getday.html", "shorter")}}

## Syntax

```js-nolint
getDay()
```

### Parameters

None.

### Return value

An integer, between 0 and 6, representing the day of the week for the given date according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

The return value of `getDay()` is zero-based, which is useful for indexing into arrays of days, for example:

```js
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

However, for the purpose of internationalization, you should prefer using {{jsxref("Intl.DateTimeFormat")}} with the `options` parameter instead.

```js
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Montag"
```

## Examples

### Using getDay()

The `weekday` variable has value `1`, based on the value of the {{jsxref("Date")}} object `xmas95`, because December 25, 1995 is a Monday.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
