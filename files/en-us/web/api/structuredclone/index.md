---
title: structuredClone() global function
short-title: structuredClone()
slug: Web/API/structuredClone
page-type: web-api-global-function
browser-compat: api.structuredClone
---

{{APIRef("HTML DOM")}}

The global **`structuredClone()`** method creates a [deep clone](/en-US/docs/Glossary/Deep_copy) of a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

The method also allows [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) in the original value to be _transferred_ rather than cloned to the new object.
Transferred objects are detached from the original object and attached to the new object; they are no longer accessible in the original object.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameters

- `value`
  - : The object to be cloned.
    This can be any [structured-cloneable type](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `transfer`
      - : An array of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) that will be moved rather than cloned to the returned object.

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

[Transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) (only) can be transferred rather than duplicated in the cloned object, using the `transfer` property of the `options` parameter. Transferring makes the original object unusable.

> **Note:** A scenario where this might be useful is when asynchronously validating some data in a buffer before saving it.
> To avoid the buffer being modified before the data is saved, you can clone the buffer and validate that data.
> If you also _transfer_ the data, any attempts to modify the original buffer will fail, preventing its accidental misuse.

The following code shows how to clone an array and transfer its underlying resources to the new object.
On return, the original `uInt8Array.buffer` will be cleared.

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

You can clone any number of objects and transfer any subset of those objects.
For example, the code below would transfer `arrayBuffer1` from the passed in value, but not `arrayBuffer2`.

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## Examples

### Cloning an object

In this example, we clone an object with one member, which is an array. After cloning, changes to each object do not affect the other object.

```js
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

### Transferring an object

In this example we create an {{jsxref("ArrayBuffer")}} and then clone the object it is a member of, transferring the buffer. We can use the buffer in the cloned object, but if we try to use the original buffer we will get an exception.

```js
// Create an ArrayBuffer with a size in bytes
const buffer1 = new ArrayBuffer(16);

const object1 = {
  buffer: buffer1,
};

// Clone the object containing the buffer, and transfer it
const object2 = structuredClone(object1, { transfer: [buffer1] });

// Create an array from the cloned buffer
const int32View2 = new Int32Array(object2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// Creating an array from the original buffer throws a TypeError
const int32View1 = new Int32Array(object1.buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `structuredClone`](https://github.com/zloirock/core-js#structuredclone) is available in [`core-js`](https://github.com/zloirock/core-js)
- [Structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured clone polyfill](https://github.com/ungap/structured-clone)
