---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
browser-compat: javascript.builtins.Symbol.toPrimitive
---
{{JSRef}}

The **`Symbol.toPrimitive`** is a symbol that specifies a function valued property that is called to convert an object to a corresponding primitive value.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Description

With the help of the `Symbol.toPrimitive` property (used as a function value), an object can be converted to a primitive value. The function is called with a string argument `hint`, which specifies the preferred type of the result primitive value. The `hint` argument can be one of `"number"`, `"string"`, and `"default"`.

{{js_property_attributes(0,0,0)}}

## Examples

### Modifying primitive values converted from an object

Following example describes how `Symbol.toPrimitive` property can modify the primitive value converted from an object.

```js
// An object without Symbol.toPrimitive property.
const obj1 = {};
console.log(+obj1);     // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ''); // "[object Object]"

// An object with Symbol.toPrimitive property.
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 10;
    }
    if (hint === 'string') {
      return 'hello';
    }
    return true;
  }
};
console.log(+obj2);     // 10        — hint is "number"
console.log(`${obj2}`); // "hello"   — hint is "string"
console.log(obj2 + ''); // "true"    — hint is "default"
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
