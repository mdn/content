---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.isExtensible
---

{{JSRef}}

The **`Reflect.isExtensible()`** static method is like {{jsxref("Object.isExtensible()")}}. It determines if an object is extensible (whether it can have new properties added to it).

{{InteractiveExample("JavaScript Demo: Reflect.isExtensible()", "taller")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false

const object2 = Object.seal({});

console.log(Reflect.isExtensible(object2));
// Expected output: false
```

## Syntax

```js-nolint
Reflect.isExtensible(target)
```

### Parameters

- `target`
  - : The target object which to check if it is extensible.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the target is extensible.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `target` is not an object.

## Description

`Reflect.isExtensible()` provides the reflective semantic of checking if an object is extensible. The only difference with {{jsxref("Object.isExtensible()")}} is how non-object targets are handled. `Reflect.isExtensible()` throws a {{jsxref("TypeError")}} if the target is not an object, while `Object.isExtensible()` always returns `false` for non-object targets.

`Reflect.isExtensible()` invokes the `[[IsExtensible]]` [object internal method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) of `target`.

## Examples

### Using Reflect.isExtensible()

See also {{jsxref("Object.isExtensible()")}}.

```js
// New objects are extensible.
const empty = {};
Reflect.isExtensible(empty); // true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Reflect.isExtensible(sealed); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Reflect.isExtensible(frozen); // false
```

### Difference with Object.isExtensible()

If the `target` argument to this method is not an object (a primitive), then it will cause a {{jsxref("TypeError")}}. With {{jsxref("Object.isExtensible()")}}, a non-object `target` will return false without any errors.

```js
Reflect.isExtensible(1);
// TypeError: 1 is not an object

Object.isExtensible(1);
// false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Reflect.isExtensible` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
- [`handler.isExtensible()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible)
