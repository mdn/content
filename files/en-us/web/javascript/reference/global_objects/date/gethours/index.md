---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getHours
---
{{JSRef}}

The **`getHours()`** method returns the hour for the specified
date, according to local time.

{{EmbedInteractiveExample("pages/js/date-gethours.html","shorter")}}

## Syntax

```js
getHours()
```

### Return value

An integer number, between 0 and 23, representing the hour for the given date according
to local time.

## Examples

### Using getHours()

The second statement below assigns the value 23 to the variable `hours`,
based on the value of the {{jsxref("Global_Objects/Date", "Date")}} object
`xmas95`.

```js
const xmas95 = new Date('December 25, 1995 23:15:30');
const hours = xmas95.getHours();

console.log(hours); // 23
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
