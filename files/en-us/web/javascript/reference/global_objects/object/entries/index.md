---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - JavaScript
  - Method
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Object.entries
---
{{JSRef}}

The **`Object.entries()`** method returns an array of a given
object's own enumerable string-keyed property
`[key, value]` pairs. This is the same as iterating
with a {{jsxref("Statements/for...in", "for...in")}} loop, except that a
`for...in` loop enumerates properties in the prototype
chain as well.

The order of the array returned by `Object.entries()` is
the same as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop. If
there is a need for different ordering, then
the array should be sorted first, like
`Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));`.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Syntax

```js
Object.entries(obj)
```

### Parameters

- `obj`
  - : The object whose own enumerable string-keyed property
    `[key, value]` pairs are to be returned.

### Return value

An array of the given object's own enumerable string-keyed property
`[key, value]` pairs.

## Description

`Object.entries()` returns an array whose elements are arrays corresponding
to the enumerable string-keyed property `[key, value]`
pairs found directly upon `object`. The ordering of the properties is the
same as that given by looping over the property values of the object manually.

## Examples

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### Converting an `Object` to a `Map`

The {{jsxref("Map", "new Map()")}} constructor accepts an iterable of
`entries`. With `Object.entries`, you can easily convert from
{{jsxref("Object")}} to {{jsxref("Map")}}:

```js
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iterating through an `Object`

Using [Array Destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring), you can iterate through objects easily.

```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Object.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
