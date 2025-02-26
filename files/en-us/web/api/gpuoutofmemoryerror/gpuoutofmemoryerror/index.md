---
title: "GPUOutOfMemoryError: GPUOutOfMemoryError() constructor"
short-title: GPUOutOfMemoryError()
slug: Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.GPUOutOfMemoryError.GPUOutOfMemoryError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUOutOfMemoryError()`** constructor creates a new
{{domxref("GPUOutOfMemoryError")}} object instance.

## Syntax

```js-nolint
new GPUOutOfMemoryError(message)
```

### Parameters

- `message`
  - : A string providing a human-readable message that explains why the error occurred.

## Examples

A developer would not manually use the constructor to create a `GPUOutOfMemoryError` object. The user agent uses this constructor to create an appropriate object when an out-of-memory error is surfaced by {{domxref("GPUDevice.popErrorScope")}} or the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

See the main [`GPUOutOfMemoryError`](/en-US/docs/Web/API/GPUOutOfMemoryError#examples) page for a specific example involving a `GPUOutOfMemoryError` object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
