---
title: "GPUValidationError: GPUValidationError() constructor"
short-title: GPUValidationError()
slug: Web/API/GPUValidationError/GPUValidationError
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.GPUValidationError.GPUValidationError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUValidationError()`** constructor creates a new
{{domxref("GPUValidationError")}} object instance.

## Syntax

```js-nolint
new GPUValidationError(message)
```

### Parameters

- `message`
  - : A string providing a human-readable message that explains why the error occurred.

## Examples

A developer would not manually use the constructor to create a `GPUValidationError` object. The user agent uses this constructor to create an appropriate object when a validation error is surfaced by {{domxref("GPUDevice.popErrorScope")}} or the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

See the main [`GPUValidationError`](/en-US/docs/Web/API/GPUValidationError#examples) page for a specific example involving a `GPUValidationError` object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
