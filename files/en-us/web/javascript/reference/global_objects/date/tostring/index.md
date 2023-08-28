---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("Date")}} instances returns a string representing this date interpreted in the local timezone.

{{EmbedInteractiveExample("pages/js/date-tostring.html","shorter")}}

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the given date (see description for the format). Returns `"Invalid Date"` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

The `toString()` method is part of the [type coercion protocol](/en-US/docs/Web/JavaScript/Data_structures#type_coercion). Because `Date` has a [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive) method, that method always takes priority over `toString()` when a `Date` object is implicitly [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). However, `Date.prototype[@@toPrimitive]()` still calls `this.toString()` internally.

The {{jsxref("Date")}} object overrides the {{jsxref("Object/toString", "toString()")}} method of {{jsxref("Object")}}. `Date.prototype.toString()` returns a string representation of the Date as interpreted in the local timezone, containing both the date and the time — it joins the string representation specified in {{jsxref("Date/toDateString", "toDateString()")}} and {{jsxref("Date/toTimeString", "toTimeString()")}} together, adding a space in between. For example: "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)".

`Date.prototype.toString()` must be called on {{jsxref("Date")}} instances. If the `this` value does not inherit from `Date.prototype`, a {{jsxref("TypeError")}} is thrown.

- If you only want to get the _date_ part, use {{jsxref("Date/toDateString", "toDateString()")}}.
- If you only want to get the _time_ part, use {{jsxref("Date/toTimeString", "toTimeString()")}}.
- If you want to make the date interpreted as UTC instead of local timezone, use {{jsxref("Date/toUTCString", "toUTCString()")}}.
- If you want to format the date in a more user-friendly format (e.g. localization), use {{jsxref("Date/toUTCString", "toUTCString()")}}.

## Examples

### Using toString()

```js
const d = new Date(0);
console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
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
