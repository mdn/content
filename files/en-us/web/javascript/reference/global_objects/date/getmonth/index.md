---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getMonth
---
{{JSRef}}

The **`getMonth()`** method returns the month in the specified
date according to local time, as a zero-based value (where zero indicates the first
month of the year).

{{EmbedInteractiveExample("pages/js/date-getmonth.html","shorter")}}

## Syntax

```js
getMonth()
```

### Return value

An integer number, between 0 and 11, representing the month in the given date according
to local time. 0 corresponds to January, 1 to February, and so on.

## Examples

### Using getMonth()

The second statement below assigns the value 11 to the variable `month`,
based on the value of the {{jsxref("Date")}} object `Xmas95`.

```js
const Xmas95 = new Date('December 25, 1995 23:15:30');
const month = Xmas95.getMonth();

console.log(month); // 11
```

> **Note:** If needed, the full name of a month (`January` for
> example) can be obtained by using
> [`Intl.DateTimeFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
> with an `options` parameter. Using this method, internationalization is
> made easier:
>
> ```js
> const options = { month: 'long'};
> console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
> // December
> console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas95));
> // Dezember
> ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
