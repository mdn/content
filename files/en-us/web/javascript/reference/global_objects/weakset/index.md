---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - WeakSet
  - Polyfill
browser-compat: javascript.builtins.WeakSet
---
{{JSRef}}

The **`WeakSet`** object lets you store weakly held _objects_ in a collection.

## Description

`WeakSet` objects are collections of objects. Just as with {{jsxref("Set")}}s, each object in a `WeakSet` may occur only once; all objects in a `WeakSet`'s collection are unique.

The main differences to the {{jsxref("Set")}} object are:

- `WeakSet`s are collections of **objects only**. They cannot contain arbitrary values of any type, as {{jsxref("Set")}}s can.
- The `WeakSet` is _weak_, meaning references to objects in a `WeakSet` are held _weakly_. If no other references to an object stored in the `WeakSet` exist, those objects can be garbage collected.

  > **Note:** This also means that there is no list of current objects stored in the collection. `WeakSets` are not enumerable.

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
  if (typeof subject === "object") {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
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

## Instance methods

- {{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}
  - : Appends `value` to the `WeakSet` object.
- {{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}
  - : Removes `value` from the `WeakSet`. `WeakSet.prototype.has(value)` will return `false` afterwards.
- {{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}
  - : Returns a boolean asserting whether `value` is present in the `WeakSet` object or not.

## Examples

### Using the WeakSet object

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
ws.has(bar);    // true, bar is retained
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
