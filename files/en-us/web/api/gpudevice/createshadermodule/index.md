---
title: "GPUDevice: createShaderModule() method"
short-title: createShaderModule()
slug: Web/API/GPUDevice/createShaderModule
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createShaderModule
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createShaderModule()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUShaderModule")}} from a string of [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) source code.

## Syntax

```js-nolint
createShaderModule(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `code`
      - : A string representing the WGSL source code for the shader module.
    - `hints` {{optional_inline}}

      - : A sequence of record types, with the structure `("string", compilationHint)`. These behave like [ordered maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). In each case, the `"string"` is a key used to identify or select the record, and the `compilationHint` is either a {{domxref("GPUPipelineLayout")}} object instance or an enumerated value of `"auto"`.

        The point of `hints` is to provide information about the pipeline layout as early as possible to improve performance. The idea is to maximize the amount of compilation that can be done once by `createShaderModule()`, rather than multiple times in multiple calls to {{domxref("GPUDevice.createComputePipeline()")}} and {{domxref("GPUDevice.createRenderPipeline()")}}.

        > [!NOTE]
        > Different implementations may handle `hints` in different ways, including possibly ignoring them entirely. Providing hints does not guarantee improved shader compilation performance on all browsers/systems.

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `sourceMap` {{optional_inline}}

      - : A source map definition to provide developer tool integration such as source-language debugging. WGSL names (identifiers) in source maps should follow the rules defined in [WGSL identifier comparison](https://gpuweb.github.io/gpuweb/wgsl/#identifier-comparison). If defined, the source map may be interpreted as a [source-map-v3 format](https://sourcemaps.info/spec.html).

        > [!NOTE]
        > Different implementations may handle `sourceMap`s in different ways, including possibly ignoring them entirely.

### Return value

A {{domxref("GPUShaderModule")}} object instance.

### Validation

The following criteria must be met when calling **`createShaderModule()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUShaderModule")}} object is returned:

- If your shader's WGSL code uses the half-precision floating-point type [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16), it includes `enable f16;` at the top, and the associated {{domxref("GPUDevice")}} is created with the `shader-f16` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) enabled.

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

  const device = await adapter.requestDevice();

  // …
  // later on

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
- The [WebGPU Shading Language specification](https://gpuweb.github.io/gpuweb/wgsl/)
