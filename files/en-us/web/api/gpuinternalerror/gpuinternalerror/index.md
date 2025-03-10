---
title: "GPUInternalError: GPUInternalError() constructor"
short-title: GPUInternalError()
slug: Web/API/GPUInternalError/GPUInternalError
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.GPUInternalError.GPUInternalError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUInternalError()`** constructor creates a new
{{domxref("GPUInternalError")}} object instance.

## Syntax

```js-nolint
new GPUInternalError(message)
```

### Parameters

- `message`
  - : A string providing a human-readable message that explains why the error occurred.

## Examples

A developer would not manually use the constructor to create a `GPUInternalError` object. The user agent uses this constructor to create an appropriate object when an internal error is surfaced by {{domxref("GPUDevice.popErrorScope")}} or the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

See the main [`GPUInternalError`](/en-US/docs/Web/API/GPUInternalError#examples) page for an example involving a `GPUInternalError` object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
