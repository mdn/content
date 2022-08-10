---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getMinutes
---
{{JSRef}}

The **`getMinutes()`** method returns the minutes in the
specified date according to local time.

{{EmbedInteractiveExample("pages/js/date-getminutes.html","shorter")}}

## Syntax

```js
getMinutes()
```

### Return value

An integer number, between 0 and 59, representing the minutes in the given date
according to local time.

## Examples

### Using getMinutes()

The second statement below assigns the value 15 to the variable `minutes`,
based on the value of the {{jsxref("Global_Objects/Date", "Date")}} object
`Xmas95`.

```js
const Xmas95 = new Date('December 25, 1995 23:15:30');
const minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
