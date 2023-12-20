---
title: GPUValidationError
slug: Web/API/GPUValidationError
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUValidationError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUValidationError`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} describes an application error indicating that an operation did not pass the WebGPU API's validation constraints.

It represents one of the types of errors surfaced by {{domxref("GPUDevice.popErrorScope")}} and the {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} event.

Validation errors occur whenever invalid inputs are given to a WebGPU call. These are consistent, predictable, and should not occur provided your app is well-formed. They will occur in the same way on every device your code runs on, so once you've fixed any errors that show up during development you probably don't need to observe them directly most of the time. An exception to that rule is if you're consuming user-supplied assets, shaders, etc., in which case watching for validation errors while loading could be helpful.

> **Note:** We have attempted to provide useful information to help you understand why validation errors are occurring in your WebGPU code in "Validation" sections where appropriate, which list criteria to meet to avoid validation errors. See for example the [`GPUDevice.createBindGroup()` Validation section](/en-US/docs/Web/API/GPUDevice/createBindGroup#validation).

{{InheritanceDiagram}}

## Constructor

- {{domxref("GPUValidationError.GPUValidationError", "GPUValidationError()")}} {{Experimental_Inline}}
  - : Creates a new `GPUValidationError` object instance.

## Instance properties

The `message` property is inherited from its parent, {{domxref("GPUError")}}:

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string providing a human-readable message that explains why the error occurred.

## Examples

The following example uses an error scope to capture a suspected validation error, logging it to the console.

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // Invalid, maxAnisotropy must be at least 1.
});

device.popErrorScope().then((error) => {
  if (error) {
    // error is a GPUValidationError object instance
    sampler = null;
    console.error(`An error occurred while creating sampler: ${error.message}`);
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
