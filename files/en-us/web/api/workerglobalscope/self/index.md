---
title: "WorkerGlobalScope: self property"
short-title: self
slug: Web/API/WorkerGlobalScope/self
page-type: web-api-instance-property
browser-compat: api.WorkerGlobalScope.self
---

{{APIRef("Web Workers API")}}

The **`self`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns a reference to the `WorkerGlobalScope` itself. Most of the time it is a specific scope like {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, or {{domxref("ServiceWorkerGlobalScope")}}.

## Value

A global scope object (differs depending on the type of worker you are dealing with, as indicated above).

## Examples

If you called

```js
console.log(self);
```

inside a worker, you will get a worker global scope of the same type as that worker object written to the console — something like the following:

```plain
DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      <function scope>
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
// etc. etc.
```

This provides a full list of the objects available to that worker scope, so it is quite a useful test if you want to see whether something is available to your worker or not. We also maintain a list of [Functions and classes available to Web Workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("WorkerGlobalScope")}}
