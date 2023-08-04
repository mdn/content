---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
page-type: javascript-instance-method
browser-compat: javascript.builtins.WeakMap.has
---

{{JSRef}}

The **`has()`** method returns a boolean indicating whether an
element with the specified key exists in the `WeakMap` object or not.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}

## Syntax

```js-nolint
has(key)
```

### Parameters

- `key`
  - : The key of the element to test for presence in the `WeakMap` object.

### Return value

Returns `true` if an element with the specified key exists in the `WeakMap` object; otherwise `false`. Always returns `false` if `key` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry).

## Examples

### Using the has method

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
