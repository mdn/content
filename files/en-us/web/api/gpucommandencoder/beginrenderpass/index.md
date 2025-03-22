---
title: "GPUCommandEncoder: beginRenderPass() method"
short-title: beginRenderPass()
slug: Web/API/GPUCommandEncoder/beginRenderPass
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.beginRenderPass
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`beginRenderPass()`** method of the
{{domxref("GPUCommandEncoder")}} interface starts encoding a render pass, returning a {{domxref("GPURenderPassEncoder")}} that can be used to control rendering.

## Syntax

```js-nolint
beginRenderPass(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `colorAttachments`
      - : An array of objects (see [Color attachment object structure](#color_attachment_object_structure)) defining the color attachments that will be output to when executing this render pass.
    - `depthStencilAttachment` {{optional_inline}}
      - : An object (see [Depth/stencil attachment object structure](#depthstencil_attachment_object_structure)) defining the depth/stencil attachment that will be output to and tested against when executing this render pass.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `maxDrawCount` {{optional_inline}}
      - : A number indicating the maximum number of draw calls that will be done in the render pass. This is used by some implementations to size work injected before the render pass. You should keep the default value — 50000000 — unless you know that more draw calls will be done.
    - `occlusionQuerySet` {{optional_inline}}
      - : The {{domxref("GPUQuerySet")}} that will store the occlusion query results for this pass.
    - `timestampWrites` {{optional_inline}}

      - : An array of objects defining where and when timestamp query values will be written for this pass. These objects have the following properties:

        - `location`: An enumerated value specifying when the timestamp will be executed. Available values are:
          - `"beginning"`: The timestamp is executed along with the other encoded commands in the compute pass once the corresponding {{domxref("GPUCommandBuffer")}} is submitted.
          - `"end"`: The timestamp is executed as part of a separate list of timestamp attachments once the pass ends.
        - `queryIndex`: A number specifying the index position in the `querySet` that the timestamp will be written to.
        - `querySet`: The {{domxref("GPUQuerySet")}} that the timestamp will be written to.

        > [!NOTE]
        > The `timestamp-query` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to use timestamp queries.

### Color attachment object structure

Color attachment objects can have the following properties:

- `clearValue` {{optional_inline}}

  - : A color value to clear the `view` texture to, prior to executing the render pass. This value is ignored if `loadOp` is not set to `"clear"`. `clearValue` takes an array or object representing the four color components `r`, `g`, `b`, and `a` as decimals.

    What follows is a sample array:

    ```js
    clearValue: [0.0, 0.5, 1.0, 1.0];
    ```

    The object equivalent would look like this:

    ```js
    clearValue: {
      r: 0.0,
      g: 0.5,
      b: 1.0,
      a: 1.0
    }
    ```

    If `clearValue` is omitted, it defaults to `{r: 0, g: 0, b: 0, a: 0}`.

- `depthSlice` {{optional_inline}}

  - : A number representing the index of the 3D depth slice that will be output to for this color attachment, in the case of a 3D {{domxref("GPUTextureView")}} `view`. When specified, this allows WebGPU to render directly to slices of 3D textures within render passes.

- `loadOp`

  - : An enumerated value indicating the load operation to perform on `view` prior to executing the render pass. Possible values are:

    - `"clear"`: Loads the `clearValue` for this attachment into the render pass.
    - `"load"`: Loads the existing value for this attachment into the render pass.

    > [!NOTE]
    > It is recommended to always use `"clear"` in cases where the initial value doesn't matter, as it will give better performance on some devices such as mobiles.

- `storeOp`
  - : An enumerated value indicating the store operation to perform on `view` after executing the render pass. Possible values are:
    - `"discard"`: Discards the resulting value of the render pass for this attachment.
    - `"store"`: Stores the resulting value of the render pass for this attachment.
- `resolveTarget` {{optional_inline}}
  - : A {{domxref("GPUTextureView")}} object representing the texture subresource that will receive the resolved output for this color attachment if `view` is multisampled.
- `view`

  - : A {{domxref("GPUTextureView")}} object representing the texture subresource that will be output to for this color attachment.

    > [!NOTE]
    > Each color or depth/stencil attachment must be a unique texture subresource, and texture subresources used as attachments cannot be used inside the render pass.

### Depth/stencil attachment object structure

The `depthStencilAttachment` object can have the following properties:

- `depthClearValue` {{optional_inline}}

  - : A number indicating the value to clear `view`'s depth component prior to executing the render pass. This is ignored if `depthLoadOp` is not set to `"clear"`.

    The value must be between 0.0 and 1.0, inclusive.

- `depthLoadOp` {{optional_inline}}

  - : An enumerated value indicating the load operation to perform on `view`'s depth component prior to executing the render pass. Possible values are:

    - `"clear"`: Loads the `clearValue` for this attachment into the render pass.
    - `"load"`: Loads the existing value for this attachment into the render pass.

    > [!NOTE]
    > It is recommended to always use `"clear"` in cases where the initial value doesn't matter, as it will give better performance on some devices such as mobiles.

- `depthReadOnly` {{optional_inline}}
  - : A boolean. Setting the value to `true` causes the depth component of `view` to be read-only. If `depthReadOnly` is omitted, it defaults to `false`.
- `depthStoreOp` {{optional_inline}}
  - : An enumerated value indicating the store operation to perform on `view`'s depth component after executing the render pass. Possible values are:
    - `"discard"`: Discards the resulting value of the render pass for this attachment.
    - `"store"`: Stores the resulting value of the render pass for this attachment.
- `stencilClearValue` {{optional_inline}}

  - : A number indicating the value to clear `view`'s stencil component to prior to executing the render pass. This is ignored if `stencilLoadOp` is not set to `"clear"`.

    If `stencilClearValue` is omitted, it defaults to 0.

- `stencilLoadOp` {{optional_inline}}

  - : An enumerated value indicating the load operation to perform on `view`'s stencil component prior to executing the render pass. Possible values are:

    - `"clear"`: Loads the `clearValue` for this attachment into the render pass.
    - `"load"`: Loads the existing value for this attachment into the render pass.

    > [!NOTE]
    > It is recommended to always use `"clear"` in cases where the initial value doesn't matter, as it will give better performance on some devices such as mobiles.

- `stencilReadOnly` {{optional_inline}}
  - : A boolean. Setting the value to `true` causes the stencil component of `view` to be read-only. If `stencilReadOnly` is omitted, it defaults to `false`.
- `stencilStoreOp` {{optional_inline}}
  - : An enumerated value indicating the store operation to perform on `view`'s stencil component after executing the render pass. Possible values are:
    - `"discard"`: Discards the resulting value of the render pass for this attachment.
    - `"store"`: Stores the resulting value of the render pass for this attachment.
- `view`
  - : A {{domxref("GPUTextureView")}} object representing the texture subresource that will be output to and read from for this depth/stencil attachment.

### Return value

A {{domxref("GPURenderPassEncoder")}} object instance.

### Validation

The following criteria must be met when calling **`beginRenderPass()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPURenderPassEncoder")}} is returned.

General:

- `colorAttachments.length` is less than or equal to the {{domxref("GPUDevice")}}'s `maxColorAttachments` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- If `colorAttachments` contains only `null` values, `depthStencilAttachment` is provided.
- All `view`s in `colorAttachments` and `depthStencilAttachment` have equal {{domxref("GPUTexture.sampleCount")}} values and render extents ({{domxref("GPUTexture.height")}}, {{domxref("GPUTexture.width")}}, and {{domxref("GPUTexture.depthOrArrayLayers")}}).
- If `occlusionQuerySet` is set, the referenced {{domxref("GPUQuerySet")}} has a `type` of `"occlusion"`.

For color attachment objects

- The `view` is renderable, and the `view`'s format (i.e. specified in the descriptor of the originating {{domxref("GPUTexture.createView()")}} call) is a color renderable format.
- If `resolveTarget` is provided:
  - The `view`'s originating {{domxref("GPUTexture")}}'s {{domxref("GPUTexture.sampleCount", "sampleCount")}} is greater than 1.
  - The `resolveTarget`'s originating {{domxref("GPUTexture")}}'s {{domxref("GPUTexture.sampleCount", "sampleCount")}} is 1.
  - `resolveTarget` is renderable.
  - The sizes of the subresources that `view` and `resolveTarget` provide a view of match.
  - `view`'s and `resolveTarget`'s formats match.
- [Color attachments bytes per sample](https://gpuweb.github.io/gpuweb/#abstract-opdef-validating-gpurenderpassdescriptors-color-attachment-bytes-per-sample) is less than or equal to the {{domxref("GPUDevice")}}'s `maxColorAttachmentBytesPerSample` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

For depth/stencil attachment objects:

- The `view` is renderable, and its format is a [depth-or-stencil](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) format.
- If `depthLoadOp` is set to `"clear"`, a valid `depthClearValue` is provided.
- If `view`'s format is a combined depth-or-stencil format, `depthReadOnly` matches `stencilReadOnly`.
- If `view`'s format has a depth aspect, and `depthReadOnly` is `false`, `depthLoadOp` and `depthStoreOp` are provided.
- If `view`'s format has a depth aspect, and `depthReadOnly` is `true`, `depthLoadOp` and `depthStoreOp` are not provided.
- If `view`'s format has a stencil aspect, and `stencilReadOnly` is `false`, `stencilLoadOp` and `stencilStoreOp` are provided.
- If `view`'s format has a stencil aspect, and `stencilReadOnly` is `true`, `stencilLoadOp` and `stencilStoreOp` are not provided.

For timestamp queries:

- The `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} is enabled in the {{domxref("GPUDevice")}}.
- No two `timestampWrites` objects have the same `location`. In effect, this means that you can only run two timestamp queries per render pass.
- For each timestamp query, the `querySet` {{domxref("GPUQuerySet.type")}} is `"timestamp"`, and the `queryIndex` value is less than the {{domxref("GPUQuerySet.count")}}.
- No two `timestampWrites` objects have the same `queryIndex` and `querySet` pair.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), a number of commands are recorded via a {{domxref("GPUCommandEncoder")}}. These commands originate from the {{domxref("GPURenderPassEncoder")}} created via `beginRenderPass()` :

```js
// ...

// Create GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Create GPURenderPassDescriptor to tell WebGPU which texture to draw into, then initiate render pass

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Draw a triangle

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass

passEncoder.end();

device.queue.submit([commandEncoder.finish()]);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
