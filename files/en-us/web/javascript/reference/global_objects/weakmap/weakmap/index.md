---
title: WeakMap() constructor
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
tags:
  - Constructor
  - JavaScript
  - Reference
  - WeakMap
  - Polyfill
browser-compat: javascript.builtins.WeakMap.WeakMap
---
{{JSRef}}

The **`WeakMap()` constructor** creates `WeakMap`
objects which are a collections of key/value pairs in which the keys are weakly
referenced. The keys must be objects and the values can be arbitrary values.

You can learn more about `WeakMap`s in the section [WeakMap
object](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object) in [Keyed
collections](/en-US/docs/Web/JavaScript/Guide/Keyed_collections).

## Syntax

```js
new WeakMap()
new WeakMap(iterable)
```

### Parameters

- `iterable`
  - : Iterable is an Array or other iterable object whose elements are key-value pairs
    (2-element Arrays). Each key-value pair will be added to the new WeakMap. null is
    treated as undefined.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `WeakMap` is available in [`core-js`](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap`
  in the JavaScript guide](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)
- [Hiding Implementation Details with
  ECMAScript 6 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
