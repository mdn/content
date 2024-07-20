---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
page-type: javascript-class
browser-compat: javascript.builtins.WeakSet
---

{{JSRef}}

A **`WeakSet`** is a collection of garbage-collectable values, including objects and [non-registered symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). A value in the `WeakSet` may only occur once. It is unique in the `WeakSet`'s collection.

## Description

Values of WeakSets must be garbage-collectable. Most {{Glossary("Primitive", "primitive data types")}} can be arbitrarily created and don't have a lifetime, so they cannot be stored. Objects and [non-registered symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) can be stored because they are garbage-collectable.

The main differences to the {{jsxref("Set")}} object are:

- `WeakSet`s are collections of **objects and symbols only**. They cannot contain arbitrary values of any type, as {{jsxref("Set")}}s can.
- The `WeakSet` is _weak_, meaning references to objects in a `WeakSet` are held _weakly_. If no other references to a value stored in the `WeakSet` exist, those values can be garbage collected.

  > **Note:** This also means that there is no list of current values stored in the collection. `WeakSets` are not enumerable.

### Use case: Detecting circular references

Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed.

`WeakSet`s are ideal for this purpose:

```js
// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);
```

Here, a `WeakSet` is created on the first run, and passed along with every subsequent function call (using the internal `_refs` parameter).

The number of objects or their traversal order is immaterial, so a `WeakSet` is more suitable (and performant) than a {{jsxref("Set")}} for tracking object references, especially if a very large number of objects is involved.

## Constructor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Creates a new `WeakSet` object.

## Instance properties

These properties are defined on `WeakSet.prototype` and shared by all `WeakSet` instances.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : The constructor function that created the instance object. For `WeakSet` instances, the initial value is the {{jsxref("WeakSet/WeakSet", "WeakSet")}} constructor.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"WeakSet"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("WeakSet.prototype.add()")}}
  - : Appends `value` to the `WeakSet` object.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Removes `value` from the `WeakSet`. `WeakSet.prototype.has(value)` will return `false` afterwards.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Returns a boolean asserting whether `value` is present in the `WeakSet` object or not.

## Examples

### Using the WeakSet object

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
```

Note that `foo !== bar`. While they are similar objects, _they are not **the same object**_. And so they are both added to the set.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
