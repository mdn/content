---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toJSON
---

{{JSRef}}

The **`toJSON()`** method of {{jsxref("Date")}} instances returns a string representing this date in the same ISO format as {{jsxref("Date/toISOString", "toISOString()")}}.

{{InteractiveExample("JavaScript Demo: Date.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date in the [date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) according to universal time, or `null` when the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). For valid dates, the return value is the same as that of {{jsxref("Date/toISOString", "toISOString()")}}.

## Description

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `Date` object is stringified. This method is generally intended to, by default, usefully serialize {{jsxref("Date")}} objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{jsxref("Date/Date", "Date()")}} constructor as the reviver of {{jsxref("JSON.parse()")}}.

The method first attempts to convert its `this` value [to a primitive](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) by calling its [`[Symbol.toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"number"` as hint), {{jsxref("Object/valueOf", "valueOf()")}}, and {{jsxref("Object/toString", "toString()")}} methods, in that order. If the result is a [non-finite](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) number, `null` is returned. (This generally corresponds to an invalid date, whose {{jsxref("Date/valueOf", "valueOf()")}} returns {{jsxref("NaN")}}.) Otherwise, if the converted primitive is not a number or is a finite number, the return value of {{jsxref("Date/toISOString", "this.toISOString()")}} is returned.

Note that the method does not check whether the `this` value is a valid {{jsxref("Date")}} object. However, calling `Date.prototype.toJSON()` on non-`Date` objects fails unless the object's number primitive representation is `NaN`, or the object also has a `toISOString()` method.

## Examples

### Using toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialization round-tripping

When parsing JSON containing date strings, you can use the {{jsxref("Date/Date", "Date()")}} constructor to revive them into the original date objects.

```js
const fileData = {
  author: "Maria",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const response = JSON.stringify(fileData);

// Imagine transmission through network

const data = JSON.parse(response, (key, value) => {
  if (key === "createdAt" || key === "updatedAt") {
    return new Date(value);
  }
  return value;
});

console.log(data);
```

> [!NOTE]
> The reviver of `JSON.parse()` must be specific to the payload shape you expect, because the serialization is _irreversible_: it's not possible to distinguish between a string that represents a Date and a normal string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
