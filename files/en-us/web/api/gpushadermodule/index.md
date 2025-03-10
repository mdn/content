---
title: GPUShaderModule
slug: Web/API/GPUShaderModule
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUShaderModule
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUShaderModule`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents an internal shader module object, a container for [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) shader code that can be submitted to the GPU for execution by a pipeline.

A `GPUShaderModule` object instance is created using {{domxref("GPUDevice.createShaderModule()")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUShaderModule.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPUShaderModule.getCompilationInfo", "getCompilationInfo()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUCompilationInfo")}} object containing messages generated during the `GPUShaderModule`'s compilation.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), our shader module is created using the following code:

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;

async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();

  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  let device = await adapter.requestDevice();

  // ...
  // later on

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
