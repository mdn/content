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

The **`WeakMap()` constructor** creates a [`WeakMap`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) object, optionally based on a provided [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or other iterable object.

## Syntax

```js
new WeakMap()
new WeakMap(iterable)
```

> **Note:** `WeakMap()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `iterable`
  - : An [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or other iterable object that implements an [@@iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) method that returns an iterator object that produces a two-element array-like object whose first element is a value that will be used as a `WeakMap` key and whose second element is the value to associate with that key. Each key-value pair will be added to the new `WeakMap`. null is treated as undefined.

## Examples

### Using WeakMap

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

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

- [Polyfill of `WeakMap` in `core-js`](https://github.com/zloirock/core-js#weakmap)
- [`WeakMap` in the JavaScript guide](/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
