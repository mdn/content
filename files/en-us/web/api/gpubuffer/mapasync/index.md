---
title: "GPUBuffer: mapAsync() method"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUBuffer.mapAsync
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`mapAsync()`** method of the
{{domxref("GPUBuffer")}} interface maps the specified range of the `GPUBuffer`. It returns a {{jsxref("Promise")}} that resolves when the `GPUBuffer`'s content is ready to be accessed. While the `GPUBuffer` is mapped it cannot be used in any GPU commands.

Once the buffer is successfully mapped (which can be checked via {{domxref("GPUBuffer.mapState")}}), calls to {{domxref("GPUBuffer.getMappedRange()")}} will return an {{jsxref("ArrayBuffer")}} containing the `GPUBuffer`'s current values, to be read and updated by JavaScript as required.

When you have finished working with the `GPUBuffer` values, call {{domxref("GPUBuffer.unmap()")}} to unmap it, making it accessible to the GPU again.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameters

- `mode`

  - : A {{glossary("bitwise flags", "bitwise flag")}} that specifies whether the `GPUBuffer` is mapped for reading or writing. Possible values are:

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

See the [main `GPUBuffer` page](/en-US/docs/Web/API/GPUBuffer#examples) for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
