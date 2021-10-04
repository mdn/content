---
title: Keyed collections
slug: Web/JavaScript/Guide/Keyed_collections
tags:
  - Collections
  - Guide
  - JavaScript
  - Map
  - l10n:priority
  - set
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}

This chapter introduces collections of data which are indexed by a key; `Map` and `Set` objects contain elements which are iterable in the order of insertion.

## Maps

### Map object

ECMAScript 2015 introduces a new data structure to map values to values. A {{jsxref("Map")}} object is a simple key/value map and can iterate its elements in insertion order.

The following code shows some basic operations with a `Map`. See also the {{jsxref("Map")}} reference page for more examples and the complete API. You can use a {{jsxref("Statements/for...of","for...of")}} loop to return an array of `[key, value]` for each iteration.

```js
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Object and Map compared

Traditionally, {{jsxref("Object", "objects", "", 1)}} have been used to map strings to values. Objects allow you to set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. `Map` objects, however, have a few more advantages that make them better maps.

- The keys of an `Object` are {{jsxref("Global_Objects/String","Strings")}} or {{jsxref("Global_Objects/Symbol","Symbols")}}, where they can be of any value for a `Map`.
- You can get the `size` of a `Map` easily, while you have to manually keep track of size for an `Object`.
- The iteration of maps is in insertion order of the elements.
- An `Object` has a prototype, so there are default keys in the map. (This can be bypassed using `map = Object.create(null)`.)

These three tips can help you to decide whether to use a `Map` or an `Object`:

- Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
- Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
- Use objects when there is logic that operates on individual elements.

### WeakMap object

The {{jsxref("WeakMap")}} object is a collection of key/value pairs in which the **keys are objects only** and the values can be arbitrary values. The object references in the keys are held _weakly_, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore. The `WeakMap` API is the same as the `Map` API.

One difference to `Map` objects is that `WeakMap` keys are not enumerable (i.e., there is no method giving you a list of the keys). If they were, the list would depend on the state of garbage collection, introducing non-determinism.

For more information and example code, see also "Why *Weak*Map?" on the {{jsxref("WeakMap")}} reference page.

One use case of `WeakMap` objects is to store private data for an object, or to hide implementation details. The following example is from Nick Fitzgerald's blog post ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](http://fitzgeraldnick.com/weblog/53/). The private data and methods belong inside the object and are stored in the `privates` `WeakMap` object. Everything exposed on the instance and prototype is public; everything else is inaccessible from the outside world because `privates` is not exported from the module.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;
```

## Sets

### Set object

{{jsxref("Set")}} objects are collections of values. You can iterate its elements in insertion order. A value in a `Set` may only occur once; it is unique in the `Set`'s collection.

The following code shows some basic operations with a `Set`. See also the {{jsxref("Set")}} reference page for more examples and the complete API.

```js
let mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### Converting between Array and Set

You can create an {{jsxref("Array")}} from a Set using {{jsxref("Array.from")}} or the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Also, the `Set` constructor accepts an `Array` to convert in the other direction.

> **Note:** `Set` objects store _unique values_—so any duplicate elements from an Array are deleted when converting!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Array and Set compared

Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The new `Set` object, however, has some advantages:

- Deleting Array elements by value (`arr.splice(arr.indexOf(val), 1)`) is very slow.
- `Set` objects let you delete elements by their value. With an array, you would have to `splice` based on an element's index.
- The value {{jsxref("NaN")}} cannot be found with `indexOf` in an array.
- `Set` objects store unique values. You don't have to manually keep track of duplicates.

### WeakSet object

{{jsxref("WeakSet")}} objects are collections of objects. An object in the `WeakSet` may only occur once. It is unique in the `WeakSet`'s collection, and objects are not enumerable.

The main differences to the {{jsxref("Set")}} object are:

- In contrast to `Sets`, `WeakSets` are **collections of _objects only_**, and not of arbitrary values of any type.
- The `WeakSet` is _weak_: References to objects in the collection are held weakly. If there is no other reference to an object stored in the `WeakSet`, they can be garbage collected. That also means that there is no list of current objects stored in the collection.
- `WeakSets` are not enumerable.

The use cases of `WeakSet` objects are limited. They will not leak memory, so it can be safe to use DOM elements as a key and mark them for tracking purposes, for example.

## Key and value equality of Map and Set

Both the key equality of `Map` objects and the value equality of `Set` objects, are based on the "[same-value-zero algorithm](https://tc39.github.io/ecma262/#sec-samevaluezero)":

- Equality works like the identity comparison operator `===`.
- `-0` and `+0` are considered equal.
- {{jsxref("NaN")}} is considered equal to itself (contrary to `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}
