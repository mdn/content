---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getSeconds
---
{{JSRef}}

The **`getSeconds()`** method returns the seconds in the
specified date according to local time.

{{EmbedInteractiveExample("pages/js/date-getseconds.html", "shorter")}}

## Syntax

```js
getSeconds()
```

### Return value

An integer number, between 0 and 59, representing the seconds in the given date
according to local time.

## Examples

### Using getSeconds()

The second statement below assigns the value 30 to the variable `seconds`,
based on the value of the {{jsxref("Global_Objects/Date", "Date")}} object
`Xmas95`.

```js
const Xmas95 = new Date('December 25, 1995 23:15:30');
const seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
