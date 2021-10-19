---
title: 'TypeError: non-function passed to Array.prototype.withSorted'
slug: Web/JavaScript/Reference/Errors/Array_withSorted_argument
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid Array.prototype.withSorted argument" occurs when the argument of {{jsxref("Array.prototype.withSorted()")}} isn't either {{jsxref("undefined")}} or a function which compares its operands.

## Message

```html
TypeError: argument is not a function object (Edge)
TypeError: invalid Array.prototype.withSorted argument (Firefox)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The argument of {{jsxref("Array.prototype.withSorted()")}} is expected to be either {{jsxref("undefined")}} or a function which compares its operands.

## Examples

### Invalid cases

```js example-bad
let a = [1, 3, 2].withSorted(5);  // TypeError

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
let a = [1, 3, 2].withSorted(cmp[this.key] || 'asc');  // TypeError
```

### Valid cases

```js example-good
let a = [1, 3, 2].withSorted();   // [1, 2, 3]

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
let a = [1, 3, 2].withSorted(cmp[this.key || 'asc']); // [1, 2, 3]
```
### Note

The `Array.prototype.withSorted` method is part of a [proposal](https://github.com/tc39/proposal-change-array-by-copy) that will be added in the future.
