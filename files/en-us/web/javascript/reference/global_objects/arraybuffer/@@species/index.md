---
title: ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
page-type: javascript-static-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.@@species
---

{{JSRef}}

The **`ArrayBuffer[@@species]`** static accessor property returns the constructor used to construct return values from array buffer methods.

> **Warning:** The existence of `@@species` allows execution of arbitrary code and may create security vulnerabilities. It also makes certain optimizations much harder. Engine implementers are [investigating whether to remove this feature](https://github.com/tc39/proposal-rm-builtin-subclassing). Avoid relying on it if possible.

## Syntax

```js-nolint
ArrayBuffer[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get @@species` was called. The return value is used to construct return values from array buffer methods that create new array buffers.

## Description

The `@@species` accessor property returns the default constructor for `ArrayBuffer` objects. Subclass constructors may override it to change the constructor assignment. The default implementation is basically:

```js
// Hypothetical underlying implementation for illustration
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

Because of this polymorphic implementation, `@@species` of derived subclasses would also return the constructor itself by default.

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

When calling array buffer methods that do not mutate the existing object but return a new array buffer instance (for example, [`slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)), the object's `constructor[@@species]` will be accessed. The returned constructor will be used to construct the return value of the array buffer method.

## Examples

### Species in ordinary objects

The `@@species` property returns the default constructor function, which is the `ArrayBuffer` constructor for `ArrayBuffer`.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### Species in derived objects

In an instance of a custom `ArrayBuffer` subclass, such as `MyArrayBuffer`, the `MyArrayBuffer` species is the `MyArrayBuffer` constructor. However, you might want to overwrite this, in order to return parent `ArrayBuffer` objects in your derived class methods:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
