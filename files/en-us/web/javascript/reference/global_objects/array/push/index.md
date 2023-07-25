---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.push
---

{{JSRef}}

The **`push()`** method adds the specified elements to the end of
an array and returns the new length of the array.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Syntax

```js-nolint
push()
push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)
```

### Parameters

- `elementN`
  - : The element(s) to add to the end of the array.

### Return value

The new {{jsxref("Array/length", "length")}} property of the object upon which the method was called.

## Description

The `push()` method appends values to an array.

{{jsxref("Array.prototype.unshift()")}} has similar behavior to `push()`, but applied to the start of an array.

The `push()` method is a [mutating method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It changes the length and the content of `this`. In case you want the value of `this` to be the same, but return a new array with elements appended to the end, you can use [`arr.concat([element0, element1, /* ... ,*/ elementN])`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) instead. Notice that the elements are wrapped in an extra array — otherwise, if the element is an array itself, it would be spread instead of pushed as a single element due to the behavior of `concat()`.

The `push()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

## Examples

### Adding elements to an array

The following code creates the `sports` array containing two elements, then
appends two elements to it. The `total` variable contains the new length of
the array.

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Merging two arrays

This example uses {{jsxref("Operators/Spread_syntax", "spread syntax", "", "1")}} to push all elements from a
second array into the first one.

```js
const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

Merging two arrays can also be done with the {{jsxref("Array.prototype.concat()", "concat()")}} method.

### Calling push() on non-array objects

The `push()` method reads the `length` property of `this`. It then sets each index of `this` starting at `length` with the arguments passed to `push()`. Finally, it sets the `length` to the previous length plus the number of pushed elements.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }
```

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
const obj = {
  length: 0,

  addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length); // 2
```

Note that although `obj` is not an array, the method `push`
successfully incremented `obj`'s `length` property just like if we
were dealing with an actual array.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.push` in `core-js` with fixes of this method](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
