---
title: WeakMap.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
tags:
  - JavaScript
  - Method
  - Deprecated
  - Prototype
  - WeakMap
browser-compat: javascript.builtins.WeakMap.clear
---
{{JSRef}} {{deprecated_header}}

The **`clear()`** method used to remove all elements from a
`WeakMap` object, but is no longer part of ECMAScript and its
implementations.

## Syntax

```js
clear()
```

## Examples

### Using the `clear` method

```js example-bad
var wm = new WeakMap();
var obj = {};

wm.set(obj, 'foo');
wm.set(window, 'bar');

wm.has(obj); // true
wm.has(window); // true

wm.clear();

wm.has(obj)  // false
wm.has(window)  // false
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakMap")}}
