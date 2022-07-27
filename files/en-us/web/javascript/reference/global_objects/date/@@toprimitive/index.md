---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.@@toPrimitive
---
{{JSRef}}

The **`[@@toPrimitive]()`** method converts a `Date`
object to a primitive value.

{{EmbedInteractiveExample("pages/js/date-toprimitive.html")}}

## Syntax

```js
Date()[Symbol.toPrimitive](hint);
```

### Return value

The primitive value of the given {{jsxref("Date")}} object. Depending on the argument,
the method can return either a string or a number.

## Description

The `[@@toPrimitive]()` method of the {{jsxref("Date")}} object returns a
primitive value, that is either of type number or of type string.

If `hint` is `string` or `default`,
`[@@toPrimitive]()` tries to call the {{jsxref("Object.prototype.toString()",
  "toString")}} method. If the `toString` property does not exist, it tries to
call the {{jsxref("Object.prototype.valueOf()", "valueOf")}} method and if the
`valueOf` does not exist either, `[@@toPrimitive]()` throws a
{{jsxref("TypeError")}}.

If `hint` is `number`, `[@@toPrimitive]()` first tries
to call `valueOf`, and if that fails, it calls `toString`.

JavaScript calls the `[@@toPrimitive]()` method to convert an object to a
primitive value. You rarely need to invoke the `[@@toPrimitive]()` method
yourself; JavaScript automatically invokes it when encountering an object where a
primitive value is expected.

## Examples

### Returning date primitives

```js
const testDate = new Date(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('string');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]('number');
// Returns "1590757517834"

testDate[Symbol.toPrimitive]('default');
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.toPrimitive")}}
