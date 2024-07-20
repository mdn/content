---
title: "TypeError: WeakSet key/WeakMap value 'x' must be an object or an unregistered symbol"
slug: Web/JavaScript/Reference/Errors/Key_not_weakly_held
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "WeakSet key (or WeakMap value) 'x' must be an object or an unregistered symbol" occurs when an value of invalid type is used as a key in a {{jsxref("WeakSet")}} or as a value in a {{jsxref("WeakMap")}}.

## Message

```plain
TypeError: Invalid value used as weak map key (V8-based)
TypeError: WeakMap key 1 must be an object or an unregistered symbol (Firefox)
TypeError: WeakMap keys must be objects or non-registered symbols (Safari)

TypeError: Invalid value used in weak set (V8-based)
TypeError: WeakSet value 1 must be an object or an unregistered symbol (Firefox)
TypeError: WeakSet values must be objects or non-registered symbols (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

{{jsxref("WeakSet")}} and {{jsxref("WeakMap")}} require the keys to be _garbage collectable_. Only objects and non-registered symbols (that is, [symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) not returned by {{jsxref("Symbol.for()")}}) are valid. For more information, see [Memory management](/en-US/docs/Web/JavaScript/Memory_management#weakmaps_and_weaksets). If you want to add keys that are strings, numbers, or other primitive values, you should store them in a regular `Set` or `Map` instead.

## Examples

### Invalid cases

```js example-bad
new WeakSet().add(1); // TypeError
new WeakMap().set(1, {}); // TypeError
new WeakSet([1]); // TypeError
new WeakMap([[1, {}]]); // TypeError
```

### Valid cases

```js example-good
new WeakSet().add({}); // OK
new WeakMap().set({}, 1); // OK

new Set([1]); // OK
new Map([[1, {}]]); // OK
```

## See also

- [Memory management](/en-US/docs/Web/JavaScript/Memory_management)
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
- {{jsxref("Set")}}
- {{jsxref("Map")}}
