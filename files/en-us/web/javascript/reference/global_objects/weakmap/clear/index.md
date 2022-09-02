---
title: WeakMap.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
tags:
  - JavaScript
  - Method
  - Deprecated
  - Prototype
  - WeakMap
  - Non-standard
browser-compat: javascript.builtins.WeakMap.clear
---
{{JSRef}}{{Deprecated_Header}}{{Non-standard_Header}}

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
const wm = new WeakMap();
const obj = {};

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
