---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.species
---

{{JSRef}}

The **`Symbol.species`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methods that create copies of an object may look up this symbol on the object for the constructor function to use when creating the copy.

> **Warning:** The existence of `[Symbol.species]` allows execution of arbitrary code and may create security vulnerabilities. It also makes certain optimizations much harder. Engine implementers are [investigating whether to remove this feature](https://github.com/tc39/proposal-rm-builtin-subclassing). Avoid relying on it if possible.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Value

The well-known symbol `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## Description

The `[Symbol.species]` accessor property allows subclasses to override the default constructor for objects. This specifies a protocol about how instances should be copied. For example, when you use copying methods of arrays, such as {{jsxref("Array/map", "map()")}}. the `map()` method uses `instance.constructor[Symbol.species]` to get the constructor for constructing the new array. For more information, see [subclassing built-ins](/en-US/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins).

All built-in implementations of `[Symbol.species]` return the `this` value, which is the current instance's constructor. This allows copying methods to create instances of derived classes rather than the base class — for example, `map()` will return an array of the same type as the original array.

## Examples

### Using species

You might want to return {{jsxref("Array")}} objects in your derived array class `MyArray`. For example, when using methods such as {{jsxref("Array/map", "map()")}} that return the default constructor, you want these methods to return a parent `Array` object, instead of the `MyArray` object. The `species` symbol lets you do this:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Array[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`ArrayBuffer[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
- [`Map[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
- [`Promise[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
- [`RegExp[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
- [`Set[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
- [`TypedArray[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
