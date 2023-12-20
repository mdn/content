---
title: "GPUError: message property"
short-title: message
slug: Web/API/GPUError/message
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUError.message
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`message`** read-only property of the
{{domxref("GPUError")}} interface provides a human-readable message that explains why the error occurred.

## Value

A string.

## Examples

For usage examples of error objects based on `GPUError`, see:

- [`GPUDevice.popErrorScope`](/en-US/docs/Web/API/GPUDevice/popErrorScope#examples)
- [The `GPUDevice uncapturederror` event](/en-US/docs/Web/API/GPUDevice/uncapturederror_event#examples)
- {{domxref("GPUInternalError")}}, {{domxref("GPUOutOfMemoryError")}}, and {{domxref("GPUValidationError")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
