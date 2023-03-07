---
title: GPUBuffer.unmap()
slug: Web/API/GPUBuffer/unmap
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.unmap
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`unmap()`** method of the
{{domxref("GPUBuffer")}} interface unmaps the mapped range of the `GPUBuffer`, making its contents available for use by the GPU again after it has previously been mapped with {{domxref("GPUBuffer.mapAsync()")}} (the GPU cannot access a mapped `GPUBuffer`).

When `unmap()` is called, any {{jsxref("ArrayBuffer")}}s created via {{domxref("GPUBuffer.getMappedRange()")}} are detached.

## Syntax

```js-nolint
unmap()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

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

Later on, once the `stagingBuffer` contains the results of the GPU computation, a combination of `GPUBuffer` methods are used to read the data back to JavaScript so that it can then be logged to the console:

- {{domxref("GPUBuffer.mapAsync()")}} is used to map the `GPUBuffer` for reading.
- {{domxref("GPUBuffer.getMappedRange()")}} is used to return an {{domxref("ArrayBuffer")}} containing the `GPUBuffer`'s contents.
- `unmap()` is used to unmap the `GPUBuffer` again, once we have read the content into JavaScript as needed.

```js
// map staging buffer to read results back to JS
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE // Length
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
