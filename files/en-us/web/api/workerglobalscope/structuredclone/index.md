---
title: "WorkerGlobalScope: structuredClone() method"
short-title: structuredClone()
slug: Web/API/WorkerGlobalScope/structuredClone
page-type: web-api-instance-method
browser-compat: api.structuredClone
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`structuredClone()`** method of the {{domxref("WorkerGlobalScope")}} interface creates a {{Glossary("deep copy")}} of a given value using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

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

A {{Glossary("deep copy")}} of the original `value`.

### Exceptions

- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if any part of the input value is not serializable.

## Description

See {{domxref("Window.structuredClone()")}} for details of this function.

## Examples

See {{domxref("Window.structuredClone()")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `structuredClone`](https://github.com/zloirock/core-js#structuredclone) is available in [`core-js`](https://github.com/zloirock/core-js)
- [Structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured clone polyfill](https://github.com/ungap/structured-clone)
