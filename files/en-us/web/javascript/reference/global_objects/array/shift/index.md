---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.shift
---
{{JSRef}}

The **`shift()`** method removes the **first**
element from an array and returns that removed element. This method changes the length
of the array.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Syntax

```js
shift()
```

### Return value

The removed element from the array; {{jsxref("undefined")}} if the array is empty.

## Description

The `shift()` method removes the element at the zeroth index and shifts the
values at consecutive indexes down, then returns the removed value. If the
{{jsxref("Array.length", "length")}} property is 0, {{jsxref("undefined")}} is returned.

{{jsxref("Array.prototype.pop()")}} has similar behavior to `shift()`, but applied to the last element in an array.

The `shift()` method is a mutating method. It changes the length and the content of `this`. In case you want the value of `this` to be the same, but return a new array with the first element removed, you can use [`arr.slice(1)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) instead.

`Array.prototype.shift()` is intentionally generic; this method can be
{{jsxref("Function.call", "called", "", 1)}} or {{jsxref("Function.apply", "applied",
  "", 1)}} to objects resembling arrays. Objects which do not contain a
`length` property reflecting the last in a series of consecutive, zero-based
numerical properties may not behave in any meaningful manner.

## Examples

### Removing an element from an array

The following code displays the `myFish` array before and after removing its
first element. It also displays the removed element:

```js
const myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel
```

### Using shift() method in while loop

The shift() method is often used in condition inside while loop. In the following
example every iteration will remove the next element from an array, until it is empty:

```js
const names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while (typeof (i = names.shift()) !== 'undefined') {
  console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
