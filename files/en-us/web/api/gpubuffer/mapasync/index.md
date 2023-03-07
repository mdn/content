---
title: GPUBuffer.mapAsync()
slug: Web/API/GPUBuffer/mapAsync
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.mapAsync
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`mapAsync()`** method of the
{{domxref("GPUBuffer")}} interface maps the specified range of the `GPUBuffer`. It returns a {{jsxref("Promise")}} that resolves when the `GPUBuffer`'s content is ready to be accessed.

Once the buffer is mapped, calls to {{domxref("GPUBuffer.getMappedRange()")}} will return an {{jsxref("ArrayBuffer")}} containing the `GPUBuffer`'s current values, to be read and updated by JavaScript as required. In this state, the GPU cannot access the `GPUBuffer`.

When you have finished working with the `GPUBuffer` values, call {{domxref("GPUBuffer.unmap()")}} to unmap it, making it accessible to the GPU again.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameters

- `mode`

  - : A usage flag that specifies whether the `GPUBuffer` is mapped for reading or writing. Possible values are:

    - `GPUMapMode.READ`

      - : The `GPUBuffer` is mapped for reading. Values can be read, but any changes made to the {{jsxref("ArrayBuffer")}} returned by {{domxref("GPUBuffer.getMappedRange()")}} will be discarded once {{domxref("GPUBuffer.unmap()")}} is called.

        Read-mode mapping can only be used on `GPUBuffer`s that have a usage of `GPUBufferUsage.MAP_READ` set on them (i.e. when created with {{domxref("GPUDevice.createBuffer()")}}).

    - `GPUMapMode.WRITE`

      - : The `GPUBuffer` is mapped for writing. Values can be read and updated — any changes made to the {{jsxref("ArrayBuffer")}} returned by {{domxref("GPUBuffer.getMappedRange()")}} will be saved to the `GPUBuffer` once {{domxref("GPUBuffer.unmap()")}} is called.

        Write-mode mapping can only be used on `GPUBuffer`s that have a usage of `GPUBufferUsage.MAP_WRITE` set on them (i.e. when created with {{domxref("GPUDevice.createBuffer()")}}).

- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, from the start of the buffer to the start of the range to be mapped. If `offset` is omitted, it defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the range to be mapped. If `size` is omitted, the range mapped extends to the end of the `GPUBuffer`.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("Undefined")}} when the `GPUBuffer`'s content is ready to be accessed.

### Validation

The following criteria must be met when calling **`mapSync()`**, otherwise an `OperationError` {{domxref("DOMException")}} is thrown, the promise is rejected, and a {{domxref("GPUValidationError")}} is generated:

- `offset` is a multiple of 8.
- The total range to be mapped (`size` if specified, or {{domxref("GPUBuffer.size")}} - `offset` if not) is a multiple of 4.
- The total range to be mapped is inside the bounds of the `GPUBuffer`.
- If mode is `GPUMapMode.READ`, the `GPUBuffer` has a usage of `GPUBufferUsage.MAP_READ`.
- If mode is `GPUMapMode.WRITE`, the `GPUBuffer` has a usage of `GPUBufferUsage.MAP_WRITE`.

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

- `mapAsync()` is used to map the `GPUBuffer` for reading.
- {{domxref("GPUBuffer.getMappedRange()")}} is used to return an {{domxref("ArrayBuffer")}} containing the `GPUBuffer`'s contents.
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
