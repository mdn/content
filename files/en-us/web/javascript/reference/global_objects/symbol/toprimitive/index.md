---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.toPrimitive
---

{{JSRef}}

The **`Symbol.toPrimitive`** static data property represents the well-known symbol specifying the method that accepts a preferred type and returns a primitive representation of an object. It is called in priority by all [type coercion](/en-US/docs/Web/JavaScript/Data_structures#type_coercion) algorithms.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Value

The well-known symbol `@@toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## Description

With the help of the `Symbol.toPrimitive` property (used as a function value), an object can be converted to a primitive value. The function is called with a string argument `hint`, which specifies the preferred type of the result primitive value. The `hint` argument can be one of `"number"`, `"string"`, and `"default"`.

The `"number"` hint is used by [numeric coercion](/en-US/docs/Web/JavaScript/Data_structures#numeric_coercion) algorithms. The `"string"` hint is used by the [string coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) algorithm. The `"default"` hint is used by the [primitive coercion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) algorithm. The `hint` only acts as a weak signal of preference, and the implementation is free to ignore it (as [`Symbol.prototype[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) does). The language does not enforce alignment between the `hint` and the result type, although `[@@toPrimitive]()` must return a primitive, or a {{jsxref("TypeError")}} is thrown.

Objects without the `@@toPrimitive` property are converted to primitives by calling the `valueOf()` and `toString()` methods in different orders, which is explained in more detail in the [type coercion](/en-US/docs/Web/JavaScript/Data_structures#type_coercion) section. `@@toPrimitive` allows full control over the primitive conversion process. For example, [`Date.prototype[@@toPrimitive]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive) treats `"default"` as if it's `"string"` and calls `toString()` instead of `valueOf()`. [`Symbol.prototype[@@toPrimitive]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) ignores the hint and always returns a symbol, which means even in string contexts, {{jsxref("Symbol.prototype.toString()")}} won't be called, and `Symbol` objects must always be explicitly converted to strings through [`String()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String).

## Examples

### Modifying primitive values converted from an object

Following example describes how `Symbol.toPrimitive` property can modify the primitive value converted from an object.

```js
// An object without Symbol.toPrimitive property.
const obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// An object with Symbol.toPrimitive property.
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        — hint is "number"
console.log(`${obj2}`); // "hello"   — hint is "string"
console.log(obj2 + ""); // "true"    — hint is "default"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]()")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]()")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
