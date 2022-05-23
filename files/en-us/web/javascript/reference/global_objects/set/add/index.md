---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - set
browser-compat: javascript.builtins.Set.add
---
{{JSRef}}

The **`add()`** method appends a new element with a specified
value to the end of a `Set` object.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## Syntax

```js
add(value)
```

### Parameters

- `value`
  - : The value of the element to add to the `Set` object.

### Return value

The `Set` object with added value.

## Examples

### Using the add() method

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add('some text'); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
