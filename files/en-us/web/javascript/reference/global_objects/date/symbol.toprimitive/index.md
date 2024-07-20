---
title: Date.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.@@toPrimitive
---

{{JSRef}}

The **`[Symbol.toPrimitive]()`** method of {{jsxref("Date")}} instances returns a primitive value representing this date. It may either be a string or a number, depending on the hint given.

{{EmbedInteractiveExample("pages/js/date-toprimitive.html")}}

## Syntax

```js-nolint
date[Symbol.toPrimitive](hint)
```

### Parameters

- `hint`
  - : A string representing the type of the primitive value to return. The following values are valid:
    - `"string"` or `"default"`: The method should return a string.
    - `"number"`: The method should return a number.

### Return value

If `hint` is `"string"` or `"default"`, this method returns a string by [coercing the `this` value to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) (first trying `toString()` then trying `valueOf()`).

If `hint` is `"number"`, this method returns a number by [coercing the `this` value to a number](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) (first trying `valueOf()` then trying `toString()`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `hint` argument is not one of the three valid values.

## Description

The `[Symbol.toPrimitive]()` method is part of the [type coercion protocol](/en-US/docs/Web/JavaScript/Data_structures#type_coercion). JavaScript always calls the `[Symbol.toPrimitive]()` method in priority to convert an object to a primitive value. You rarely need to invoke the `[Symbol.toPrimitive]()` method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

The `[Symbol.toPrimitive]()` method of the {{jsxref("Date")}} object returns a primitive value by either invoking {{jsxref("Date/valueOf", "this.valueOf()")}} and returning a number, or invoking {{jsxref("Date/toString", "this.toString()")}} and returning a string. It exists to override the default [primitive coercion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) process to return a string instead of a number, because primitive coercion, by default, calls {{jsxref("Date/valueOf", "valueOf()")}} before {{jsxref("Date/toString", "toString()")}}. With the custom `[Symbol.toPrimitive]()`, `new Date(0) + 1` returns `"Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)1"` (a string) instead of `1` (a number).

## Examples

### Using \[Symbol.toPrimitive]()

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z

d[Symbol.toPrimitive]("string"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
d[Symbol.toPrimitive]("number"); // 0
d[Symbol.toPrimitive]("default"); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.toPrimitive")}}
