---
title: GPUDevice.createBuffer()
slug: Web/API/GPUDevice/createBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createBuffer()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUBuffer")}} in which to store raw data to use in GPU operations.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `mappedAtCreation` {{optional_inline}}

      - : A boolean. If set to `true`, the buffer will be mapped upon creation, meaning that JavaScript can access the values inside the buffer by calling {{domxref("GPUBuffer.getMappedRange()")}} immediately. The default value is `false`.

        Note that it is valid to set `mappedAtCreation: true` so you can set the buffer's initial data, even if the `GPUBufferUsage.MAP_READ` or `GPUBufferUsage.MAP_WRITE` usage flags are not set.

    - `size`
      - : A number representing the size of the buffer, in bytes.
    - `usage`

      - : The allowed usages for the `GPUBuffer`. Possible values are:

        - `GPUBufferUsage.COPY_SRC`: The buffer can be used as the source of a copy operation, for example the source argument of a {{domxref("GPUCommandEncoder.copyBufferToBuffer()")}} call.
        - `GPUBufferUsage.COPY_DST`: The buffer can be used as the destination of a copy/write operation, for example the destination argument of a {{domxref("GPUCommandEncoder.copyTextureToBuffer()")}} call.
        - `GPUBufferUsage.INDEX`: The buffer can be used as an index buffer, for example as the `buffer` argument passed to {{domxref("GPURenderPassEncoder.setIndexBuffer()")}}.
        - `GPUBufferUsage.INDIRECT`: The buffer can be used to store indirect command arguments, for example as the `indirectBuffer` argument of a {{domxref("GPURenderPassEncoder.drawIndirect()")}} or {{domxref("GPURenderPassEncoder.dispatchWorkgroupsIndirect()")}} call.
        - `GPUBufferUsage.MAP_READ`: The buffer can be mapped for reading, for example when calling {{domxref("GPUBuffer.mapAsync()")}} with a `mode` of `GPUMapMode.READ`. This flag may only be combined with `GPUBufferUsage.COPY_DST`.
        - `GPUBufferUsage.MAP_WRITE`: The buffer can be mapped for writing, for example when calling {{domxref("GPUBuffer.mapAsync()")}} with a `mode` of `GPUMapMode.WRITE`. This flag may only be combined with `GPUBufferUsage.COPY_SRC`.
        - `GPUBufferUsage.QUERY_RESOLVE`: The buffer can be used to to capture query results, for example as the destination argument of a {{domxref("GPUCommandEncoder.resolveQuerySet()")}} call.
        - `GPUBufferUsage.STORAGE`: The buffer can be used as a storage buffer, for example as a resource in a bind group entry when creating a {{domxref("GPUBindGroup")}} (via {{domxref("GPUDevice.createBindGroup()")}}), which adheres to a {{domxref("GPUBindGroupLayout")}} entry with a buffer binding layout `type` of `"storage"` or `"read-only-storage"`.
        - `GPUBufferUsage.UNIFORM`: The buffer can be used as a uniform buffer, for example as a resource in a bind group entry when creating a {{domxref("GPUBindGroup")}} (via {{domxref("GPUDevice.createBindGroup()")}}), which adheres to a {{domxref("GPUBindGroupLayout")}} entry with a buffer binding layout `type` of `"uniform"`.
        - `GPUBufferUsage.VERTEX`: The buffer can be used as a vertex buffer, for example as the `buffer` argument passed to {{domxref("GPURenderPassEncoder.setVertexBuffer()")}}.

        Note that multiple possible usages can be specified by separating values with pipe symbols, for example:

        ```js
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
        ```

### Return value

A {{domxref("GPUBuffer")}} object instance.

### Validation

- If the buffer allocation fails without any specific side-effects, an {{domxref("GPUOutOfMemoryError")}} is generated.
- If any of the following are false, a {{domxref("GPUValidationError")}} is generated:
  - A valid `usage` is specified.
  - `GPUBufferUsage.MAP_READ` is specified, and no additional flags are specified other than `GPUBufferUsage.COPY_DST`.
  - `GPUBufferUsage.MAP_WRITE` is specified, and no additional flags are specified other than `GPUBufferUsage.COPY_SRC`.
  - `mappedAtCreation: true` is specified, and the specified `size` is a multiple of 4.

## Examples

In our [basic compute demo](https://webgpu-basic-compute.glitch.me/), we create an output buffer to read GPU calculations to, and a staging buffer to be mapped for JavaScript access.

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
