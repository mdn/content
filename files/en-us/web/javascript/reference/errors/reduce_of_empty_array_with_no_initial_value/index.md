---
title: 'TypeError: Reduce of empty array with no initial value'
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "reduce of empty array with no initial value" occurs when a
reduce function is used.

## Message

```
TypeError: Reduce of empty array with no initial value (V8-based & Firefox & Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

In JavaScript, there are several reduce functions:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}
  and
- {{jsxref("TypedArray.prototype.reduce()")}},
  {{jsxref("TypedArray.prototype.reduceRight()")}}).

These functions optionally take an `initialValue` (which will be used as the
first argument to the first call of the `callback`). However, if no initial
value is provided, it will use the first element of the {{jsxref("Array")}} or
{{jsxref("TypedArray")}} as the initial value. This error is raised when an empty array
is provided because no initial value can be returned in that case.

## Examples

### Invalid cases

This problem appears frequently when combined with a filter
({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}})
which will remove all elements of the list. Thus leaving none to be used as the initial
value.

```js example-bad
const ints = [0, -1, -2, -3, -4, -5];
ints.filter((x) => x > 0)       // removes all elements
  .reduce((x, y) => x + y)    // no more elements to use for the initial value.
```

Similarly, the same issue can happen if there is a typo in a selector, or an unexpected
number of elements in a list:

```js example-bad
const names = document.getElementsByClassName("names");
const name_list = Array.prototype.reduce.call(names, (acc, name) => acc + ", " + name);
```

### Valid cases

These problems can be solved in two different ways.

One way is to actually provide an `initialValue`  as the neutral element of
the operator, such as 0 for the addition, 1 for a multiplication, or an empty string for
a concatenation.

```js example-good
const ints = [0, -1, -2, -3, -4, -5];
ints.filter((x) => x > 0)       // removes all elements
  .reduce((x, y) => x + y, 0) // the initial value is the neutral element of the addition
```

Another way would be to handle the empty case, either before calling
`reduce`, or in the callback after adding an unexpected dummy initial value.

```js example-good
const names = document.getElementsByClassName("names");

let nameList1 = "";
if (names.length >= 1) {
  nameList1 = Array.prototype.reduce.call(names, (acc, name) => `${acc}, ${name}`);
}
// nameList1 === "" when names is empty.

const nameList2 = Array.prototype.reduce.call(names, (acc, name) => {
  if (acc === "") // initial value
    return name;
  return `${acc}, ${name}`;
}, "");
// nameList2 === "" when names is empty.
```

## See also

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
