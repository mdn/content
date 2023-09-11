---
title: "GPUPipelineError: reason property"
short-title: reason
slug: Web/API/GPUPipelineError/reason
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUPipelineError.reason
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`reason`** read-only property of the
{{domxref("GPUPipelineError")}} interface defines the reason the pipeline creation failed in a machine-readable way.

## Value

An enumerated value that can be one of:

- `"internal"`
  - : Pipeline creation failed because of an internal error (see {{domxref("GPUInternalError")}} for more information about these kinds of error.)
- `"validation"`
  - : Pipeline creation failed because of a validation error (see {{domxref("GPUValidationError")}} for more information about these kinds of error.)

## Examples

See the main [`GPUPipelineError`](/en-US/docs/Web/API/GPUPipelineError#examples) page for an example involving a `GPUPipelineError` object instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
