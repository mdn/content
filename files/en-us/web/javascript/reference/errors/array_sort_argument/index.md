---
title: 'TypeError: invalid Array.prototype.sort argument'
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid Array.prototype.sort argument" occurs when the argument of {{jsxref("Array.prototype.sort()")}} isn't either {{jsxref("undefined")}} or a function which compares its operands.

## Message

```
TypeError: The comparison function must be either a function or undefined (V8-based)
TypeError: invalid Array.prototype.sort argument (Firefox)
TypeError: Array.prototype.sort requires the comparator argument to be a function or undefined (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The argument of {{jsxref("Array.prototype.sort()")}} is expected to be either {{jsxref("undefined")}} or a function which compares its operands.

## Examples

### Invalid cases

```js example-bad
[1, 3, 2].sort(5);  // TypeError

const cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || 'asc');  // TypeError
```

### Valid cases

```js example-good
[1, 3, 2].sort();   // [1, 2, 3]

const cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || 'asc']); // [1, 2, 3]
```

## See also

- {{jsxref("Array.prototype.sort()")}}
