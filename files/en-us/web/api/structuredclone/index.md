---
title: structuredClone()
slug: Web/API/structuredClone
page-type: web-api-global-function
tags:
  - API
  - DOM
  - Method
  - NeedsCompatTable
  - Reference
  - structuredClone
  - Polyfill
browser-compat: api.structuredClone
---
{{APIRef("HTML DOM")}}

The global **`structuredClone()`** method creates a [deep clone](/en-US/docs/Glossary/Deep_copy) of a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

The method also allows {{Glossary("transferable objects")}} in the original value to be _transferred_ rather than cloned to the new object.
Transferred objects are detached from the original object and attached to the new object; they are no longer accessible in the original object.

## Syntax

```js
structuredClone(value)
structuredClone(value, transferables)
```

### Parameters

- `value`
  - : The object to be cloned.
    This can be any [structured-clonable type](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).
- `transferables` {{optional_inline}}
  - : An array of {{Glossary("transferable objects")}} in `value` that will be moved rather than cloned to the returned object.

### Return value

The returned value is a [deep copy](/en-US/docs/Glossary/Deep_copy) of the original `value`.

### Exceptions

- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if any part of the input value is not serializable.

## Description

This function can be used to [deep copy](/en-US/docs/Glossary/Deep_copy) JavaScript values.
It also supports circular references, as shown below:

```js
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
```

### Transferring values

{{Glossary("Transferable objects")}} (only) can be transferred rather than duplicated in the cloned object, using the optional parameter's `transfer` value.
Transferring makes the original object unusable.

> **Note:** A scenario where this might be useful is when asynchronously validating some data in a buffer before saving it.
> To avoid the buffer being modified before the data is saved, you can clone the buffer and validate that data.
> If you also _transfer_ the data, any attempts to modify the original buffer will fail, preventing its accidental misuse.

The following code shows how to clone an array and transfer its underlying resources to the new object.
On return, the original `uInt8Array.buffer` will be cleared.

```js
const uInt8Array = new Uint8Array(1024 * 1024 * 16); // 16MB
for (let i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

const transferred = structuredClone(uInt8Array, { transfer: [uInt8Array.buffer] });
console.log(uInt8Array.byteLength);  // 0
```

You can clone any number of objects and transfer any subset of those objects.
For example, the code below would transfer `arrayBuffer1` from the passed in value, but not `arrayBuffer2`.

```js
const transferred = structuredClone(
   { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
   { transfer: [arrayBuffer1] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `structuredClone`](https://github.com/zloirock/core-js#structuredclone) is available in [`core-js`](https://github.com/zloirock/core-js)
- [Structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured clone polyfill](https://github.com/ungap/structured-clone)
