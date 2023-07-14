---
title: GPUInternalError
slug: Web/API/GPUInternalError
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUInternalError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUInternalError`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} describes an application error indicating that an operation did not pass the WebGPU API's validation constraints.

It represents one of the types of errors surfaced by {{domxref("GPUDevice.popErrorScope")}} and the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

Internal errors occur when something happens in the WebGPU implementation that wasn't caught by validation and wasn't clearly identifiable as an out-of-memory error. It generally means that an operation your code performed hit a system limit in a way that was difficult to express with WebGPU's [supported limits](/en-US/docs/Web/API/GPUSupportedLimits). The same operation might succeed on a different device. These can only be raised by pipeline creation, usually if the shader is too complex for the device.

{{InheritanceDiagram}}

## Constructor

- {{domxref("GPUInternalError.GPUInternalError", "GPUInternalError()")}} {{Experimental_Inline}}
  - : Creates a new `GPUInternalError` object instance.

## Instance properties

The `message` property is inherited from its parent, {{domxref("GPUError")}}:

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string providing a human-readable message that explains why the error occurred.

## Examples

The following example uses an error scope to capture a suspected validation error, logging it to the console.

```js
device.pushErrorScope("internal");

const module = device.createShaderModule({
  code: shader, // REALLY complex shader
});

device.popErrorScope().then((error) => {
  if (error) {
    // error is a GPUInternalError object instance
    module = null;
    console.error(`An error occurred while creating shader: ${error.message}`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
