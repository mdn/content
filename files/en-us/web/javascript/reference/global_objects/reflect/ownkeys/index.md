---
title: Reflect.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Reference
  - Reflect
  - Polyfill
browser-compat: javascript.builtins.Reflect.ownKeys
---
{{JSRef}}

The static **`Reflect.ownKeys()`** method returns an array of
the `target` object's own property keys.

{{EmbedInteractiveExample("pages/js/reflect-ownkeys.html")}}

## Syntax

```js
Reflect.ownKeys(target)
```

### Parameters

- `target`
  - : The target object from which to get the own keys.

### Return value

An {{jsxref("Array")}} of the `target` object's own property
keys.

### Exceptions

A {{jsxref("TypeError")}}, if `target` is not an
{{jsxref("Object")}}.

## Description

The `Reflect.ownKeys` method returns an array of the
`target` object's own property keys. Its return value is
equivalent to
`{{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(target)", "", 1)}}.concat({{jsxref("Object.getOwnPropertySymbols", "Object.getOwnPropertySymbols(target)", "", 1)}})`.

## Examples

### Using Reflect.ownKeys()

```js
Reflect.ownKeys({z: 3, y: 2, x: 1}) // [ "z", "y", "x" ]
Reflect.ownKeys([]) // ["length"]

const sym = Symbol.for('comet');
const sym2 = Symbol.for('meteor');
const obj = {
  [sym]: 0,
  'str': 0,
  '773': 0,
  '0': 0,
  [sym2]: 0,
  '-1': 0,
  '8': 0,
  'second str': 0,
};
Reflect.ownKeys(obj)
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
