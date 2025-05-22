---
title: GPUPipelineError
slug: Web/API/GPUPipelineError
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUPipelineError
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUPipelineError`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} describes a pipeline failure. This is the value received when a {{jsxref("Promise")}} returned by a {{domxref("GPUDevice.createComputePipelineAsync()")}} or {{domxref("GPUDevice.createRenderPipelineAsync()")}} call rejects.

{{InheritanceDiagram}}

## Constructor

- {{domxref("GPUPipelineError.GPUPipelineError", "GPUPipelineError()")}} {{Experimental_Inline}}
  - : Creates a new `GPUPipelineError` object instance.

## Instance properties

_Inherits properties from its parent, {{domxref("DOMException")}}._

- {{domxref("GPUPipelineError.reason", "reason")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An enumerated value that defines the reason the pipeline creation failed in a machine-readable way.

## Examples

<!-- cSpell:ignore maijn -->

In the following snippet we are attempting to create a {{domxref("GPUComputePipeline")}} using {{domxref("GPUDevice.createComputePipelineAsync()")}}. However, we have misspelt our compute pipeline `entryPoint` as `"maijn"` (it should be `"main"`), therefore pipeline creation fails, and our `catch` block prints the resulting reason and error message to the console.

```js
// …

let computePipeline;

try {
  computePipeline = await device.createComputePipelineAsync({
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    compute: {
      module: shaderModule,
      entryPoint: "maijn",
    },
  });
} catch (error) {
  // error is a GPUPipelineError object instance
  console.error(error.reason);
  console.error(`Pipeline creation failed: ${error.message}`);
}

// …
```

In this case, the given `reason` is `"Validation"`, and the `message` is `"Entry point "maijn" doesn't exist in the shader module [ShaderModule]."`

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
