---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - WeakSet
browser-compat: javascript.builtins.WeakSet.has
---
{{JSRef}}

The **`has()`** method returns a boolean indicating whether an
object exists in a `WeakSet` or not.

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## Syntax

```js
has(value)
```

### Parameters

- `value`
  - : Required. The object to test for presence in the `WeakSet`.

### Return value

- Boolean
  - : Returns `true` if an element with the specified value exists in the
    `WeakSet` object; otherwise `false`.

## Examples

### Using the has method

```js
var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window);  // returns true
mySet.has(obj);     // returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
