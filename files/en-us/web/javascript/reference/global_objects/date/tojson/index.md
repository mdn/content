---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.toJSON
---

{{JSRef}}

The **`toJSON()`** method returns a string representation of
the {{jsxref("Date")}} object.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntax

```js-nolint
toJSON()
```

### Return value

A string representation of the given date.

## Description

{{jsxref("Date")}} instances refer to a specific point in time. `toJSON()` calls the object's {{jsxref("Date.prototype.toISOString()", "toISOString()")}} method, which returns a string representing the {{jsxref("Date")}} object's value. This method is generally intended to, by default, usefully serialize {{jsxref("Date")}} objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the [`Date()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) or [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) as the reviver of [`JSON.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

The method first attempts to convert its `this` value [to a primitive](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) by calling its [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (with `"number"` as hint), [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), and [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) methods, in that order. If the result is a [non-finite](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) number, `null` is returned. (This generally corresponds to an invalid date, whose [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf) returns {{jsxref("NaN")}}.) Otherwise, if the converted primitive is not a number or is a finite number, the return value of `this.toISOString()` is returned.

Note that the method does not check whether the `this` value is a valid {{jsxref("Date")}} object. However, calling `Date.prototype.toJSON()` on non-`Date` objects does not have well-defined semantics.

## Examples

### Using toJSON()

```js
const jsonDate = new Date().toJSON();
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 2015-10-26T07:46:36.611Z
```

### Serialization round-tripping

When parsing JSON containing date strings, you can use [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) to revive them into the original date objects.

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
    return Date.parse(value);
  }
  return value;
});

console.log(data);
```

> **Note:** The reviver of `JSON.parse()` must be specific to the payload shape you expect, because the serialization is _lossy_: it's not possible to distinguish between a string that represents a Date and a normal string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
