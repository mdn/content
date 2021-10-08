---
title: Transferable objects
slug: Glossary/Transferable_objects
tags:
  - Transferable
  - Workers
---
Browsers implement a method of passing certain types of objects to or from a {{domxref("Web Workers API", "Web Worker","","true")}} with high performance. **Transferable objects** are transferred from one context to another with a zero-copy operation, which results in a vast performance improvement when sending large data sets. Think of it as pass-by-reference if you're from the C/C++ world. However, unlike pass-by-reference, the 'version' from the calling context is no longer available once transferred. Its ownership is transferred to the new context. For example, when transferring an {{jsxref("ArrayBuffer")}} from your main app to a worker script, the original {{jsxref("ArrayBuffer")}} is cleared and no longer usable. Its content is (quite literally) transferred to the worker context.

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## See also

- [Transferable Objects: Lightning Fast!](https://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast)
- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Transferable objects in the HTML specification](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects)
