---
title: Transferable objects
slug: Glossary/Transferable_objects
tags:
  - Transferable
  - Workers
---
**Transferable objects** are objects for which the underlying resources can be transferred from one context to another using a zero-copy (high performance) operation.

Transfer operations detach specified resources from the original object and move them to the new context.
Following a transfer, attempts to use transferred objects in the original context will throw an exception.

For example, {{jsxref("ArrayBuffer")}} is a _transferrable object_ that might be moved from a main app to a {{domxref("Web Workers API", "web worker script","","true")}}.
After transfer the memory from the original `ArrayBuffer` is (quite literally) moved to another version of `ArrayBuffer` in the worker context.
The `ArrayBuffer` in the original context is cleared/has no access to transferred memory. 

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

// Transfer the underlying buffer to a worker
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

Similarly, the {{domxref("structuredClone()")}} method can be used to make deep copies of a transferrable object, and may additionally transfer specified resources to the cloned object.
This is useful when you want to safely perform operations on some data and also fail attempts to access the data while performing the operation.
In this case you clone and transfer the object and peform the operations on the copied data: attempts to access the original object will fail.


## See also

- [Transferable Objects: Lightning Fast!](https://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast)
- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Transferable objects in the HTML specification](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)