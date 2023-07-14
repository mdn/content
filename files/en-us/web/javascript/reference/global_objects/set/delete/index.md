---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
page-type: javascript-instance-method
browser-compat: javascript.builtins.Set.delete
---

{{JSRef}}

The **`delete()`** method removes a specified value from a
`Set` object, if it is in the set.

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## Syntax

```js-nolint
delete(value)
```

### Parameters

- `value`
  - : The value to remove from `Set`.

### Return value

Returns `true` if `value` was already in
`Set`; otherwise `false`.

## Examples

### Using the delete() method

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
- {{jsxref("Set.prototype.clear()")}}
