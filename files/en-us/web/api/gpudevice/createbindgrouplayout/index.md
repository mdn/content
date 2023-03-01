---
title: GPUDevice.createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createBindGroupLayout
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createBindGroupLayout()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUBindGroupLayout")}} that defines the structure and purpose of related GPU resources such as buffers that will be used in a pipeline, and is used as a template when creating {{domxref("GPUBindGroup")}}s.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `entries`
      - : An array of entry objects, each one of which describes a single shader resource binding to be included in the {{domxref("GPUBindGroupLayout")}}. Each entry will correspond to an entry defined in a {{domxref("GPUBindGroup")}} (created via a {{domxref("Device.createBindGroup()")}} call) that uses this {{domxref("GPUBindGroupLayout")}} object as a template.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

### Entry objects

An entry object includes the following properties:

- `binding`
  - : A number representing a unique identifier for this particular entry, which matches the `binding` value of a corresponding {{domxref("GPUBindGroup")}} entry. In addition, it corresponds to a [`@binding`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) attribute in the shader code contained in the {{domxref("GPUShaderModule")}} used in a related pipeline.
- `visibility`

  - : Defines the shader stages that a {{domxref("GPUBindGroup")}} entry corresponding to this entry is will be visible to. Possible values are:

    - `GPUShaderStage.COMPUTE`: The bind group entry will be accessible to compute shaders.
    - `GPUShaderStage.FRAGMENT`: The bind group entry will be accessible to fragment shaders.
    - `GPUShaderStage.VERTEX`: The bind group entry will be accessible to vertex shaders.

    Note that multiple stages can be specified by separating values with pipe symbols, for example:

    ```js
    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX;
    ```

- "Resource layout"
  - : An object that defines the required binding resource type and structure of the {{domxref("GPUBindGroup")}} entry corresponding to this entry. This object can be one of `buffer`, `sampler`, `texture`, `storageTexture`, or `externalTexture`, the structures of which are described in the next section.

### Resource layout objects

The resource layout object can be one of the following (see also {{domxref("Device.createBindGroup()")}} for further related details):

- `buffer`: Indicates that the corresponding {{domxref("GPUBindGroup")}} entry will be a `GPUBufferBinding` object, which contains a {{domxref("GPUBuffer")}} plus `offset` and `size` values. A `buffer` resource layout object can contain the following properties:

  - `hasDynamicOffset` {{optional_inline}}

    - : A boolean. If set to `true`, it indicates that this binding requires a dynamic offset, for example as set during a {{domxref("GPURenderPassEncoder.setBindGroup()")}} call. If omitted, `hasDynamicOffset` defaults to `false`.

  - `minBindingSize` {{optional_inline}}

    - : A number indicating the minimum allowed size, in bytes, of bound buffers. If omitted, `minBindingSize` defaults to 0. If the value is 0, minimum buffer size is ignored during pipeline creation and is instead validated by issued draw/dispatch commands.

  - `type` {{optional_inline}}

    - : An enumerated value specifying the required type for {{domxref("GPUBuffer")}}s bound to this binding (see {{domxref("GPUDevice.createBuffer()")}} for more information on buffer types). Possible values are:

      - `"read-only-storage"`: A read-only buffer created with a `usage` of `GPUBufferUsage.STORAGE`.
      - `"storage"`: A writable buffer created with a `usage` of `GPUBufferUsage.STORAGE`.
      - `"uniform"`: A buffer created with a `usage` of `GPUBufferUsage.UNIFORM`.

      If omitted, `type` defaults to `"uniform"`.

- `externalTexture`: Indicates that the corresponding {{domxref("GPUBindGroup")}} entry will be a {{domxref("GPUExternalTexture")}} object. An `externalTexture` resource layout object is empty — `{}`.

- `sampler`: Indicates that the corresponding {{domxref("GPUBindGroup")}} entry will be a {{domxref("GPUSampler")}} object. A `sampler` resource layout object can contain the following properties:

  - `type` {{optional_inline}}

    - : An enumerated value specifying the required type for {{domxref("GPUSampler")}}s bound to this binding (see {{domxref("GPUDevice.createSampler()")}} for more information on sampler types). Possible values are:

      - `"comparison"`: A comparison sampler.
      - `"filtering"`: A filtering sampler.
      - `"non-filtering"`: A non-filtering sampler.

      If omitted, `type` defaults to `"filtering"`.

- `storageTexture`: Indicates that the corresponding {{domxref("GPUBindGroup")}} entry will be a {{domxref("GPUTextureView")}} object. A `storageTexture` resource layout object can contain the following properties:

  - `access` {{optional_inline}}
    - : An enumerated value specifying whether texture views bound to this binding will be bound for read and/or write access. Possible values are currently `"write-only"` and `undefined`, with the intention to add more access modes in the future. If omitted, the default value is `"write-only"`.
  - `format`
    - : An enumerated value specifying the required format of texture views bound to this binding. See the specification's [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) section for all the available `format` values.
  - `viewDimension` {{optional_inline}}

    - : An enumerated value specifying the required dimension for texture views bound to this binding. Possible values are:

      - `"1d"`: The texture is viewed as a 1-dimensional image.
      - `"2d"`: The texture is viewed as a single 2-dimensional image.
      - `"2d-array"`: The texture is viewed as an array of 2-dimensional images.
      - `"cube"`: The texture is viewed as a cubemap. The view has 6 array layers, corresponding to the `[+X, -X, +Y, -Y, +Z, -Z]` faces of the cube. Sampling is done seamlessly across the faces of the cubemap.
      - `"cube-array"`: The texture is viewed as a packed array of `n` cubemaps, each with 6 array layers corresponding to the `[+X, -X, +Y, -Y, +Z, -Z]` faces of the cube. Sampling is done seamlessly across the faces of the cubemaps.
      - `"3d"`: The texture is viewed as a 3-dimensional image.

      If omitted, `viewDimension` defaults to `"2d"`.

- `texture`: Indicates that the corresponding {{domxref("GPUBindGroup")}} entry will be a {{domxref("GPUTextureView")}} object. A `texture` resource layout object can contain the following properties:

  - `multisampled` {{optional_inline}}

    - : A boolean. A value of `true` indicates that texture views bound to this binding must be multi-sampled. If omitted, `multisampled` defaults to `false`.

  - `sampleType` {{optional_inline}}

    - : An enumerated value specifying the sample type required for texture views bound to this binding (see {{domxref("GPUDevice.createTexture()")}} for more information on texture view types). Possible values are:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      If omitted, `sampleType` defaults to `"float"`.

  - `viewDimension` {{optional_inline}}
    - : An enumerated value specifying the required dimension for texture views bound to this binding. Possible and default values are the same as for `storageTexture` resource layout objects — see above.

### Return value

A {{domxref("GPUBindGroupLayout")}} object instance.

### Invalid reasons

If any of the following are false, a {{domxref("GPUValidationError")}} is generated:

- Each entry's `binding` value is unique.
- Each entry's `binding` value is less than the {{domxref("GPUDevice")}}'s `maxBindingsPerBindGroup` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- The number of entries does not exceed the [binding slot limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Only 1 resource layout object is defined per entry.
- If an entry's `visibility` includes `GPUShaderStage.VERTEX`:
  - If its resource layout object is a `buffer`, its `type` is not `"storage"`.
  - Its resource layout object is not a `storageTexture`.
- If an entry's resource layout object is a `texture`, and its `multisampled` value is `true`:
  - Its `viewDimension` is `"2d"`.
  - Its `sampleType` is not `"float"`.
- If an entry's resource layout object is a `storageTexture`:
  - Its `viewDimension` is not `"cube"` or `"cube-array"`.
  - Its `format` is a format that supports storage usage.

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic compute demo](https://webgpu-basic-compute.glitch.me/) shows an example of creating a bind group layout and then using that as a template when creating a bind group.

```js
// ...

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});

// ...
```

### Multiple bind group layouts, bind group, and pipeline layout

The following snippet:

- Creates a {{domxref("GPUBindGroupLayout")}} that describes a binding with a uniform buffer, a texture, and a sampler.
- Creates a {{domxref("GPUBindGroup")}} and a {{domxref("GPUPipelineLayout")}} based on the {{domxref("GPUBindGroupLayout")}}.

```js
// ...

const bindGroupLayout = gpuDevice.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
      buffer: {},
    },
    {
      binding: 1,
      visibility: GPUShaderStage.FRAGMENT,
      texture: {},
    },
    {
      binding: 2,
      visibility: GPUShaderStage.FRAGMENT,
      sampler: {},
    },
  ],
});

const bindGroup = gpuDevice.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: { buffer: buffer },
    },
    {
      binding: 1,
      resource: texture,
    },
    {
      binding: 2,
      resource: sampler,
    },
  ],
});

const pipelineLayout = gpuDevice.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
