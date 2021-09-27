---
title: structuredClone()
slug: Web/API/structuredClone
tags:
  - API
  - DOM
  - Method
  - NeedsCompatTable
  - Reference
  - structuredClone
browser-compat: api.structuredClone
---
{{APIRef("HTML DOM")}}

The global **`structuredClone()`** method deep clones a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

## Syntax

```js
const clonedValue = structuredClone(value[, { transfer }]);
```

### Parameters

- `value`
  - : The value to be cloned. This can be any [structured-clonable
    type](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- `transfer` {{optional_inline}}
  - : A sequence of objects that are [transferred](/en-US/docs/Web/API/Transferable) with value. The
    ownership of these objects is transfered from the input value to the cloned value
    that is returned.

### Return value

The returned `clonedValue` is a clone of the original passed
`value`, with transfered values for items passed in the
`transfer` array.

## Description

This function can be used to deep copy JavaScript values. The structured clone algorithm
also supports circular references. The below example demonstrates this:

```js
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = self.structuredClone(original);

console.assert(clone !== original); // object are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
