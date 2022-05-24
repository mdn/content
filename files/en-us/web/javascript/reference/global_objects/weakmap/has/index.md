---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - WeakMap
browser-compat: javascript.builtins.WeakMap.has
---
{{JSRef}}

The **`has()`** method returns a boolean indicating whether an
element with the specified key exists in the `WeakMap` object or not.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}

## Syntax

```js
has(key)
```

### Parameters

- `key`
  - : Required. The key of the element to test for presence in the `WeakMap`
    object.

### Return value

- Boolean
  - : Returns `true` if an element with the specified key exists in the
    `WeakMap` object; otherwise `false`.

## Examples

### Using the has method

```js
const wm = new WeakMap();
wm.set(window, 'foo');

wm.has(window); // returns true
wm.has('baz');  // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
