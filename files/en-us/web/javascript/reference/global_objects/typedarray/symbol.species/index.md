---
title: TypedArray[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
page-type: javascript-static-accessor-property
browser-compat: javascript.builtins.TypedArray.@@species
---

{{JSRef}}

The **`TypedArray[Symbol.species]`** static accessor property returns the constructor used to construct return values from typed array methods.

> [!WARNING]
> The existence of `[Symbol.species]` allows execution of arbitrary code and may create security vulnerabilities. It also makes certain optimizations much harder. Engine implementers are [investigating whether to remove this feature](https://github.com/tc39/proposal-rm-builtin-subclassing). Avoid relying on it if possible.

## Syntax

```js-nolint
TypedArray[Symbol.species]
```

### Return value

The value of the constructor (`this`) on which `get [Symbol.species]` was called. The return value is used to construct return values from typed array methods that create new typed arrays.

## Description

The `[Symbol.species]` accessor property returns the default constructor for [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) objects. Subclass constructors may override it to change the constructor assignment. The default implementation is basically:

```js
// Hypothetical underlying implementation for illustration
class TypedArray {
  static get [Symbol.species]() {
    return this;
  }
}
```

Because of this polymorphic implementation, `[Symbol.species]` of derived subclasses would also return the constructor itself by default.

```js
class SubTypedArray extends Int8Array {}
SubTypedArray[Symbol.species] === SubTypedArray; // true
```

When calling typed array methods that do not mutate the existing array but return a new array instance (for example, [`filter()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter) and [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map)), the array's `constructor[Symbol.species]` will be accessed. The returned constructor will be used to construct the return value of the typed array method.

However, unlike [`Array[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species), when using `[Symbol.species]` to create new typed arrays, the language will make sure that the newly created array is a proper typed array and has the same content type as the original array — for example, you can't create a {{jsxref("BigInt64Array")}} from a {{jsxref("Float64Array")}}, or create a non-BigInt array from a BigInt array. Doing so throws a {{jsxref("TypeError")}}.

```js
class BadArray extends Int8Array {
  static get [Symbol.species]() {
    return Array;
  }
}
new BadArray(1).map(() => 0); // TypeError: Method %TypedArray%.prototype.map called on incompatible receiver [object Array]

class BadArray2 extends Int8Array {
  static get [Symbol.species]() {
    return BigInt64Array;
  }
}
new BadArray2(1).map(() => 0n); // TypeError: TypedArray.prototype.map constructed typed array of different content type from |this|
```

> [!NOTE]
> Due to a bug in both [SpiderMonkey](https://bugzil.la/1640194) and V8, the content type match is not checked. Only Safari will throw a {{jsxref("TypeError")}} in the second example.

## Examples

### Species in ordinary objects

The `[Symbol.species]` property returns the default constructor function, which is one of the typed array constructors itself for any given [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) constructor.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### Species in derived objects

In an instance of a custom `TypedArray` subclass, such as `MyTypedArray`, the `MyTypedArray` species is the `MyTypedArray` constructor. However, you might want to overwrite this, in order to return a parent [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) object in your derived class methods:

```js
class MyTypedArray extends Uint8Array {
  // Overwrite MyTypedArray species to the parent Uint8Array constructor
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
