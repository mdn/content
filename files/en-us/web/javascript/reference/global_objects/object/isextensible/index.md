---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Method
  - Object
browser-compat: javascript.builtins.Object.isExtensible
---

{{JSRef}}

The **`Object.isExtensible()`** method determines if an object
is extensible (whether it can have new properties added to it).

{{EmbedInteractiveExample("pages/js/object-isextensible.html")}}

## Syntax

```js
Object.isExtensible(obj);
```

### Parameters

- `obj`
  - : The object which should be checked.

### Return value

A {{jsxref("Boolean")}} indicating whether or not the given object is extensible.

## Description

Objects are extensible by default: they can have new properties added to them, and (in
engines that support {{jsxref("Object.proto", "__proto__")}}) their
`__proto__` property can be modified. An object can be marked as
non-extensible using {{jsxref("Object.preventExtensions()")}},
{{jsxref("Object.seal()")}}, or {{jsxref("Object.freeze()")}}.

## Examples

### Using Object.isExtensible

```js
// New objects are extensible.
var empty = {};
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

### Non-object coercion

In ES5, if the argument to this method is not an object (a primitive), then it will
cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
it was a non-extensible ordinary object, return `false`.

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
