---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.Array.@@unscopables
---
{{JSRef}}

The **`@@unscopable`** symbol property contains property names that were not included in the ECMAScript standard prior to the ES2015 version. These properties are excluded from [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement bindings.

## Description

The default array properties that are excluded from `with` bindings are:

- {{jsxref("Array.prototype.at()", "at()")}}
- {{jsxref("Array.prototype.copyWithin()", "copyWithin()")}}
- {{jsxref("Array.prototype.entries()", "entries()")}}
- {{jsxref("Array.prototype.fill()", "fill()")}}
- {{jsxref("Array.prototype.find()", "find()")}}
- {{jsxref("Array.prototype.findIndex()", "findIndex()")}}
- {{jsxref("Array.prototype.includes()", "includes()")}}
- {{jsxref("Array.prototype.keys()", "keys()")}}
- {{jsxref("Array.prototype.values()", "values()")}}

See {{jsxref("Symbol.unscopables")}} for how to set `unscopables` for your own objects.

{{js_property_attributes(0,0,1)}}

## Examples

### Use in with environments

The following code works fine in ES5 and below. However, in ECMAScript 2015 and later, the {{jsxref("Array.prototype.keys()")}} method was introduced. That means that inside `with` environments, "keys" would now be the method and not the variable. This is where now the built-in `@@unscopables` `Array.prototype[@@unscopables]` symbol property comes into play and prevents that some of the Array methods are being scoped into the `with` statement.

```js
var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["at", "copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.unscopables")}}
