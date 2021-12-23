---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - set
browser-compat: javascript.builtins.Set.has
---
{{JSRef}}

The **`has()`** method returns a boolean indicating whether an
element with the specified value exists in a `Set` object or not.

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## Syntax

```js
has(value)
```

### Parameters

- `value`
  - : The value to test for presence in the `Set` object.

### Return value

Returns `true` if an element with the specified value exists in the
`Set` object; otherwise `false`.

> **Note:** Technically speaking, `has()` uses the [Same-value-zero](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality)
> algorithm to determine whether the given element is found.

## Examples

### Using the has() method

```js
var mySet = new Set();
mySet.add('foo');

mySet.has('foo');  // returns true
mySet.has('bar');  // returns false

var set1 = new Set();
var obj1 = {'key1': 1};
set1.add(obj1);

set1.has(obj1);        // returns true
set1.has({'key1': 1}); // returns false because they are different object references
set1.add({'key1': 1}); // now set1 contains 2 entries
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
