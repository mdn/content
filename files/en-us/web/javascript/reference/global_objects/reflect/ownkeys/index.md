---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.ownKeys
---

{{JSRef}}

The **`Reflect.ownKeys()`** static method returns an array of the `target` object's own property keys.

{{InteractiveExample("JavaScript Demo: Reflect.ownKeys()")}}

```js interactive-example
const object1 = {
  property1: 42,
  property2: 13,
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// Expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// Expected output: Array ["length"]
```

## Syntax

```js-nolint
Reflect.ownKeys(target)
```

### Parameters

- `target`
  - : The target object from which to get the own keys.

### Return value

An {{jsxref("Array")}} of the `target` object's own property keys, including strings and symbols. For most objects, the array will be in the order of:

1. Non-negative integer indexes in increasing numeric order (but as strings)
2. Other string keys in the order of property creation
3. Symbol keys in the order of property creation.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object.

## Description

`Reflect.ownKeys()` provides the reflective semantic of retrieving all property keys of an object. It is the only way to get all own properties – enumerable and not enumerable, strings and symbols — in one call, without extra filtering logic. For example, {{jsxref("Object.getOwnPropertyNames()")}} takes the return value of `Reflect.ownKeys()` and filters to only string values, while {{jsxref("Object.getOwnPropertySymbols()")}} filters to only symbol values. Because normal objects implement `[[OwnPropertyKeys]]` to return all string keys before symbol keys, `Reflect.ownKeys(target)` is usually equivalent to `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`. However, if the object has a custom `[[OwnPropertyKeys]]` method (such as through a proxy's [`ownKeys`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys) handler), the order of the keys may be different.

`Reflect.ownKeys()` invokes the `[[OwnPropertyKeys]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.ownKeys()

```js
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

const sym = Symbol.for("comet");
const sym2 = Symbol.for("meteor");
const obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.ownKeys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- [`handler.ownKeys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
