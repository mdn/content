---
title: "GPUDevice: createRenderPipelineAsync() method"
short-title: createRenderPipelineAsync()
slug: Web/API/GPUDevice/createRenderPipelineAsync
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createRenderPipelineAsync
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createRenderPipelineAsync()`** method of the
{{domxref("GPUDevice")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPURenderPipeline")}}, which can control the vertex and fragment shader stages and be used in a {{domxref("GPURenderPassEncoder")}} or {{domxref("GPURenderBundleEncoder")}}, once the pipeline can be used without any stalling.

> **Note:** It is generally preferable to use this method over {{domxref("GPUDevice.createRenderPipeline()")}} whenever possible, as it prevents blocking of GPU operation execution on pipeline compilation.

## Syntax

```js-nolint
createRenderPipelineAsync(descriptor)
```

### Parameters

- `descriptor`
  - : See the descriptor definition for the [`GPUDevice.createRenderPipeline()`](/en-US/docs/Web/API/GPUDevice/createRenderPipeline#syntax) method.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPURenderPipeline")}} object instance when the created pipeline is ready to be used without additional delay.

### Validation

If pipeline creation fails and the resulting pipeline becomes invalid as a result, the returned promise rejects with a {{domxref("GPUPipelineError")}}:

- If this is due to an internal error, the {{domxref("GPUPipelineError")}} will have a `reason` of `"internal"`.
- If this is due to a validation error, the {{domxref("GPUPipelineError")}} will have a `reason` of `"validation"`.

A validation error can occur if any of the following are false:

- For `depthStencil` objects:
  - `format` is a [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) format.
  - If `depthWriteEnabled` is `true` or `depthCompare` is not `"always"`, `format` has a depth component.
  - If `stencilFront` or `stencilBack`'s properties are not at their default values, `format` has a stencil component.
- For `fragment` objects:
  - `targets.length` is less than or equal to the {{domxref("GPUDevice")}}'s `maxColorAttachments` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
  - For each `target`, `writeMask`'s numeric equivalent is less than 16.
  - If any of the used blend factor operations use the source alpha channel (for example `"src-alpha-saturated"`), the output has an alpha channel (that is, it must be a `vec4`).

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

The following example shows a basic example of the construction of a valid render pipeline descriptor object, which is then used to create a {{domxref("GPURenderPipeline")}} via a `createRenderPipelineAsync()` call.

```js
async function init() {
  // ...

  const vertexBuffers = [
    {
      attributes: [
        {
          shaderLocation: 0, // position
          offset: 0,
          format: "float32x4",
        },
        {
          shaderLocation: 1, // color
          offset: 16,
          format: "float32x4",
        },
      ],
      arrayStride: 32,
      stepMode: "vertex",
    },
  ];

  const pipelineDescriptor = {
    vertex: {
      module: shaderModule,
      entryPoint: "vertex_main",
      buffers: vertexBuffers,
    },
    fragment: {
      module: shaderModule,
      entryPoint: "fragment_main",
      targets: [
        {
          format: navigator.gpu.getPreferredCanvasFormat(),
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },
    layout: "auto",
  };

  const renderPipeline = await device.createRenderPipelineAsync(
    pipelineDescriptor,
  );

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
