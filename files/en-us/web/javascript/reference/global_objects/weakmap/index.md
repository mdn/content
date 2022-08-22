---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakMap
  - Polyfill
browser-compat: javascript.builtins.WeakMap
---
{{JSRef}}

A **`WeakMap`** is a collection of key/value pairs whose keys must be objects, with values of any arbitrary [JavaScript type](/en-US/docs/Web/JavaScript/Data_structures#javascript_types), and which does not create strong references to its keys. That is, an object's presence as a key in a `WeakMap` does not prevent the object from being garbage collected. Once an object used as a key has been collected, its corresponding values in any `WeakMap` become candidates for garbage collection as well — as long as they aren't strongly referred to elsewhere.

`WeakMap` allows associating data to objects in a way that doesn't prevent the key objects from being collected, even if the values reference the keys. However, a `WeakMap` doesn't allow observing the liveness of its keys, which is why it doesn't allow enumeration; if a `WeakMap` exposed any method to obtain a list of its keys, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a {{jsxref("Map")}} rather than a `WeakMap`.

You can learn more about `WeakMap` in the [WeakMap object](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) section of the [Keyed collections](/en-US/docs/Web/JavaScript/Guide/Keyed_collections) guide.

## Description

Keys of WeakMaps are of the type `Object` only. {{Glossary("Primitive", "Primitive data types")}} as keys are not allowed (e.g. a {{jsxref("Symbol")}} can't be a `WeakMap` key).

### Why *Weak*Map?

A map API _could_ be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. Setting elements on this map would involve pushing a key and value onto the end of each of those arrays simultaneously. As a result, the indices of the key and value would correspond to both arrays. Getting values from the map would involve iterating through all keys to find a match, then using the index of this match to retrieve the corresponding value from the array of values.

Such an implementation would have two main inconveniences:

1. The first one is an *O(*n*)* set and search (_n_ being the number of keys in the map) since both operations must iterate through the list of keys to find a matching value.
2. The second inconvenience is a memory leak because the arrays ensure that references to each key and each value are maintained indefinitely. These references prevent the keys from being garbage collected, even if there are no other references to the object. This would also prevent the corresponding values from being garbage collected.

By contrast, in a `WeakMap`, a key object refers strongly to its contents as long as the key is not garbage collected, but weakly from then on. As such, a `WeakMap`:

- does not prevent garbage collection, which eventually removes references to the key object
- allows garbage collection of any values if their key objects are not referenced from somewhere other than a `WeakMap`

A `WeakMap` can be a particularly useful construct when mapping keys to information about the key that is valuable _only if_ the key has not been garbage collected.

But because a `WeakMap` doesn't allow observing the liveness of its keys, its keys are not enumerable. There is no method to obtain a list of the keys. If there were, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a {{jsxref("Map")}}.

## Constructor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Creates a new `WeakMap` object.

## Instance methods

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}
  - : Removes any value associated to the `key`. `WeakMap.prototype.has(key)` will return `false` afterwards.
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}
  - : Returns the value associated to the `key`, or `undefined` if there is none.
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}
  - : Returns a Boolean asserting whether a value has been associated to the `key` in the `WeakMap` object or not.
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : Sets the `value` for the `key` in the `WeakMap` object. Returns the `WeakMap` object.

## Examples

### Using WeakMap

```js
const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because there is no key for o2 on wm2
wm2.get(o3); // undefined, because that is the set value

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### Implementing a WeakMap-like class with a .clear() method

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```

### Emulating private members

Developers can use a {{jsxref("WeakMap")}} to associate private data to an object, with the following benefits:

- Compared to a {{jsxref("Map")}}, a WeakMap does not hold strong references to the object used as the key, so the metadata shares the same lifetime as the object itself, avoiding memory leaks.
- Compared to using non-enumerable and/or {{jsxref("Symbol")}} properties, a WeakMap is external to the object and there is no way for user code to retrieve the metadata through reflective methods like {{jsxref("Object.getOwnPropertySymbols")}}.
- Compared to a [closure](/en-US/docs/Web/JavaScript/Closures), the same WeakMap can be reused for all instances created from a constructor, making it more memory-efficient, and allows different instances of the same class to read the private members of each other.

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

This is roughly equivalent to the following, using [private fields](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields):

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = 'foo';
    this.#hidden = ++Thing.#counter;
  }
  showPublic() {
    return this.someProperty;
  }
  showPrivate() {
    return this.#hidden;
  }
}

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [WeakMap object](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) in the [Keyed collections](/en-US/docs/Web/JavaScript/Guide/Keyed_collections) guide
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
