---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - set
browser-compat: javascript.builtins.Set.delete
---
{{JSRef}}

The **`delete()`** method removes a specified value from a
`Set` object, if it is in the set.

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## Syntax

```js
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
mySet.add('foo');

mySet.delete('bar'); // Returns false. No "bar" element found to be deleted.
mySet.delete('foo'); // Returns true. Successfully removed.

mySet.has('foo');    // Returns false. The "foo" element is no longer present.
```

Let's check out below how to delete an Object from a Set.

```js
const setObj = new Set();   // Create a new set.

setObj.add({x: 10, y: 20}); // Add object in the set.

setObj.add({x: 20, y: 30}); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach(function(point){
  if (point.x > 10){
    setObj.delete(point)
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
