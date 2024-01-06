---
title: "GPUPipelineError: GPUPipelineError() constructor"
short-title: GPUPipelineError()
slug: Web/API/GPUPipelineError/GPUPipelineError
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.GPUPipelineError.GPUPipelineError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUPipelineError()`** constructor creates a new
{{domxref("GPUPipelineError")}} object instance.

## Syntax

```js-nolint
new GPUPipelineError(message, options)
```

### Parameters

- `message` {{optional_inline}}
  - : A string providing a human-readable message that explains why the error occurred. If not specified, `message` defaults to an empty string (`""`).
- `options`
  - : An object, which can contain the following properties:
    - `reason`
      - : An enumerated value that defines the reason the pipeline creation failed in a machine-readable way. The value can be one of:
        - `"internal"`: Pipeline creation failed because of an internal error (see {{domxref("GPUInternalError")}} for more information about these kinds of error).
        - `"validation"`: Pipeline creation failed because of a validation error (see {{domxref("GPUValidationError")}} for more information about these kinds of error).

## Examples

A developer would not manually use the constructor to create a `GPUPipelineError` object. The user agent uses this constructor to create an appropriate object when a {{jsxref("Promise")}} returned by a {{domxref("GPUDevice.createComputePipelineAsync()")}} or {{domxref("GPUDevice.createRenderPipelineAsync()")}} call rejects, signalling a pipeline failure.

See the main [`GPUPipelineError`](/en-US/docs/Web/API/GPUPipelineError#examples) page for an example involving a `GPUPipelineError` object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
