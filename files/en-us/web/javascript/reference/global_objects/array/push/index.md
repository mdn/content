---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.push
---
{{JSRef}}

The **`push()`** method adds one or more elements to the end of
an array and returns the new length of the array.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Syntax

```js
push(element0)
push(element0, element1)
push(element0, element1, /* ... ,*/ elementN)
```

### Parameters

- `elementN`
  - : The element(s) to add to the end of the array.

### Return value

The new {{jsxref("Array.length", "length")}} property of the object upon which the
method was called.

## Description

The `push` method appends values to an array.

`push` is intentionally generic. This method can be used with
{{jsxref("Function.call", "call()")}} or {{jsxref("Function.apply", "apply()")}} on
objects resembling arrays. The `push` method relies on a `length`
property to determine where to start inserting the given values. If the
`length` property cannot be converted into a number, the index used is 0.
This includes the possibility of `length` being nonexistent, in which case
`length` will also be created.

Although {{jsxref("Global_Objects/String", "strings", "", 1)}} are native, Array-like
objects, they are not suitable in applications of this method, as strings are immutable.
 Similarly for the native, Array-like object {{jsxref("Functions/arguments",
  "arguments", "", 1)}}.

## Examples

### Adding elements to an array

The following code creates the `sports` array containing two elements, then
appends two elements to it. The `total` variable contains the new length of
the array.

```js
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

### Merging two arrays

This example uses {{jsxref("Operators/Spread_syntax", "spread syntax", "", "1")}} to push all elements from a
second array into the first one.

```js
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
```

Merging two arrays can also be done with the {{jsxref("Array.prototype.concat()", "concat()")}} method.

### Using an object in an array-like fashion

As mentioned above, `push` is intentionally generic, and we can use that to
our advantage. `Array.prototype.push` can work on an object just fine, as
this example shows.

Note that we don't create an array to store a collection of objects. Instead, we store
the collection on the object itself and use `call` on
`Array.prototype.push` to trick the method into thinking we are dealing with
an array—and it just works, thanks to the way JavaScript allows us to establish the
execution context in any way we want.

```js
let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2
```

Note that although `obj` is not an array, the method `push`
successfully incremented `obj`'s `length` property just like if we
were dealing with an actual array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
