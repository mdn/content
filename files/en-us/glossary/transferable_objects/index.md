---
title: Transferable objects
slug: Glossary/Transferable_objects
tags:
  - Transferable
  - Serializable
  - Structured clone
  - Workers
---

**Transferable objects** are objects that own resources that can be _transferred_ from one context to another, ensuring that the resources are only available in one context at a time.
Following a transfer, the original object is no longer usable; it no longer points to the transferred resource, and any attempt to read or write the object will throw an exception.

_Transferable objects_ are commonly used to share resources that can only be safely exposed to a single JavaScript thread at a time.
For example, an {{jsxref("ArrayBuffer")}} is a transferable object that owns a block of memory.
When such a buffer is transferred between threads, the associated memory resource is detached from the original buffer and attached to the buffer object created in the new thread.
The buffer object in the original thread is no longer usable because it no longer owns a memory resource.

Transferring may also be used when creating deep copies of objects with {{domxref("structuredClone()")}}.
Following the cloning operation, the transferred resources are moved rather than copied to the cloned object.

The mechanism used to transfer an object's resources depends on the object.
For example, when an {{jsxref("ArrayBuffer")}} is transferred between threads, the memory resource that it points to is _literally_ moved between contexts in a fast and efficient zero-copy operation.
Other objects may be transferred by copying the associated resource and then deleting it from the old context.

Not all objects are transferable.
A list of transferable objects is [provided below](#supported_objects).

## Transferring objects between threads

The code below demonstrates how transferring works when sending a message from a main thread to a {{domxref("Web Workers API", "web worker thread","","true")}}.
The {{jsxref("Uint8Array")}} is copied (duplicated) in the worker while its buffer is transferred.
After transfer any attempt to read or write `uInt8Array` from the main thread will throw, but you can still check the `byteLength` to confirm it is now zero.

```js
// Create an 8MB "file" and fill it. 8MB = 1024 * 1024 * 8 B
const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
console.log(uInt8Array.byteLength);  // 8388608

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array, [uInt8Array.buffer]);
console.log(uInt8Array.byteLength);  // 0
```

> **Note:** [Typed arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) like {{jsxref("Int32Array")}} and {{jsxref("Uint8Array")}}, are {{Glossary("serializable object","serializable")}}, but not transferable.
> However their underlying buffer is an {{jsxref("ArrayBuffer")}}, which is a transferable object.
> We could have sent `uInt8Array.buffer` in the data parameter, but not `uInt8Array` in the transfer array.

### Transferring during a cloning operation

The code below shows a {{domxref("structuredClone()")}} operation where the underlying buffer is copied from the original object to the clone.

```js
const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength);  // 1024
console.log(clone.byteLength);  // 1024

original[0] = 1;
console.log(clone[0]);  // 0

// Transferring the Uint8Array would throw an exception as it is not a transferable object
// const transferred = structuredClone(original, {transfer: [original]});

// We can transfer Uint8Array.buffer.
const transferred = structuredClone(original, {transfer: [original.buffer]});
console.log(transferred.byteLength);  // 1024
console.log(transferred[0]);  // 1

// After transferring Uint8Array.buffer cannot be used.
console.log(original.byteLength);  // 0
```

## Supported objects

The items that various specifications indicate can be _transferred_ are:

- {{jsxref("ArrayBuffer")}}
- {{domxref("MessagePort")}}
- {{domxref("ReadableStream")}}
- {{domxref("WritableStream")}}
- {{domxref("TransformStream")}}
- {{domxref("AudioData")}}
- {{domxref("ImageBitmap")}}
- {{domxref("VideoFrame")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("RTCDataChannel")}}

Browser support should be indicated in the respective object's compatibility information by the `transferable` subfeature (see [`RTCDataChannel`](/en-US/docs/Web/API/RTCDataChannel#browser_compatibility) for an example).
At time of writing, not all transferable objects have been updated with this information.

> **Note:** Transferable objects are marked up in [Web IDL files](https://github.com/w3c/webref/tree/main/ed/idl) with the attribute `[Transferable]`.

## See also

- [Transferable Objects: Lightning Fast!](https://developer.chrome.com/blog/transferable-objects-lightning-fast/)
- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Transferable objects in the HTML specification](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
