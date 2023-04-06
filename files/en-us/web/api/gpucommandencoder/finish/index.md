---
title: "GPUCommandEncoder: finish() method"
short-title: finish()
slug: Web/API/GPUCommandEncoder/finish
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.finish
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`finish()`** method of the
{{domxref("GPUCommandEncoder")}} interface completes recording of the command sequence encoded on this `GPUCommandEncoder`, returning a corresponding {{domxref("GPUCommandBuffer")}}.

## Syntax

```js-nolint
finish()
finish(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object that can contain the following properties:
    - `label` {{optional_inline}}
      - : A string providing a label for the returned {{domxref("GPUCommandBuffer")}} that can be used to identify it, for example in {{domxref("GPUError")}} messages or console warnings.

### Return value

A {{domxref("GPUCommandBuffer")}} object instance.

### Validation

The following criteria must be met when calling **`finish()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid:

- There are no active debug groups (i.e. started via {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}}).
- The {{domxref("GPUCommandEncoder")}} is in an open state — this means that:
  - There are no child {{domxref("GPUComputePassEncoder")}} or {{domxref("GPURenderPassEncoder")}}s active that have not been `end()`ed.
  - The {{domxref("GPUCommandEncoder")}} has not already had `finish()` called on it (in which case it cannot be used to encode any more commands).

## Examples

```js
// ...

const commandBuffer = commandEncoder.finish();
device.queue.submit([commandBuffer]);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
