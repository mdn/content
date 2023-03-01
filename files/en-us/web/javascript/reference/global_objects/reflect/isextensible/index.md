---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
page-type: javascript-static-method
browser-compat: javascript.builtins.Reflect.isExtensible
---

{{JSRef}}

The **`Reflect.isExtensible()`** static method determines if an object is extensible (whether it can have new properties added to it). It is similar to {{jsxref("Object.isExtensible()")}}, but with [some differences](#difference_with_object.isextensible).

{{EmbedInteractiveExample("pages/js/reflect-isextensible.html", "taller")}}

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

A {{jsxref("TypeError")}}, if `target` is not an {{jsxref("Object")}}.

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
