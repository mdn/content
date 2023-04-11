---
title: "GPURenderBundleEncoder: setIndexBuffer() method"
short-title: setIndexBuffer()
slug: Web/API/GPURenderBundleEncoder/setIndexBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.setIndexBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`setIndexBuffer()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface sets the current {{domxref("GPUBuffer")}} that will provide index data for subsequent drawing commands.

> **Note:** This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}}.

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameters

- `buffer`
  - : A {{domxref("GPUBuffer")}} representing the buffer containing the index data to use for subsequent drawing commands.
- `indexFormat`
  - : An enumerated value that defines the format of the index data contained in `buffer`. Possible values are:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, into `buffer` where the index data begins. If omitted, `offset` defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the index data contained in `buffer`. If omitted, `size` defaults to the `buffer`'s {{domxref("GPUBuffer.size")}} - `offset`.

#### Note on indexFormat

`indexFormat` determines both the data type of index values in a buffer and, when used with a pipeline that specifies a strip primitive topology (`"line-strip"` or `"triangle-strip"`), also determines the primitive restart value. The primitive restart value is an index value indicating that a new primitive should be started rather than continuing to construct the strip with the prior indexed vertices. The value is `0xFFFF` for `"uint16"`, or `0xFFFFFFFF` for `"uint32"`.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setIndexBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderBundleEncoder")}} becomes invalid:

- `buffer`'s {{domxref("GPUBuffer.usage")}} contains the `GPUBufferUsage.INDEX` flag.
- `offset` + `size` is less than or equal to the `buffer`'s {{domxref("GPUBuffer.size")}}.
- `offset` is a multiple of `indexFormat`'s byte size (2 for `"uint16"`, 4 for `"uint32"`).

## Examples

```js
// ...

const bundleEncoder = device.createRenderBundleEncoder(descriptor);

bundleEncoder.setPipeline(pipeline);
bundleEncoder.setBindGroup(0, sceneBindGroupForRender);
bundleEncoder.setBindGroup(1, modelBindGroup);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");
bundleEncoder.drawIndexed(indexCount);

const renderBundle = bundleEncoder.finish();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
