---
title: GPUError
slug: Web/API/GPUError
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUError`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is the base interface for errors surfaced by {{domxref("GPUDevice.popErrorScope")}} and the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string providing a human-readable message that explains why the error occurred.

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
