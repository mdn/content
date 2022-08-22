---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the specified {{jsxref("Date")}} object interpreted in the local timezone.

{{EmbedInteractiveExample("pages/js/date-tostring.html","shorter")}}

## Syntax

```js
toString()
```

### Return value

A string representing the given date.

## Description

The {{jsxref("Date")}} object overrides the `toString()` method of {{jsxref("Object")}}. `Date.prototype.toString()` returns a string representation of the Date as interpreted in the local timezone, containing both the date and the time — it joins the string representation specified in [`toDateString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) and [`toTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) together, adding a space in between.

For example: "Thu Jan 01 1970 04:42:04 GMT+0000 (Coordinated Universal Time)"

The `toString()` method is automatically called when a date is coerced to a string, such as `const today = 'Today is ' + new Date()`.

`Date.prototype.toString()` must be called on {{jsxref("Date")}} instances. If the `this` value does not inherit from `Date.prototype`, a {{jsxref("TypeError")}} is thrown.

- If you only want to get the _date_ part, use [`toDateString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString).
- If you only want to get the _time_ part, use [`toTimeString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString).
- If you want to make the date interpreted as UTC instead of local timezone, use [`toUTCString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString).
- If you want to format the date in a more user-friendly format (e.g. localization), use [`toLocaleString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

## Examples

### Using toString()

```js
const x = new Date();
console.log(x.toString()); // Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
