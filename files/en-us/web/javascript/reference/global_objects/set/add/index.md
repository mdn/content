---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.add
---

{{JSRef}}

The **`add()`** method of {{jsxref("Set")}} instances inserts a new element with a specified value in to this set, if there isn't an element with the same value already in this set

{{InteractiveExample("JavaScript Demo: Set.prototype.add()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## Syntax

```js-nolint
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
mySet.add(5).add("some text"); // chainable

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
