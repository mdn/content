---
title: "GPUDevice: createBindGroup() method"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createBindGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createBindGroup()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUBindGroup")}} based on a {{domxref("GPUBindGroupLayout")}} that defines a set of resources to be bound together in a group and how those resources are used in shader stages.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `entries`
      - : An array of entry objects describing the resources to expose to the shader. There will be one for each corresponding entry described by the {{domxref("GPUBindGroupLayout")}} referenced in `layout`. Each entry object has the following properties:
        - `binding`
          - : A number representing a unique identifier for this resource binding, which matches the `binding` value of a corresponding {{domxref("GPUBindGroupLayout")}} entry. In addition, it matches the `n` index value of the corresponding [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) attribute in the shader ({{domxref("GPUShaderModule")}}) used in the related pipeline.
        - `resource`
          - : The resource to bind. This can be one of the following:
            - `GPUBufferBinding` (which wraps a {{domxref("GPUBuffer")}}; see [GPUBufferBinding objects](#gpubufferbinding_objects) for a definition)
            - {{domxref("GPUExternalTexture")}}
            - {{domxref("GPUSampler")}}
            - {{domxref("GPUTextureView")}}
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `layout`
      - : The {{domxref("GPUBindGroupLayout")}} that the `entries` of this bind group will conform to.

### GPUBufferBinding objects

A `GPUBufferBinding` object can contain the following properties:

- `buffer`
  - : The {{domxref("GPUBuffer")}} object you want to bind.
- `offset` {{optional_inline}}
  - : The offset, in bytes, from the beginning of the `buffer` to the beginning of the range exposed to the shader by the buffer binding. If omitted, `offset` defaults to 0.
- `size` {{optional_inline}}
  - : The size, in bytes, of the buffer binding. If omitted, `size` will be the range starting at `offset` and ending at the end of the `buffer`. If both `offset` and `size` are omitted, the entire buffer is exposed to the shader.

### Return value

A {{domxref("GPUBindGroup")}} object instance.

### Validation

The following criteria must be met when calling **`createBindGroup()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUBindGroup")}} object is returned:

- The number of entries in the `layout` {{domxref("GPUBindGroupLayout")}} equals the number of entry objects in `entries`.
- For each entry in the `layout` {{domxref("GPUBindGroupLayout")}}, the corresponding entry object in `entries` binds the correct resource type. For example, a `buffer` resource layout object has a `GPUBufferBinding` object specified in the corresponding binding.
- If the resource layout object is a `buffer`:
  - The corresponding bound {{domxref("GPUBuffer")}}:
    - Has its bound part (as specified by `offset` and `size`) contained inside it completely, with a non-zero size.
    - Has a size bigger than the `buffer` resource layout's `minBindingSize`.
  - If the resource layout object `type` is `"uniform"`:
    - The bound {{domxref("GPUBuffer")}} has a `usage` that includes `GPUBufferUsage.UNIFORM`.
    - The effective size of the bound buffer segment is less than or equal to the {{domxref("GPUDevice")}}'s `maxUniformBufferBindingSize` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
    - The specified `GPUBufferBinding` `offset` is a multiple of the {{domxref("GPUDevice")}}'s `minUniformBufferOffsetAlignment` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
  - If the resource layout object `type` is `"storage"` or `"read-only-storage"`:
    - The bound {{domxref("GPUBuffer")}} has a `usage` that includes `GPUBufferUsage.STORAGE`.
    - The effective size of the bound buffer segment is less than or equal to the {{domxref("GPUDevice")}}'s `maxStorageBufferBindingSize` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
    - The effective size of the bound buffer segment is a multiple of 4.
    - The specified `GPUBufferBinding` `offset` is a multiple of the {{domxref("GPUDevice")}}'s `minStorageBufferOffsetAlignment` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- If the resource layout object is a `storageTexture`, the corresponding bound {{domxref("GPUTextureView")}}:
  - Has a `dimension` equal to the resource layout object's `viewDimension` (see {{domxref("GPUTexture.createView()")}} for more details of a texture view's settings).
  - Has a `format` equal to the resource layout object's `sampleType`.
  - Has a `mipLevelCount` equal to 1.
  - Is a view of a {{domxref("GPUTexture")}} with a `usage` that includes `GPUTextureUsage.STORAGE_BINDING`.
- If the resource layout object is a `texture`, the corresponding bound {{domxref("GPUTextureView")}}:
  - Has a `dimension` equal to the resource layout object's `viewDimension` (see {{domxref("GPUTexture.createView()")}} for more details of a texture view's settings).
  - Has a `format` compatible with the resource layout object's `sampleType`.
  - Is a view of a {{domxref("GPUTexture")}} with a `usage` that includes `GPUTextureUsage.TEXTURE_BINDING`.
  - is a view of a {{domxref("GPUTexture")}} with a `sampleCount` greater than 1 if the resource layout object's `multisampled` property is `true`, or equal to 1 if it is `false`.

## Examples

> **Note:** The [WebGPU samples](https://webgpu.github.io/webgpu-samples/) feature many more examples.

### Basic example

Our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) shows an example of creating a bind group layout and then using that as a template when creating a bind group.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
