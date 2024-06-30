---
title: "GPUDevice: createRenderPipeline() method"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createRenderPipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`createRenderPipeline()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPURenderPipeline")}} that can control the vertex and fragment shader stages and be used in a {{domxref("GPURenderPassEncoder")}} or {{domxref("GPURenderBundleEncoder")}}.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `depthStencil` {{optional_inline}}
      - : An object (see [`depthStencil` object structure](#depthstencil_object_structure)) describing depth-stencil properties including testing, operations, and bias.
    - `fragment` {{optional_inline}}
      - : An object (see [`fragment` object structure](#fragment_object_structure)) describing the fragment shader entry point of the pipeline and its output colors. If no fragment shader entry point is defined, the pipeline will not produce any color attachment outputs, but it still performs rasterization and produces depth values based on the vertex position output. Depth testing and stencil operations can still be used.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `layout`
      - : Defines the layout (structure, purpose, and type) of all the GPU resources (buffers, textures, etc.) used during the execution of the pipeline. Possible values are:
        - A {{domxref("GPUPipelineLayout")}} object, created using {{domxref("GPUDevice.createPipelineLayout()")}}, which allows the GPU to figure out how to run the pipeline most efficiently ahead of time.
        - A string of `"auto"`, which causes the pipeline to generate an implicit bind group layout based on any bindings defined in the shader code. If `"auto"` is used, the generated bind group layouts may only be used with the current pipeline.
    - `multisample` {{optional_inline}}
      - : An object (see [`multisample` object structure](#multisample_object_structure)) describing how the pipeline interacts with a render pass's multisampled attachments.
    - `primitive` {{optional_inline}}
      - : An object (see [`primitive` object structure](#primitive_object_structure)) describing how a pipeline constructs and rasterizes primitives from its vertex inputs.
    - `vertex`
      - : An object (see [`vertex` object structure](#vertex_object_structure)) describing the vertex shader entry point of the pipeline and its input buffer layouts.

### `depthStencil` object structure

The `depthStencil` object can contain the following properties:

- `depthBias` {{optional_inline}}
  - : A number representing a constant depth bias that is added to each fragment. If omitted, `depthBias` defaults to 0.
- `depthBiasClamp` {{optional_inline}}
  - : A number representing the maximum depth bias of a fragment. If omitted, `depthBiasClamp` defaults to 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : A number representing a depth bias that scales with the fragment's slope. If omitted, `depthBiasSlopeScale` defaults to 0.
- `depthCompare`

  - : An enumerated value specifying the comparison operation used to test fragment depths against `depthStencilAttachment` depth values. Possible values are:

    - `"never"`: Comparison tests never pass.
    - `"less"`: A provided value passes the comparison test if it is less than the sampled value.
    - `"equal"`: A provided value passes the comparison test if it is equal to the sampled value.
    - `"less-equal"`: A provided value passes the comparison test if it is less than or equal to the sampled value.
    - `"greater"`: A provided value passes the comparison test if it is greater than the sampled value.
    - `"not-equal"`: A provided value passes the comparison test if it is not equal to the sampled value.
    - `"greater-equal"`: A provided value passes the comparison test if it is greater than or equal to the sampled value.
    - `"always"`: Comparison tests always pass.

- `depthWriteEnabled`
  - : A boolean. A value of `true` specifies that the {{domxref("GPURenderPipeline")}} can modify `depthStencilAttachment` depth values after creation. Setting it to `false` means it cannot.
- `format`
  - : An enumerated value specifying the `depthStencilAttachment` format that the {{domxref("GPURenderPipeline")}} will be compatible with. See the specification's [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) section for all the available `format` values.
- `stencilBack` {{optional_inline}}

  - : An object that defines how stencil comparisons and operations are performed for back-facing primitives. Its properties can include:

    - `compare` {{optional_inline}}
      - : An enumerated value specifying the comparison operation used when testing fragments against `depthStencilAttachment` stencil values. Possible values are the same as for the `depthCompare` property; see above. If omitted, `compare` defaults to `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : An enumerated value specifying the stencil operation performed if the fragment depth comparison described by `depthCompare` fails. Possible values are:

        - `"decrement-clamp"`: Decrement the current render state stencil value, clamping it to 0.
        - `"decrement-wrap"`: Decrement the current render state stencil value, wrapping it to the maximum representable value of the `depthStencilAttachment`'s stencil aspect if the value goes below 0.
        - `"invert"`: Bitwise-invert the current render state stencil value.
        - `"increment-clamp"`: Increments the current render state stencil value, clamping it to the maximum representable value of the `depthStencilAttachment`'s stencil aspect.
        - `"increment-wrap"`: Increments the current render state stencil value, wrapping it to zero if the value exceeds the maximum representable value of the `depthStencilAttachment`'s stencil aspect.
        - `"keep"`: Keep the current stencil value.
        - `"replace"`: Set the stencil value to the current render state stencil value.
        - `"zero"`: Set the stencil value to 0.

        If omitted, `depthFailOp` defaults to `"keep"`.

        > **Note:**: The render state stencil value is initialized to 0 at the start of a render pass.

    - `failOp` {{optional_inline}}
      - : An enumerated value specifying the stencil operation performed if the fragment stencil comparison test described by `compare` fails. Possible and default values are the same as for `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : An enumerated value specifying the stencil operation performed if the fragment stencil comparison test described by `compare` passes. Possible and default values are the same as for `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : An object that defines how stencil comparisons and operations are performed for front-facing primitives. Its properties are the same as for `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : A bitmask controlling which `depthStencilAttachment` stencil value bits are read when performing stencil comparison tests. If omitted, `stencilReadMask` defaults to `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : A bitmask controlling which `depthStencilAttachment` stencil value bits are written to when performing stencil operations. If omitted, `stencilWriteMask` defaults to `0xFFFFFFFF`.

> **Note:** `depthStencilAttachment` values are specified during {{domxref("GPUCommandEncoder.beginRenderPass()")}} calls, when the {{domxref("GPURenderPipeline")}} is actually used to perform a render pass.

### `fragment` object structure

The `fragment` object contains an array of objects, each of which can contain the following properties:

- `constants` {{optional_inline}}

  - : A sequence of record types, with the structure `(id, value)`, representing override values for [WGSL constants that can be overridden in the pipeline](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). These behave like [ordered maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). In each case, the `id` is a key used to identify or select the record, and the `constant` is an enumerated value representing a WGSL.

    Depending on which constant you want to override, the `id` may take the form of the numeric ID of the constant, if one is specified, or otherwise the constant's identifier name.

    A code snippet providing override values for several overridable constants might look like this:

    ```js
    {
      // ...
      constants: {
        0: false,
        1200: 3.0,
        1300: 2.0,
        width: 20,
        depth: -1,
        height: 15,
      }
    }
    ```

- `entryPoint`
  - : The name of the function in the `module` that this stage will use to perform its work. The corresponding shader function must have the `@fragment` attribute to be identified as this entry point. See [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) for more information.
- `module`
  - : A {{domxref("GPUShaderModule")}} object containing the [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) code that this programmable stage will execute.
- `targets`

  - : an array of objects representing color states that represent configuration details for the colors output by the fragment shader stage. These objects can include the following properties:

    - `blend` {{optional_inline}}

      - : A object that describes a blend mode to be applied to the output color. `blend` has two properties:

        - `alpha`
          - : Describes the alpha channel value.
        - `color`
          - : Describes the color value.

        `alpha` and `color` both take an object as a value that can include the following properties:

        - `dstFactor` {{optional_inline}}

          - : An enumerated value that defines the blend factor operation to be performed on values from the target attachment. Possible values are:

            - `"constant"`
            - `"dst"`
            - `"dst-alpha"`
            - `"one"`
            - `"one-minus-dst"`
            - `"one-minus-src"`
            - `"one-minus-src-alpha"`
            - `"one-minus-dst-alpha"`
            - `"one-minus-constant"`
            - `"src"`
            - `"src-alpha"`
            - `"src-alpha-saturated"`
            - `"zero"`

            If omitted, `dstFactor` defaults to `"zero"`.

        - `operation` {{optional_inline}}

          - : An enumerated value that defines the algorithm used to combine source and destination blend factors, to calculate the final values written to the target attachment components. Possible values are:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            If omitted, `operation` defaults to `"add"`.

        - `srcFactor` {{optional_inline}}
          - : An enumerated value that defines the blend factor operation to be performed on values from the fragment shader. Possible values are the same as for `dstFactor`. If omitted, `srcFactor` defaults to `"one"`.

        > **Note:** For a detailed explanation of the algorithms defined by each `dstFactor`/`srcFactor` and `operation` enumerated value, see the [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) section of the specification.

    - `format`
      - : An enumerated value specifying the required format for output colors. See the specification's [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) section for all the available `format` values.
    - `writeMask` {{optional_inline}}

      - : One or more {{glossary("bitwise flags")}} defining the write mask to apply to the color target state. Possible flag values are:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        If omitted, `writeMask` defaults to `GPUColorWrite.ALL`.

        Note that multiple flags can be specified by separating values with pipe symbols, for example:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` object structure

The `multisample` object can contain the following properties:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : A boolean. A value of `true` indicates that a fragment's alpha channel should be used to generate a sample coverage mask. If omitted, `alphaToCoverageEnabled` defaults to `false`.
- `count` {{optional_inline}}

  - : A number that defines the number of samples per pixel. The pipeline will be compatible only with attachment textures (`colorAttachment`s and `depthStencilAttachment`s) with matching `sampleCounts` (see {{domxref("GPUTexture")}}).

    If omitted, `count` defaults to 1.

- `mask` {{optional_inline}}
  - : A bitmask that determines which samples are written to. If omitted, `mask` defaults to `0xFFFFFFFF`.

> **Note:** `colorAttachment` and `depthStencilAttachment` values are specified during {{domxref("GPUCommandEncoder.beginRenderPass()")}} calls, when the {{domxref("GPURenderPipeline")}} is actually used to perform a render pass.

### `primitive` object structure

The `primitive` object can contain the following properties:

- `cullMode` {{optional_inline}}

  - : An enumerated value that defines which polygon orientation will be culled, if any. Possible values are:

    - `"back"`: Back-facing polygons are culled.
    - `"front"`: Front-facing polygons are culled.
    - `"none"`: No polygons are culled.

    If omitted, `cullMode` defaults to `"none"`.

- `frontFace` {{optional_inline}}

  - : An enumerated value that defines which polygons are considered front-facing. Possible values are:

    - `"ccw"`: Polygons with vertices whose framebuffer coordinates are given in counter-clockwise order.
    - `"cw"`: Polygons with vertices whose framebuffer coordinates are given in clockwise order.

    If omitted, `frontFace` defaults to `"ccw"`.

- `stripIndexFormat` {{optional_inline}}

  - : An enumerated value that determines the index buffer format and primitive restart value in the case of pipelines with strip topologies (`"line-strip"` or `"triangle-strip"`). The primitive restart value specifies which index value indicates that a new primitive should be started rather than continuing to construct the strip with the prior indexed vertices. Possible values are:

    - `"uint16"`: Indicates a byte size of 2 and a primitive restart value of `0xFFFF`.
    - `"uint32"`: Indicates a byte size of 4 and a primitive restart value of `0xFFFFFFFF`.

    GPU primitive states that specify a strip primitive topology must specify a strip index format if they are used for indexed draws (for example, via {{domxref("GPURenderPassEncoder.drawIndexed()")}}) so that the primitive restart value that will be used is known at pipeline creation time. Pipelines with list primitive topologies (`"line-list"`, `"point-list"`, or `"triangle-list"`) should not specify a `stripIndexFormat` value. They will instead use the index format passed to, for example, {{domxref("GPURenderPassEncoder.setIndexBuffer()")}} when doing indexed rendering.

- `topology` {{optional_inline}}

  - : An enumerated value that defines the type of primitive to be constructed from the specified `vertex` inputs. Possible values are:

    - `"line-list"`: Each consecutive pair of two vertices defines a line primitive.
    - `"line-strip"`: Each vertex after the first defines a line primitive between it and the previous vertex.
    - `"point-list"`: Each vertex defines a point primitive.
    - `"triangle-list"`: Each consecutive triplet of three vertices defines a triangle primitive.
    - `"triangle-strip"`: Each vertex after the first two defines a triangle primitive between it and the previous two vertices.

    If omitted, `topology` defaults to `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}
  - : A boolean. A value of `true` indicates that depth clipping is disabled. If omitted, `unclippedDepth` defaults to `false`. Note that to control depth clipping, the `depth-clip-control` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} must be enabled in the {{domxref("GPUDevice")}}.

> **Note:** `frontFace` and `cullMode` have no effect on `"point-list"`, `"line-list"`, or `"line-strip"` topologies.

### `vertex` object structure

The `vertex` object can contain the following properties:

- `constants` {{optional_inline}}

  - : A sequence of record types, with the structure `(id, value)`, representing override values for [WGSL constants that can be overridden in the pipeline](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). These behave like [ordered maps](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). In each case, the `id` is a key used to identify or select the record, and the `constant` is an enumerated value representing a WGSL.

    Depending on which constant you want to override, the `id` may take the form of the numeric ID of the constant, if one is specified, or otherwise the constant's identifier name.

    A code snippet providing override values for several overridable constants might look like this:

    ```js
    {
      // ...
      constants: {
        0: false,
        1200: 3.0,
        1300: 2.0,
        width: 20,
        depth: -1,
        height: 15,
      }
    }
    ```

- `entryPoint`
  - : The name of the function in the `module` that this stage will use to perform its work. The corresponding shader function must have the `@vertex` attribute to be identified as this entry point. See [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) for more information.
- `module`
  - : A {{domxref("GPUShaderModule")}} object containing the [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) code that this programmable stage will execute.
- `buffers` {{optional_inline}}

  - : An array of objects, each representing the expected layout of a vertex buffer used in the pipeline. Each object can contain the following properties:

    - `arrayStride`
      - : A number representing the stride, in bytes, between the different structures (e.g. vertices) inside the buffer.
    - `attributes`
      - : An array of objects defining the layout of the vertex attributes within each structure. Each object has the following properties:
        - `format`
          - : An enumerated value that specifies the format of the vertex. For all the available values, see the [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) definition in the specification.
        - `offset`
          - : A number specifying the offset, in bytes, from the beginning of the structure to the data for the attribute.
        - `shaderLocation`
          - : The numeric location associated with this attribute, which will correspond with a [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) attribute declared in the WGSL code of the associated {{domxref("GPUShaderModule")}} referenced in the `vertex` object's `module` property.
    - `stepMode` {{optional_inline}}

      - : An enumerated value that defines whether the separate structures inside the buffer represent vertices or instances. Possible values are:

        - `"instance"`: Each structure is an instance — the address is advanced by `arrayStride` for each instance.
        - `"vertex"`: Each structure is a vertex — the address is advanced by `arrayStride` for each vertex, and reset between instances.

        If omitted, `stepMode` defaults to `"vertex"`.

### Return value

A {{domxref("GPURenderPipeline")}} object instance.

### Validation

The following criteria must be met when calling **`createRenderPipeline()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPURenderPipeline")}} object is returned:

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

Our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) provides a simple example of the construction of a valid render pipeline descriptor object, which is then used to create a {{domxref("GPURenderPipeline")}} via a `createRenderPipeline()` call.

```js
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

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
