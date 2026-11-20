---
title: Array initializer
slug: Web/JavaScript/Reference/Operators/Array_initializer
page-type: javascript-language-feature
browser-compat: javascript.operators.array_initializer
sidebar: jssidebar
---

An **array initializer** is a comma-delimited list of zero or more expressions that evaluate to array elements, enclosed in square brackets (`[]`). Arrays can also be initialized using the {{jsxref("Array/Array", "Array()")}} constructor.

{{InteractiveExample("JavaScript Demo: Array initializer")}}

```js interactive-example
const array1 = ["foo", 42];
console.log(array1[1]);
// Expected output: 42

const array2 = [...array1, "something else"];
console.log(array2[2]);
// Expected output: "something else"
```

## Syntax

```js-nolint
[
  "foo",
  42,
  {},
  [],
  () => {},
  /* empty slot */,
  ...spreadElement,
]
```

## Description

An array initializer is an expression that describes the initialization of an {{jsxref("Array")}}. JavaScript arrays can contain elements of arbitrary and mixed types.

[Trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are allowed. However, other than the trailing comma, other commas that aren't surrounded by two expressions create empty slots and cause the array to become [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

## Examples

### Creating arrays

An empty array with no elements can be created like this:

```js
const array = [];
```

Add elements to it, delimited by commas. You can also nest further objects, arrays, or other expressions

```js
const array = [
  365 * 24 * 60,
  "minutes",
  365 * 24 * 60 - 600,
  { moments: "so dear" },
];
```

### Spread elements

Array literals support the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). It iterates over an expression and adds each yielded element to the new array without copying the element itself. This can be used to create a [shallow copy](/en-US/docs/Glossary/Shallow_copy) of another collection, or to create arrays from non-array iterables like {{jsxref("Map")}} or {{jsxref("Set")}}.

```js
const array1 = [3, 1, 4];
const array2 = [1, 5, 9];

const clonedArray1 = [...array1];
// [3, 1, 4]

const mergedArray = [...array1, ...array2];
// [3, 1, 4, 1, 5, 9]

const unique = [...new Set(mergedArray)];
// [3, 1, 4, 5, 9]
```

### Sparse arrays

> [!WARNING]
> Sparse arrays have degraded performance and [inconsistent behavior](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots). They are almost always unintended. If you must create arrays with empty slots, add comments.

```js-nolint
const sparse1 = [/* empty */, 1];
const sparse2 = [0, /* empty */, 2];
const sparse3 = [0, 1, /* empty */, ];

console.log(sparse1.length, sparse2.length, sparse3.length); // 2 3 3
console.log(0 in sparse1); // false
console.log(1 in sparse2); // false
console.log(2 in sparse3); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
