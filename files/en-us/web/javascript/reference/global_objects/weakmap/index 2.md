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

The **`WeakMap`** object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

You can learn more about `WeakMap`s in the [WeakMap object](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object) guide (under [Keyed collections](/en-US/docs/Web/JavaScript/Guide/Keyed_collections)).

## Description

Keys of WeakMaps are of the type `Object` only. {{Glossary("Primitive", "Primitive data types")}} as keys are not allowed (e.g. a {{jsxref("Symbol")}} can't be a `WeakMap` key).

### Why *Weak*Map?

A map API _could_ be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. Setting elements on this map would involve pushing a key and value onto the end of each of those arrays simultaneously. As a result, the indices of the key and value would correspond to both arrays. Getting values from the map would involve iterating through all keys to find a match, then using the index of this match to retrieve the corresponding value from the array of values.

Such an implementation would have two main inconveniences:

1.  The first one is an *O(*n*)* set and search (_n_ being the number of keys in the map) since both operations must iterate through the list of keys to find a matching value.
2.  The second inconvenience is a memory leak because the arrays ensure that references to each key and each value are maintained indefinitely. These references prevent the keys from being garbage collected, even if there are no other references to the object. This would also prevent the corresponding values from being garbage collected.

By contrast, native `WeakMap`s hold "weak" references to key objects. As such native `WeakMap`s do not prevent garbage collection, which eventually removes references to the key object. "Weak" references also avoid preventing garbage collection of values in the map. `WeakMap`s can be particularly useful constructs when mapping keys to information about the key that is valuable _only if_ the key has not been garbage collected.

**Because the references are weak, `WeakMap` keys are not enumerable.** There is no method to obtain a list of the keys. If there was, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a {{jsxref("Map")}}.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `WeakMap` is available in [`core-js`](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap` in the JavaScript guide](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
