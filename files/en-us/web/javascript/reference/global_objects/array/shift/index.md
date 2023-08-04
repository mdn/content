---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.shift
---

{{JSRef}}

The **`shift()`** method removes the **first**
element from an array and returns that removed element. This method changes the length
of the array.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Syntax

```js-nolint
shift()
```

### Return value

The removed element from the array; {{jsxref("undefined")}} if the array is empty.

## Description

The `shift()` method removes the element at the zeroth index and shifts the
values at consecutive indexes down, then returns the removed value. If the
{{jsxref("Array/length", "length")}} property is 0, {{jsxref("undefined")}} is returned.

The {{jsxref("Array/pop", "pop()")}} method has similar behavior to `shift()`, but applied to the last element in an array.

The `shift()` method is a [mutating method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It changes the length and the content of `this`. In case you want the value of `this` to be the same, but return a new array with the first element removed, you can use [`arr.slice(1)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) instead.

The `shift()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

## Examples

### Removing an element from an array

The following code displays the `myFish` array before and after removing its
first element. It also displays the removed element:

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel
```

### Using shift() method in while loop

The shift() method is often used in condition inside while loop. In the following
example every iteration will remove the next element from an array, until it is empty:

```js
const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri
```

### Calling shift() on non-array objects

The `shift()` method reads the `length` property of `this`. If the [normalized length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#normalization_of_the_length_property) is 0, `length` is set to `0` again (whereas it may be negative or `undefined` before). Otherwise, the property at `0` is returned, and the rest of the properties are shifted left by one. The `length` property is decremented by one.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.shift.call(arrayLike));
// undefined, because it is an empty slot
console.log(arrayLike);
// { '1': 4, length: 2, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.shift.call(plainObj);
console.log(plainObj);
// { length: 0 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
