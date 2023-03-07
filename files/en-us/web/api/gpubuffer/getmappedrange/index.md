---
title: GPUBuffer.getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.getMappedRange
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`getMappedRange()`** method of the
{{domxref("GPUBuffer")}} interface returns an {{jsxref("ArrayBuffer")}} containing the mapped contents of the `GPUBuffer` in the specified range.

This can only happen once the `GPUBuffer` has been successfully mapped with {{domxref("GPUBuffer.mapAsync()")}}. In this state, the GPU cannot access the `GPUBuffer`.

When you have finished working with the `GPUBuffer` values, call {{domxref("GPUBuffer.unmap()")}} to unmap it, making it accessible to the GPU again.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameters

- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, from the start of the `GPUBuffer`'s mapped range to the start of the range to be returned in the {{jsxref("ArrayBuffer")}}. If `offset` is omitted, it defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the {{jsxref("ArrayBuffer")}} to return. If `size` is omitted, the range extends to the end of the `GPUBuffer`'s mapped range.

### Return value

An {{jsxref("ArrayBuffer")}}.

### Validation

The following criteria must be met when calling **`getMappedRange()`**, otherwise an `OperationError` {{domxref("DOMException")}} is thrown:

- `offset` is a multiple of 8.
- The total range to be mapped (`size` if specified, or mapped range length - `offset` if not) is a multiple of 4.
- The total range is inside the bounds of the mapped range and does not overlap with the {{jsxref("ArrayBuffer")}} ranges specified by any other active `getMappedRange()` calls.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if an attempt is made to detach the {{jsxref("ArrayBuffer")}} in any way other than via {{domxref("GPUBuffer.unmap()")}}.

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
- `getMappedRange()` is used to return an {{domxref("ArrayBuffer")}} containing the `GPUBuffer`'s contents.
- {{domxref("GPUBuffer.unmap()")}} is used to unmap the `GPUBuffer` again, once we have read the content into JavaScript as needed.

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
