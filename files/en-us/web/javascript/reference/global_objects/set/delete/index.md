---
title: Set.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.delete
sidebar: jsref
---

The **`delete()`** method of {{jsxref("Set")}} instances removes the specified value from this set, if it is in the set.

{{InteractiveExample("JavaScript Demo: Set.prototype.delete()")}}

```js interactive-example
const set = new Set();
set.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set.forEach((point) => {
  if (point.x > 10) {
    set.delete(point);
  }
});

console.log(set.size);
// Expected output: 1
```

## Syntax

```js-nolint
setInstance.delete(value)
```

### Parameters

- `value`
  - : The value to remove from the `Set` object. Objects are compared by [reference](/en-US/docs/Glossary/Object_reference), not by value.

### Return value

`true` if a value in the `Set` object has been removed successfully. `false` if the value is not found in the `Set`.

## Examples

### Using delete()

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; no "bar" element found to be deleted.
console.log(mySet.delete("foo")); // true; successfully removed.

console.log(mySet.has("foo")); // false; the "foo" element is no longer present.
```

### Deleting an object from a set

Because objects are compared by reference, you have to delete them by checking individual properties if you don't have a reference to the original object.

```js
const setObj = new Set(); // Create a new set.

setObj.add({ x: 10, y: 20 }); // Add object in the set.

setObj.add({ x: 20, y: 30 }); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.clear()")}}
- {{jsxref("Set.prototype.has()")}}
