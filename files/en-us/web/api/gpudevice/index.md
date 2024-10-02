---
title: GPUDevice
slug: Web/API/GPUDevice
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUDevice
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUDevice`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a logical GPU device. This is the main interface through which the majority of WebGPU functionality is accessed.

A `GPUDevice` object is requested using the {{domxref("GPUAdapter.requestDevice()")}} method.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("GPUDevice.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}

  - : A {{domxref("GPUSupportedFeatures")}} object that describes additional functionality supported by the device.

- {{domxref("GPUDevice.label", "label")}} {{Experimental_Inline}}

  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

- {{domxref("GPUDevice.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}

  - : A {{domxref("GPUSupportedLimits")}} object that describes the limits supported by the device.

- {{domxref("GPUDevice.lost", "lost")}} {{Experimental_Inline}} {{ReadOnlyInline}}

  - : Contains a {{jsxref("Promise")}} that remains pending throughout the device's lifetime and resolves with a {{domxref("GPUDeviceLostInfo")}} object when the device is lost.

- {{domxref("GPUDevice.queue", "queue")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the primary {{domxref("GPUQueue")}} for the device.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("GPUDevice.createBindGroup", "createBindGroup()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUBindGroup")}} based on a {{domxref("GPUBindGroupLayout")}} that defines a set of resources to be bound together in a group and how those resources are used in shader stages.

- {{domxref("GPUDevice.createBindGroupLayout", "createBindGroupLayout()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUBindGroupLayout")}} that defines the structure and purpose of related GPU resources such as buffers that will be used in a pipeline, and is used as a template when creating {{domxref("GPUBindGroup")}}s.

- {{domxref("GPUDevice.createBuffer", "createBuffer()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUBuffer")}} in which to store raw data to use in GPU operations.

- {{domxref("GPUDevice.createCommandEncoder", "createCommandEncoder()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUCommandEncoder")}}, which is used to encode commands to be issued to the GPU.

- {{domxref("GPUDevice.createComputePipeline", "createComputePipeline()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUComputePipeline")}} that can control the compute shader stage and be used in a {{domxref("GPUComputePassEncoder")}}.

- {{domxref("GPUDevice.createComputePipelineAsync", "createComputePipelineAsync()")}} {{Experimental_Inline}}

  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUComputePipeline")}}, which can control the compute shader stage and be used in a {{domxref("GPUComputePassEncoder")}}, once the pipeline can be used without any stalling.

- {{domxref("GPUDevice.createPipelineLayout", "createPipelineLayout()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUPipelineLayout")}} that defines the {{domxref("GPUBindGroupLayout")}}s used by a pipeline. {{domxref("GPUBindGroup")}}s used with the pipeline during command encoding must have compatible {{domxref("GPUBindGroupLayout")}}s.

- {{domxref("GPUDevice.createQuerySet", "createQuerySet()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUQuerySet")}} that can be used to record the results of queries on passes, such as occlusion or timestamp queries.

- {{domxref("GPUDevice.createRenderBundleEncoder", "createRenderBundleEncoder()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPURenderBundleEncoder")}} that can be used to pre-record bundles of commands. These can be reused in {{domxref("GPURenderPassEncoder")}}s via the {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} method, as many times as required.

- {{domxref("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPURenderPipeline")}} that can control the vertex and fragment shader stages and be used in a {{domxref("GPURenderPassEncoder")}} or {{domxref("GPURenderBundleEncoder")}}.

- {{domxref("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}} {{Experimental_Inline}}

  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPURenderPipeline")}}, which can control the vertex and fragment shader stages and be used in a {{domxref("GPURenderPassEncoder")}} or {{domxref("GPURenderBundleEncoder")}}, once the pipeline can be used without any stalling.

- {{domxref("GPUDevice.createSampler", "createSampler()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUSampler")}}, which controls how shaders transform and filter texture resource data.

- {{domxref("GPUDevice.createShaderModule", "createShaderModule()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUShaderModule")}} from a string of WGSL source code.

- {{domxref("GPUDevice.createTexture", "createTexture()")}} {{Experimental_Inline}}

  - : Creates a {{domxref("GPUTexture")}} in which to store texture data to use in GPU rendering operations.

- {{domxref("GPUDevice.destroy", "destroy()")}} {{Experimental_Inline}}

  - : Destroys the device, preventing further operations on it.

- {{domxref("GPUDevice.importExternalTexture", "importExternalTexture()")}} {{Experimental_Inline}}

  - : Takes an {{domxref("HTMLVideoElement")}} as an input and returns a {{domxref("GPUExternalTexture")}} wrapper object containing a snapshot of the video that can be used in GPU rendering operations.

- {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} {{Experimental_Inline}}

  - : Pops an existing GPU error scope from the error scope stack and returns a {{jsxref("Promise")}} that resolves to an object ({{domxref("GPUInternalError")}}, {{domxref("GPUOutOfMemoryError")}}, or {{domxref("GPUValidationError")}}) describing the first error captured in the scope, or `null` if no error occurred.

- {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} {{Experimental_Inline}}
  - : Pushes a new GPU error scope onto the device's error scope stack, allowing you to capture errors of a particular type.

## Events

- {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} {{Experimental_Inline}}
  - : Fired when an error is thrown that has not been observed by a GPU error scope, to provide a way to report unexpected errors. Known error cases should be handled using {{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} and {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}}.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  //...
}
```

See the individual member pages listed above and the following demo sites for a lot more examples of `GPUDevice` usage:

- [Basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU samples](https://webgpu.github.io/webgpu-samples/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
